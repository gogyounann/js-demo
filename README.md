## node.js がインストールされているか？

- node -v
- npm -v

## yarn をインストール

- npm install -g yarn
- yarn -v

## npm init

- npm init -y
  - package.json を生成される

## webpack をインストール

- npm install webpack webpack-cli --save-dev  
  ※--save-dev は開発環境（-D と同意味）
  - devDependencies が package.json に追加される、package-lock.json と node_modules が生成される

## build(dist 配布公開)

- npx webpack
  - dist 配下に、バンドルした js が生成される。
- package.json の scripts に「"build": "webpack"」を追加
  - webpack.config.js を作成し、カスタマイズする
  - npm run build

## webpack-dev-server をインストール

- npm install --save-dev webpack-dev-server
  - package.json の scripts に「"start": "webpack server"」を追加
  - npm run start

## ビルドのみ、ブラウザ確認不要

- "watch": "webpack --watch"

### Live Server

### webpack-dev-server
