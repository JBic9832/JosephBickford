import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const directory = path.join(process.cwd(), "json");
  const contents = await fs.readFile(directory + "/projects.json", "utf8");
  res.status(200).json(contents);
}
