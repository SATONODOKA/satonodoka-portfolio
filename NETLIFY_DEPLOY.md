# Netlifyデプロイガイド

## デプロイ前の確認事項

### 1. 必要な設定ファイル

以下のファイルが正しく設定されていることを確認してください：

- ✅ `netlify.toml` - Netlifyのビルド設定
- ✅ `next.config.mjs` - Next.jsの設定（画像最適化無効化）
- ✅ `.nvmrc` - Node.jsバージョン指定（20）
- ✅ `package.json` - 依存関係とビルドスクリプト

### 2. ビルドコマンド

Netlifyのビルド設定：
- **Build command**: `npm run build`
- **Publish directory**: `.next`（@netlify/plugin-nextjsが自動処理）

### 3. 環境変数

現在、環境変数は使用していませんが、必要に応じてNetlifyのダッシュボードで設定できます。

### 4. 静的生成の確認

動的ルーティング（`/work/[slug]`）は`generateStaticParams`で静的生成されています：
- `/work/1`
- `/work/2`
- `/work/3`

### 5. 画像パス

すべての画像は`public/images/`ディレクトリに配置され、`/images/`パスで参照されています。

## デプロイ手順

### 方法1: Netlify CLI

```bash
# Netlify CLIをインストール（初回のみ）
npm install -g netlify-cli

# Netlifyにログイン
netlify login

# デプロイ
netlify deploy --prod
```

### 方法2: Git連携

1. GitHub/GitLab/Bitbucketにリポジトリをプッシュ
2. Netlifyダッシュボードで「New site from Git」を選択
3. リポジトリを選択
4. ビルド設定を確認：
   - Build command: `npm run build`
   - Publish directory: `.next`
5. 「Deploy site」をクリック

### 方法3: ドラッグ&ドロップ

```bash
# ビルドを実行
npm run build

# .nextディレクトリをNetlifyにドラッグ&ドロップ
```

## よくあるエラーと対処法

### エラー1: `@netlify/plugin-nextjs`が見つからない

**対処法**: Netlifyのダッシュボードでプラグインを有効化するか、`netlify.toml`でプラグインを指定してください。

### エラー2: 画像が表示されない

**対処法**: `next.config.mjs`で`images.unoptimized: true`が設定されていることを確認してください。

### エラー3: 動的ルーティングが404エラー

**対処法**: `generateStaticParams`が正しく実装されていることを確認してください。

### エラー4: ビルドがタイムアウト

**対処法**: Netlifyのビルドタイムアウトを延長するか、ビルド時間を短縮してください。

### エラー5: Node.jsバージョンの不一致

**対処法**: `.nvmrc`ファイルでNode.js 20を指定しています。Netlifyの環境変数で`NODE_VERSION=20`を設定してください。

## デプロイ後の確認

1. ✅ トップページが正しく表示される
2. ✅ 各セクション（Hero, Projects, How I Work, Contact）が表示される
3. ✅ プロジェクト詳細ページ（/work/1, /work/2, /work/3）が表示される
4. ✅ 画像が正しく表示される
5. ✅ スクロールスナップが機能する
6. ✅ リンクが正しく動作する

## トラブルシューティング

問題が発生した場合は、Netlifyのビルドログを確認してください：
1. Netlifyダッシュボードにログイン
2. サイトを選択
3. 「Deploys」タブを開く
4. 失敗したデプロイのログを確認
