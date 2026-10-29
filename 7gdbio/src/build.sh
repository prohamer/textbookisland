#!/usr/bin/env bash
# 由 src/page.html 產生 GitHub Pages 用的完整 index.html
set -e
cd "$(dirname "$0")/.."
{
  echo '<!doctype html>'
  echo '<html lang="zh-Hant">'
  echo '<head>'
  echo '<meta charset="utf-8">'
  echo '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
  echo '<meta name="apple-mobile-web-app-capable" content="yes">'
  grep -v '^<div id="root"' src/page.html | grep -v '^<script'
  echo '</head>'
  echo '<body>'
  grep '^<div id="root"' src/page.html
  grep '^<script' src/page.html
  echo '</body>'
  echo '</html>'
} > index.html
echo "index.html 已產生"
