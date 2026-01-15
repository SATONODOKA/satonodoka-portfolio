# フォント統一プラン

## 現状分析

### 現在のフォント使用状況

#### 1. **globals.cssでの設定**
- `h1`: Poppins（インラインCSS）
- `h2`: Poppins（インラインCSS）
- `h3`: フォント指定なし（Tailwindデフォルト = Inter）
- `body`: Inter（インラインCSS）
- `p`: フォント指定なし（bodyを継承 = Inter）

#### 2. **インラインスタイル（削除が必要）**
- `Hero.tsx`: h1に`style={{ fontFamily: "'Poppins'..." }}`
- `FeaturedProjects.tsx`: h2に`style={{ fontFamily: "'Poppins'..." }}`
- `HowIWork.tsx`: h2と数字に`style={{ fontFamily: "'Poppins'..." }}`
- `Artifacts.tsx`: h2に`style={{ fontFamily: "'Poppins'..." }}`
- `app/work/[slug]/page.tsx`: h1に`style={{ fontFamily: "'Poppins'..." }}`

#### 3. **Tailwind設定**
- `font-sans`: Inter（デフォルト）
- `font-display`: Poppins（未使用）

#### 4. **その他の要素**
- Header（ロゴ）: フォント指定なし（Inter）
- Button: フォント指定なし（Inter）
- Tag: フォント指定なし（Inter）
- ナビゲーションリンク: フォント指定なし（Inter）
- その他のテキスト: フォント指定なし（Inter）

## 統一プラン

### フォント階層

1. **見出し（h1, h2, h3）**: Poppins
   - 視覚的な階層と個性を出す
   - globals.cssで統一設定

2. **本文・ボタン・その他**: Inter
   - 読みやすさを優先
   - bodyで統一設定（既に設定済み）

3. **ロゴ/ブランド名**: Poppins
   - ブランドアイデンティティを強調
   - Tailwindの`font-display`クラスを使用

4. **数字・強調テキスト**: Poppins
   - 視覚的なアクセント
   - 必要に応じて`font-display`クラスを使用

### 実装ステップ

#### ステップ1: globals.cssの整理
- h3にPoppinsフォントを追加
- bodyのフォント設定を確認（既にInter）
- 重複しているbodyの設定を整理

#### ステップ2: インラインスタイルの削除
- Hero.tsx: h1のインラインスタイル削除
- FeaturedProjects.tsx: h2のインラインスタイル削除
- HowIWork.tsx: h2と数字のインラインスタイル削除
- Artifacts.tsx: h2のインラインスタイル削除
- app/work/[slug]/page.tsx: h1のインラインスタイル削除

#### ステップ3: ロゴと強調テキストの調整
- Header.tsx: ロゴに`font-display`クラスを追加
- HowIWork.tsx: 数字に`font-display`クラスを追加（インライン削除後）

#### ステップ4: 確認
- すべての見出しがPoppinsで表示される
- すべての本文がInterで表示される
- インラインスタイルが存在しない
- 視覚的な一貫性が保たれている

## 期待される効果

- **視覚的な一貫性**: 見出しはPoppins、本文はInterで統一
- **保守性の向上**: インラインスタイルを削除し、globals.cssで一元管理
- **読みやすさの向上**: 適切なフォント階層で情報が整理される
- **パフォーマンス**: インラインスタイル削除による軽量化
