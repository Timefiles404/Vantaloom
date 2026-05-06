# GitHub 分支保护建议

`main` 分支应开启保护，避免未验证代码直接进入默认分支。

## 早期推荐设置

- Require a pull request before merging
- Require approvals: 1
- Dismiss stale pull request approvals when new commits are pushed
- Require status checks to pass before merging
- Require branches to be up to date before merging
- Required status check: `验证基础设施`
- Require conversation resolution before merging
- Block force pushes
- Block deletions
- Restrict who can push to matching branches

## 可以暂缓的设置

- Require signed commits
- Require linear history
- Require deployments to succeed before merging
- Require code scanning results

这些设置可以在协作者变多、发布链路稳定后再打开。

## 注意事项

如果仓库使用 GitHub Free 且为私有仓库，部分分支保护或规则集能力可能受套餐限制。公开仓库通常更容易启用完整保护。
