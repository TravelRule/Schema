# @travel-rule/schema

Repo: `TravelRule/schema`

Shared JSON Schema definitions used by `api` and `dashboard`, kept in one
place so the two repos can't silently drift out of sync on data shapes.

## Contents

- `schemas/travel-rule-message.schema.json` — the IVMS101-inspired
  travel-rule message shape (institution-level fields only; see
  `api/docs/IVMS101_MAPPING.md` for scope).
- `schemas/screening-status.schema.json` — mirrors the on-chain
  `ScreeningStatus` enum from `attestation-registry`.

## Usage

```js
import { travelRuleMessageSchema, screeningStatusSchema } from "@travel-rule/schema";
import Ajv from "ajv";

const ajv = new Ajv();
const validate = ajv.compile(travelRuleMessageSchema);
```

## How consuming repos install this

`api` installs this straight from GitHub (see its `package.json`):

```json
"dependencies": {
  "@travel-rule/schema": "github:TravelRule/schema"
}
```

No local file path or sibling checkout needed — `npm install` pulls it
directly from the `TravelRule/schema` repo. If install speed or version
pinning becomes a problem as this grows, the natural next step is
publishing this as a real versioned package to npm or GitHub Packages and
switching `api`/`dashboard` to a normal semver dependency instead of a
GitHub reference.

## Keeping this in sync with the on-chain contract

`screening-status.schema.json` must match `attestation-registry`'s
`src/lib.rs` `ScreeningStatus` enum. If that enum ever changes (new status
value, renamed variant), update this schema in the same PR — there's no
automated check enforcing this in v1, which is a good first "harden this"
issue for someone to pick up (e.g. a small script that parses the enum out
of the Rust source and diffs it against this schema in CI).
