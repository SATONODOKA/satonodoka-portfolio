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

export default function HowIWork() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <h2 className="mb-12 text-center">How I Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <ul className="text-sm text-gray-500 space-y-1">
                {step.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
