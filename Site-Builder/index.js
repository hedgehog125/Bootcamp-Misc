const BUILD_DIR = "build";
const INDEX_PLACEHOLDER = "%LINKS%";

import config from "./config.js";

import { exec as execCallback } from "child_process";
import { promisify } from "util";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const exec = promisify(execCallback);
process.chdir(path.dirname(fileURLToPath(import.meta.url)));

await fs.emptyDir(BUILD_DIR);

console.log("Building...");


await Promise.all([
	...config.static.map(async dirName => {
		await fs.mkdir(path.join(BUILD_DIR, dirName));
		await fs.copy(path.join("..", dirName), path.join(BUILD_DIR, dirName));
	}),
	...config.build.map(async dirName => {
		const cwd = process.cwd();
		process.chdir(path.join("..", dirName));
		const buildTask = exec("npm run build");
		process.chdir(cwd);
		const { stderr } = await buildTask;
		if (stderr != "") {
			throw new Error(`${dirName} build failed. Error:\n${stderr}`);
		}

		await fs.mkdir(path.join(BUILD_DIR, dirName));
		await fs.copy(path.join("..", dirName, "build"), path.join(BUILD_DIR, dirName));
	}),
	(async () => {
		await fs.copy("static/index", path.join(BUILD_DIR));


		const indexTemplate = await fs.readFile("static/index-template.html", { encoding: "utf8" });
		if (! indexTemplate.includes(INDEX_PLACEHOLDER)) {
			throw new Error("Index template doesn't contain INDEX_PLACEHOLDER.");
		}

		const links = [...config.static, ...config.build];
		const indexValue = `<ul>${links.map(dirName => `<li><a href="${dirName}/">${dirName}</a></li>`).join("\n")}</ul>`;
		const newIndex = indexTemplate.replace(INDEX_PLACEHOLDER, indexValue);
		
		await fs.writeFile(path.join(BUILD_DIR, "index.html"), newIndex, { encoding: "utf8" }); 
	})()
]);

console.log("Done");