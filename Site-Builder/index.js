const BUILD_DIR = "build";

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
	})
]);
const links = [...config.static, ...config.build];

console.log("Done");