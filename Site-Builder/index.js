const BUILD_DIR = "build";
const INDEX_PLACEHOLDER = "%LINKS%";

import config from "./config.js";

import { exec } from "child_process";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

process.chdir(path.dirname(fileURLToPath(import.meta.url)));

await fs.emptyDir(BUILD_DIR);

console.log(`PUBLIC URL: ${process.env.PUBLIC_URL}`);
console.log("Building...");

await Promise.all([
	...config.static.map(async (dirName) => {
		await fs.stat(BUILD_DIR);
		await fs.mkdir(path.join(BUILD_DIR, dirName));
		await fs.copy(path.join("..", dirName), path.join(BUILD_DIR, dirName));
	}),
	...config.build.map(async (dirName) => {
		const [error, output] = await new Promise((resolve) => {
			exec(
				"npm run build",
				{
					cwd: path.join("..", dirName),
					env: {
						...process.env,
						PUBLIC_URL: `${process.env.PUBLIC_URL}/${dirName}/`,
					},
				},
				(error, stdout, stderr) => {
					resolve([stderr || error, stdout]);
				}
			);
		});
		if (error) {
			throw new Error(
				`${dirName} build failed. Error:\n${error}\nOutput:${output}`
			);
		}

		await fs.stat(BUILD_DIR);
		await fs.mkdir(path.join(BUILD_DIR, dirName));
		await fs.copy(
			path.join("..", dirName, "build"),
			path.join(BUILD_DIR, dirName)
		);
	}),
	(async () => {
		await fs.copy("static/index", path.join(BUILD_DIR));

		const indexTemplate = await fs.readFile("static/index-template.html", {
			encoding: "utf8",
		});
		if (!indexTemplate.includes(INDEX_PLACEHOLDER)) {
			throw new Error(
				"Index template doesn't contain INDEX_PLACEHOLDER."
			);
		}

		const links = [...config.static, ...config.build];
		const indexValue = `<ul>${links
			.map((dirName) => `<li><a href="${dirName}/">${dirName}</a></li>`)
			.join("\n")}</ul>`;
		const newIndex = indexTemplate.replace(INDEX_PLACEHOLDER, indexValue);

		await fs.writeFile(path.join(BUILD_DIR, "index.html"), newIndex, {
			encoding: "utf8",
		});
	})(),
]);

console.log("Done");
