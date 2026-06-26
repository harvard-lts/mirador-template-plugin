#!/usr/bin/env node
/**
 * CI coverage wrapper for the LTS reusable TestCoverageNode.yml workflow.
 *
 * That workflow assumes Jest and invokes:
 *   npm run test:unit -- --coverage=true --coverageDirectory=coverage --coverageReporters=json-summary
 *
 * This repo uses Vitest, which rejects those Jest-style flags. This wrapper
 * absorbs the appended flags and runs Vitest configured to emit the
 * json-summary report into ./coverage so the workflow can read
 * coverage/coverage-summary.json (.total.lines.pct) to build the badge.
 */
import { spawnSync } from 'node:child_process';

const result = spawnSync(
  'npx',
  [
    'vitest',
    'run',
    '--coverage.enabled=true',
    '--coverage.reportsDirectory=coverage',
    '--coverage.reporter=json-summary',
  ],
  { stdio: 'inherit', shell: process.platform === 'win32' },
);

process.exit(result.status ?? 1);
