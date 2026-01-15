interface Step {
  title: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    title: "要件定義",
    description: "ヒアリングを通じて欲しいものを言語化",
    details: ["インタビュー", "サービスイメージの提供"],
  },
  {
    title: "Build",
    description: "最小実装で価値を提供する",
    details: ["PoCの最速での提供", "フィードバックを最速で反映"],
  },
  {
    title: "Iterate",
    description: "改善を継続的に行う",
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
    <section className="snap-start min-h-screen flex items-center bg-gray-50 border-b border-gray-200 py-16 md:py-0">
      <div className="container-custom w-full py-12 md:py-0">
        <h2 className="mb-12 text-center text-gray-900">How I Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-extrabold text-accent font-display">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 leading-tight text-gray-900 tracking-tight" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {step.title}
              </h3>
              <p className="text-gray-800 mb-4 leading-loose" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {step.description}
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                {step.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 技術スタックとAIツール */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 技術スタック */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-900">技術スタック</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* AIツール */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-900">使えるAIツール</h3>
            <div className="flex flex-wrap gap-2">
              {aiTools.map((tool) => (
                <span key={tool} className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
