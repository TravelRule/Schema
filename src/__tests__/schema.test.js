import { test } from "node:test";
import assert from "node:assert/strict";
import { travelRuleMessageSchema, screeningStatusSchema } from "../../index.js";

test("travelRuleMessageSchema is a valid JSON Schema object", () => {
  assert.equal(typeof travelRuleMessageSchema, "object");
  assert.equal(travelRuleMessageSchema.$schema, "http://json-schema.org/draft-07/schema#");
  assert.equal(travelRuleMessageSchema.type, "object");
});

test("travelRuleMessageSchema requires originatorInstitution, beneficiaryInstitution, and paymentReference", () => {
  assert.deepEqual(travelRuleMessageSchema.required, [
    "originatorInstitution",
    "beneficiaryInstitution",
    "paymentReference",
  ]);
});

test("travelRuleMessageSchema rejects additional properties", () => {
  assert.equal(travelRuleMessageSchema.additionalProperties, false);
});

test("screeningStatusSchema is a valid JSON Schema with the correct enum values", () => {
  assert.equal(typeof screeningStatusSchema, "object");
  assert.equal(screeningStatusSchema.type, "string");
  assert.deepEqual(screeningStatusSchema.enum, ["clear", "flagged", "pending"]);
});

test("schemas can be loaded multiple times without error", () => {
  const s1 = travelRuleMessageSchema;
  const s2 = travelRuleMessageSchema;
  assert.equal(s1, s2);
});
