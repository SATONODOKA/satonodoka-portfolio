export interface Project {
  id: string;
  name: string;
  description: string;
  period: string;
  tags: string[];
  url?: string; // プロジェクトのURL（デモサイトなど）
  youtubeUrl?: string; // YouTube動画URL
  techStack?: {
    frontend?: string;
    language?: string;
    build?: string;
    styling?: string;
    automation?: string;
    other?: string;
  };
  problem: string;
  solution: string;
  impact: string;
  context: string;
  constraints: string[];
  process: {
    research: string;
    options: { option: string; reason: string }[];
    build: string;
    validate: string;
  };
  screens: { image: string; caption: string }[];
  nextSteps: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    name: "工務店 × 職人 マッチング支援アプリ（LINE連携）",
    description: "人手不足の工務店が個別に職人を確保できるようにすること、また個人事業主の職人が仕事が途切れにくい状態を作ることを目的に開発した、工務店向けアプリケーション。",
    period: "2週間の短期開発",
    url: "https://shokuninboshu.netlify.app/",
    youtubeUrl: "https://www.youtube.com/watch?v=55lFaikmN4E",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "LINE API"],
    techStack: {
      frontend: "React（TypeScript併用、react@^19）",
      language: "TypeScript",
      build: "Vite（@vitejs/plugin-react）",
      styling: "Tailwind CSS + PostCSS + Autoprefixer",
      other: "TypeScript ^5.9、@types/node / react / react-dom",
    },
    problem: "慢性的な人手不足に加え、電話や紹介に依存した案件獲得・依頼のやり方が非効率で、工務店・職人双方にとって負担となっていた。",
    solution: "職人をLINE友だちとして登録し、案件発生時に近隣・条件に合う職人へ一斉配信。LINE上でのやり取りをそのまま業務フローに組み込む。",
    impact: "電話や個別連絡に依存しない迅速な一斉配信が可能になり、やり取りの履歴を可視化することで業務の属人化防止に寄与した。",
    context: "起業コンテスト向けとして作成。実運用を見据えたデータ設計とAPI連携まで実装した。",
    constraints: ["LINE Messaging APIとの正確な連携", "職人の導入ハードルを下げるためのUI設計"],
    process: {
      research: "建設業界の商習慣である電話・紹介依存の現状を分析。現場での操作性を考慮し、LINEをインターフェースに選択。",
      options: [
        { option: "独自モバイルアプリ開発", reason: "インストールやログインのハードルが高く、職人の利用率が低くなるリスクがあった。" },
        { option: "LINE Messaging API", reason: "日本国内での利用率が圧倒的に高く、新たなアプリ導入なしに通知・連絡が可能なため採用。" },
      ],
      build: "React + Vite で工務店側の管理画面を構築。Firebase等のバックエンドを想定しながら、Messaging APIとの連携部分を集中実装。",
      validate: "モックデータによるシミュレーションに加え、実際のLINEアカウントを用いたメッセージ送受信テストを実施。",
    },
    screens: [
      { image: "/images/project1-thumbnail.png", caption: "求人一覧画面" },
      { image: "/images/project1-1.png", caption: "完了済み案件の分析画面" },
    ],
    nextSteps: [
      "地図情報と連動した位置ベースのマッチング",
      "請求・発注書類の自動生成・送信機能",
      "職人のスコアリング・レビュー評価システム",
    ],
  },
  {
    id: "2",
    name: "法人向け 求職者情報検索・転記 RPA",
    description: "複数の社内システムを横断して行われていた、求職者情報の検索・書類取得・転記業務を完全自動化するために開発した法人向けRPAツール。",
    period: "1ヶ月（要件定義〜初期導入）",
    tags: ["Python", "Playwright", "Puppeteer", "RPA", "SendKeys"],
    techStack: {
      automation: "Puppeteer / Playwright / SendKeys 系ツール",
      language: "Python",
    },
    problem: "CA・RAが複数システム間を手作業で往復しており、転記ミスや確認漏れが頻発。IE依存のレガシーシステムが混在し、例外対応も多かった。",
    solution: "PythonとPlaywright/Puppeteerを組み合わせたブラウザ自動操作。レガシー環境を想定した堅牢な分岐処理とエラーログ出力を実装。",
    impact: "手作業を前提としていた業務を完全自動化し、人的ミスの削減と処理時間の劇的な短縮によるコスト削減を実現した。",
    context: "個人情報を扱うため高い安全性と正確性が求められる業務。レガシー環境を含めて運用可能な形で実装し切った点が最大の成果。",
    constraints: ["IEでしか動作しないシステムへの対応", "厳格な個人情報保護とセキュリティ準拠"],
    process: {
      research: "現行の業務フローを詳細にヒアリング。例外挙動やレガシーシステムの動作パターンを洗い出し。",
      options: [
        { option: "汎用RPAツールの導入", reason: "既存ツールではIE依存の挙動制御が困難で、コストメリットが出にくいと判断。" },
        { option: "コードベースの独自RPA開発", reason: "細かい挙動制御と例外処理の柔軟性を重視し、Python + Playwrightの構成を選択。" },
      ],
      build: "各システムのUI操作を前提とした設計。エラー発生時の安全停止・ログ取得を徹底し、信頼性の高いスクリプトを構築。",
      validate: "実際の業務環境での並行運用テストを実施。手作業との結果整合性を100%確認した段階で完全移行。",
    },
    screens: [
      { image: "/images/rpa-concept.svg", caption: "RPAシステム構成図" },
    ],
    nextSteps: [
      "AI OCRを活用した非定型ドキュメントの読み取り精度向上",
      "ダッシュボードによる自動化効果（削減時間）の可視化",
      "多拠点展開に向けた配布・更新管理の仕組み化",
    ],
  },
  {
    id: "3",
    name: "求人保存・整理 Chrome拡張 + 管理サイト",
    description: "求人サイトを閲覧中に、Chrome拡張機能をワンクリックするだけで求人を保存し、自動でタグ付け・整理できる個人向けツール。",
    period: "2週間の個人開発",
    url: "https://job-seiri.netlify.app/",
    youtubeUrl: "https://www.youtube.com/watch?v=3uZO8XWNqzM",
    tags: ["Chrome Extension", "JavaScript", "Netlify", "HTML", "CSS"],
    techStack: {
      frontend: "HTML + JavaScript",
      language: "JavaScript / HTML / Windowsバッチ（.bat）",
      build: "Node.js、npm",
      styling: "HTML / CSS（フレームワーク不使用）",
    },
    problem: "複数サイトを横断して転職活動を行う際の情報管理が煩雑。気になった求人を後で探し直す手間や、手動でのコピペ作業が重かった。",
    solution: "ブラウザ上で完結する最小操作のChrome拡張機能を開発。取得した内容をWebデータベースに保存し、タグで自動整理。",
    impact: "求人収集・整理にかかる手作業を大幅に削減。自分自身の軸で求人を比較・検討しやすい環境を構築した。",
    context: "エージェント任せではなく、自律的な転職活動を目指すユーザー向け。個人利用に特化したシンプルな運用設計を重視。",
    constraints: ["各求人サイトのDOM解析の保守性", "オフラインでも閲覧できるキャッシュ管理"],
    process: {
      research: "主要求人サイト（リクナビ、マイナビ等）の構造を調査。最も汎用性の高いメタデータ取得手法を検討。",
      options: [
        { option: "ブックマークレット", reason: "手軽だが、複雑なデータ加工や永続化管理には不向き。" },
        { option: "Chrome拡張機能", reason: "ブラウザとの親和性が高く、独自の管理UIを組み込みやすいため採用。" },
      ],
      build: "Manifest V3 に準拠した拡張機能を開発。Netlify上にReactベースの管理サイトをデプロイし、API経由で情報を集約。",
      validate: "自分の実際の転職活動で利用し、使い勝手をフィードバックしながら改善。特にタグの自動付与ロジックを調整。",
    },
    screens: [
      { image: "/images/project3-1.png", caption: "保存した求人一覧" },
    ],
    nextSteps: [
      "求人の締め切り情報の自動取得・リマインド機能",
      "同様の求人を提案するレコメンドエンジン",
      "他ユーザーとの非公開共有機能",
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
