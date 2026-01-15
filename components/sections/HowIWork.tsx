interface Step {
  number: string;
  title: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    number: "1",
    title: "要件定義",
    description: "ヒアリングを通じて欲しいものを言語化",
    details: ["インタビュー", "サービスイメージの提供"],
  },
  {
    number: "2",
    title: "開発",
    description: "最小実装で価値を提供する",
    details: ["PoCの最速での提供", "フィードバックを最速で反映"],
  },
  {
    number: "3",
    title: "改善",
    description: "継続的な改善を行う",
    details: ["データベースの整備", "運用に向けた修正"],
  },
];

const techStack = [
  "React / Next.js",
  "TypeScript",
  "Python",
  "Tailwind CSS",
  "Playwright / Puppeteer",
  "LINE API",
  "Chrome Extension API",
];

const aiTools = [
  "Claude (Anthropic)",
  "ChatGPT (OpenAI)",
  "GitHub Copilot",
  "Cursor",
  "v0.dev",
];

export default function HowIWork() {
  return (
    <section className="snap-start snap-always min-h-screen flex items-center py-20 md:py-28">
      <div className="container-custom w-full">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 md:mb-12 text-center">How I Work</h2>

          {/* ステップ：3カラムは維持、枠線付きブロック、コネクタ線で接続 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* 工程ブロック：主役レベル */}
                <div 
                  className="border p-6"
                  style={{
                    borderColor: 'rgba(255,255,255,0.85)',
                    background: 'transparent',
                    boxShadow: '0 0 12px rgba(96,165,250,0.5)',
                  }}
                >
                  {/* 数字：インジケータとして控えめに */}
                  <div 
                  className="mb-4"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    opacity: 0.4,
                    color: 'rgb(148, 163, 184)',
                  }}
                >
                  {step.number.padStart(2, '0')}
                </div>
                  {/* 主役は見出し */}
                  <h3 className="text-lg font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 mb-3">
                    {step.description}
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {step.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
                {/* コネクタ線：ブロック間を結ぶ（横並び時のみ） */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-px"
                    style={{
                      background: 'rgba(255,255,255,0.75)',
                      boxShadow: '0 0 10px rgba(96,165,250,0.5)',
                      transform: 'translateY(-50%)',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* 技術スタックとAIツール：サブ構造として弱く、リスト的 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold mb-4">技術スタック</h3>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1.5"
                    style={{
                      border: '1px solid rgba(255,255,255,0.5)',
                      background: 'transparent',
                      fontSize: '12px',
                      color: 'rgb(51, 65, 85)',
                      lineHeight: '1.5',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">AIツール</h3>
              <div className="flex flex-wrap gap-1.5">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1.5"
                    style={{
                      border: '1px solid rgba(255,255,255,0.5)',
                      background: 'transparent',
                      fontSize: '12px',
                      color: 'rgb(51, 65, 85)',
                      lineHeight: '1.5',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
