const BUILD_DIR = "build";

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

process.chdir(path.dirname(fileURLToPath(import.meta.url)));

await fs.emptyDir(BUILD_DIR);

await fs.writeFile(
	path.join(BUILD_DIR, "index.html"),
	`Build test. Random number at build time: ${Math.round(Math.random() * 100)}`,
	{ encoding: "utf8" }
);