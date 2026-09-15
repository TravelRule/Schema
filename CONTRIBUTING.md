# Contributing to @travel-rule/schema

Thanks for your interest in contributing! This document covers how to get
started.

## Development Setup

```bash
git clone https://github.com/TravelRule/Schema.git
cd Schema
npm install
```

## Scripts

| Command | Description |
|---|---|
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm test` | Run tests |

## Adding or Changing Schemas

1. Edit the JSON files in `schemas/`.
2. Update `index.js` if you add a new schema export.
3. Add tests in `src/__tests__/` to validate the new schema.
4. If changing `screening-status.schema.json`, ensure it stays in sync
   with the `ScreeningStatus` enum in the `attestation-registry` contract's
   `src/lib.rs`.

## Pull Request Process

1. Create a feature branch from `main`.
2. Make your changes and ensure `npm run lint && npm test` pass.
3. Open a PR with a clear description of what changed and why.
4. Wait for CI to pass and for a maintainer review.

## Code Style

- We use ESLint + Prettier. Run `npm run format` before committing.
- Use double quotes, semicolons, and trailing commas.
