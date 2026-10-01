<!-- updated: 2026-02-25T01:00:00Z -->
# GitHub Configuration

## Purpose

GitHub-specific configurations: workflows, templates, and instructions.

## Structure

```
.github/
├── workflows/          # GitHub Actions
│   ├── docker-images.yml
│   ├── release.yml
│   └── CLAUDE.md
└── CLAUDE.md           # This file
```

## Workflows

| Workflow | Trigger | Description |
|----------|---------|-------------|
| docker-images.yml | push/PR | Build devcontainer images |
| release.yml | push to main | Create release with claude-assets.tar.gz |

## Conventions

- Workflows use reusable actions where possible
- Secrets stored in GitHub repository settings
- Branch protection on main
