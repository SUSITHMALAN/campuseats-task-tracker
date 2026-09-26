# CampusEats Task Tracker

A small Node.js example repository for practising the GitHub Flow, pull requests, CI, and secure code review.

## Run and test

Requires Node.js 22 or newer.

```sh
npm ci
npm start
npm test
```

`src/tasks.js` contains the sample open-task list and an order-total function with VIP pricing. The calculator rejects invalid prices and quantities.

## Collaboration

Use short-lived branches such as `feature/add-due-dates` and `chore/add-ci`; merge reviewed pull requests into `main`. Use Conventional Commit messages such as `feat: add due dates to tasks` and `fix: correct total`. Include `Closes #<issue-number>` in a pull request description to close its linked issue when the pull request is merged.

## CI and security

GitHub Actions runs the tests and `npm audit` on pushes to `main`, `feature/**`, and `chore/**`, and on pull requests targeting `main`. A failing check should block the merge. Dependabot is configured to check npm and GitHub Actions dependencies weekly; enable Dependabot alerts in the repository's Security settings as well.

The local `npm audit` check found zero known vulnerabilities in the lockfile; no dependency fix was needed.

The calculator uses descriptive names, a named VIP discount constant, strict comparison, and input validation. It contains no credentials. Keep secrets in environment variables or a secrets manager, and rotate any credential that is accidentally exposed.

## Lab 08 notes

### Code-quality issues addressed

- Replaced unclear parameter and local names with `price`, `quantity`, and `subtotal`.
- Replaced the inline discount value with `VIP_DISCOUNT`.
- Used strict equality and removed logging of a hard-coded API key.
- Added validation for finite non-negative prices and non-negative safe-integer quantities.

### Security reflection

Secrets must never be committed because anyone with repository access can copy them, and deleting a secret later does not remove it from Git history. If a key is exposed, revoke or rotate it and move the replacement into an environment variable or secrets store. Dependencies should be audited regularly so known vulnerable versions can be upgraded. Code review catches problems before merge, while CI repeats tests and security checks consistently and blocks changes when they fail.

### Quick Test

1. **Q1:** (c) `git switch -c new`
2. **Q2:** (a) Propose changes and have them reviewed before merging.
3. **Q3:** (d) Automatically build, test, and deploy changes.
4. **Q4:** (b) `.github/workflows/` as `.yml` files.
5. **Q5:** (c) Store secrets in environment variables and never commit them.
6. **Q6:** `git add -A`, then `git commit -m "fix: correct total"`.
7. **Q7:** Commit, build, test.
8. **Q8:** A live key can be copied and abused. Revoke or rotate it, remove it from the repository and its history, and store the replacement in a secrets manager or environment variable.