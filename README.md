# 🚀 TanStack Start × Hono Monorepo

モダンなフルスタック Web アプリケーション開発のためのスターターテンプレートです。

## 📦 プロジェクト構成

```bash
tanstack-frontend-architect-sample/
├── 🎨 frontend/          # React フロントエンド (TanStack Start)
├── ⚡ backend/           # API サーバー (Hono + Cloudflare Workers)
├── 🔄 shared/            # 共通型定義・定数
└── 📋 package.json       # モノレポ設定
```

## 🛠️ 技術スタック

### Frontend

- **React 19** - UI ライブラリ
- **TanStack Start** - フルスタック React フレームワーク
- **TailwindCSS** - CSS フレームワーク
- **Vitest** - テストフレームワーク

### Backend

- **Hono** - 高速 Web フレームワーク
- **Cloudflare Workers** - エッジコンピューティング
- **Zod** - スキーマバリデーション
- **OpenAPI** - API 仕様書自動生成

### Developer Tools

- **pnpm** - パッケージマネージャー
- **TypeScript** - 型安全性
- **ESLint + Biome** - コード品質
- **Prettier** - コードフォーマット

## 🏁 Quick Start

### 1. 環境要件

- Node.js 22.20.0+
- pnpm 10.18.0+

### 2. セットアップ

```bash
# リポジトリをクローン
git clone <your-repo>
cd tanstack-frontend-architect-sample

# 依存関係をインストール
pnpm install
```

### 3. 開発開始

```bash
# フロントエンド + バックエンドを同時起動
pnpm dev

# または個別に起動
pnpm dev:frontend  # http://localhost:3000
pnpm dev:backend   # http://localhost:8787
```

## 📝 基本コマンド

### 開発

```bash
pnpm dev                 # 全体開発サーバー起動
pnpm dev:frontend        # フロントエンドのみ
pnpm dev:backend         # バックエンドのみ
```

### ビルド

```bash
pnpm build              # 全体ビルド
pnpm build:frontend     # フロントエンドのみ
pnpm build:backend      # バックエンドのみ
```

### 型生成

```bash
pnpm generate-types     # API型を自動生成
```

### テスト・品質チェック

```bash
pnpm lint              # コード品質チェック
pnpm lint:fix          # 自動修正
pnpm typecheck         # 型チェック
```

## 🌐 開発 URL

- **フロントエンド**: [http://localhost:3000](http://localhost:3000)
- **API サーバー**: [http://localhost:8787](http://localhost:8787)
- **API ドキュメント**: [http://localhost:8787/api/swagger](http://localhost:8787/api/swagger)
- **ヘルスチェック**: [http://localhost:8787/api/health](http://localhost:8787/api/health)

## 📚 開発のポイント

### API開発

- バックエンドの OpenAPI スキーマから型が自動生成されます
- `shared/types/api/` に生成された型を使用してください
- API エンドポイントは `backend/src/routes/` で定義します

### コミットメッセージ

日本語 + gitmoji 形式を使用:

```txt
✨ feat: ユーザー登録機能を追加
🐛 fix: ログイン時のバグを修正
🔧 chore: CI の設定を変更
```

## 🤖 Claude Code 向け MCP セットアップ

```bash
claude mcp add playwright npx @playwright/mcp@latest
claude mcp add context7 -- npx --yes @upstash/context7-mcp
claude mcp add serena -- uvx --from git+https://github.com/oraios/serena serena-mcp-server --context ide-assistant --project $(pwd)
```
