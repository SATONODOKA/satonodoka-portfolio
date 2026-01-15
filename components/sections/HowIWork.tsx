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
    <section className="snap-start snap-always min-h-screen flex items-center py-16 md:py-0">
      <div className="container-custom w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 md:mb-8 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent">How I Work</h2>

          {/* ステップ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {steps.map((step) => (
              <div key={step.title} className="border border-gray-400 rounded-lg p-6 text-center">
                <div className="w-10 h-10 border border-gray-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-gray-900">{step.number}</span>
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {step.description}
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 技術スタックとAIツール */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-400 rounded-lg p-6">
              <h3 className="text-sm font-bold mb-4 text-gray-900">技術スタック</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="inline-block px-3 py-1 text-xs font-medium text-gray-900 border border-gray-400 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gray-400 rounded-lg p-6">
              <h3 className="text-sm font-bold mb-4 text-gray-900">AIツール</h3>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <span key={tool} className="inline-block px-3 py-1 text-xs font-medium text-gray-900 border border-gray-400 rounded">
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
