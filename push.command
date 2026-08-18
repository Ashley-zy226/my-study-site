#!/bin/bash
# 修改 data.js 后，双击这个文件即可把更新推送到 GitHub，网站会自动刷新
cd "$(dirname "$0")"

if [ ! -d .git ]; then
  echo "❌ 当前文件夹还没有初始化 Git 仓库。"
  echo "请先按照 README.md 中的部署步骤操作一次。"
  read -r -p "按回车键退出..."
  exit 1
fi

git add -A
git commit -m "更新学习小站 $(date +%Y-%m-%d)"
git push

echo "✅ 更新已推送，等 1 分钟左右网站就会刷新。"
read -r -p "按回车键退出..."
