/* 
	Updates the top level package.json's workspace to include all the folders that are built
*/

const PLACEHOLDER = `"PLACEHOLDER"`;

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

import config from "./config.js";

process.chdir(path.dirname(fileURLToPath(import.meta.url)));

const pkgJSONTemplate = await fs.readFile("static/top-package-template.json", { encoding: "utf8" });
if (! pkgJSONTemplate.includes(PLACEHOLDER)) {
	throw new Error("Couldn't find PLACEHOLDER");
}

const workspaceValue = JSON.stringify([
	...config.build
]);
const newPackageJSON = pkgJSONTemplate.replace(PLACEHOLDER, workspaceValue);

await fs.writeFile("../package.json", newPackageJSON, { encoding: "utf8" });