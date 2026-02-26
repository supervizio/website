# Specialist Agents

## Primary

| Agent | Purpose |
|-------|---------|
| developer-specialist-python | MkDocs config, Python tooling, pip/uv dependencies |
| developer-specialist-nodejs | CSS/JS tooling if needed, npm packages |

## Supporting

| Agent | Purpose |
|-------|---------|
| developer-specialist-review | Code review for PRs (5 sub-agents) |
| developer-executor-quality | Code quality, linting, style checks |
| developer-executor-security | Secret detection, dependency scanning |
| developer-executor-shell | Shell script safety (CI/CD, hooks) |
| developer-executor-design | Architecture and design pattern analysis |
| devops-specialist-docker | Dockerfile and container optimization |
| devops-specialist-security | Security scanning, compliance checks |

## Usage

- **Content changes** (Markdown): No specialist needed, direct edit
- **Theme/CSS changes**: `developer-specialist-nodejs` for build tooling
- **MkDocs config**: `developer-specialist-python` for plugin compatibility
- **CI/CD pipeline**: `developer-executor-shell` for GitHub Actions validation
- **Pre-PR review**: `developer-specialist-review` for comprehensive review
