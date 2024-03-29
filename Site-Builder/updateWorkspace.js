/* 
	Updates the top level package.json's workspace to include all the folders that are built
*/

import { fileURLToPath } from "url";
import path from "path";

import config from "./config.js";

process.chdir(path.dirname(fileURLToPath(import.meta.url)));

console.log(config);