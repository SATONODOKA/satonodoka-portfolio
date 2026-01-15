# 画像セットアップガイド

## 必要な画像ファイル

以下の画像ファイルを `public/images/` ディレクトリに配置してください：

### プロジェクト1（工務店×職人マッチング）
- **ファイル名**: `project1-thumbnail.png`
- **取得方法**: 
  1. https://shokuninboshu.netlify.app/ にアクセス
  2. ブラウザの開発者ツールでスクリーンショットを取得
  3. または、ブラウザ拡張機能でスクリーンショットを取得
  4. サイズ: 約 400x300px 程度（アスペクト比 4:3 または 16:9）

### プロジェクト3（求人保存Chrome拡張）
- **ファイル名**: `project3-thumbnail.png`
- **取得方法**:
  1. https://job-seiri.netlify.app/ にアクセス
  2. ログイン画面またはメイン画面のスクリーンショットを取得
  3. サイズ: 約 400x300px 程度（アスペクト比 4:3 または 16:9）

### Heroセクション用画像
以下の3つの画像を用意してください：
- **ファイル名**: `hero-project1.png`, `hero-project2.png`, `hero-project3.png`
- **取得方法**: 各プロジェクトの代表的な画面のスクリーンショット
- **サイズ**: 約 300x225px 程度（アスペクト比 4:3）

## 画像取得の推奨方法

### 方法1: ブラウザの開発者ツール
1. サイトにアクセス
2. F12 で開発者ツールを開く
3. デバイスツールバー（Ctrl+Shift+M / Cmd+Shift+M）で画面サイズを調整
4. スクリーンショットを取得

### 方法2: ブラウザ拡張機能
- Full Page Screen Capture
- Awesome Screenshot
- など

### 方法3: コマンドラインツール
```bash
# Playwrightを使用（インストールが必要）
npx playwright screenshot --url https://shokuninboshu.netlify.app/ project1.png
```

## 画像の最適化

画像を配置する前に、以下の最適化を推奨します：
- 画像圧縮ツール（TinyPNG、ImageOptimなど）でファイルサイズを削減
- WebP形式への変換を検討
