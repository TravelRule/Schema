import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadSchema(filename) {
  const raw = readFileSync(path.join(__dirname, "schemas", filename), "utf-8");
  return JSON.parse(raw);
}

export const travelRuleMessageSchema = loadSchema("travel-rule-message.schema.json");
export const screeningStatusSchema = loadSchema("screening-status.schema.json");
