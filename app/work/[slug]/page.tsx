import { notFound } from "next/navigation";
import { getProject } from "@/lib/data";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ScrollToTop />
      {/* Hero */}
      <section className="section-spacing border-b border-gray-200">
        <div className="container-custom">
          <div className="mb-6">
            <Link href="/#work" className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-2">
              <span>←</span>
              <span>作品一覧に戻る</span>
            </Link>
          </div>
          <h1 className="mb-4">{project.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{project.description}</p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-gray-600">制作期間: {project.period}</span>
            <span className="text-sm text-gray-600">役割: 企画・設計・開発</span>
          </div>
          <Button href="#" variant="primary" size="md">
            デモを見る
          </Button>
        </div>
      </section>

      {/* TL;DR */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8">TL;DR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-semibold mb-3">Problem</h3>
              <p className="text-gray-600">{project.problem}</p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold mb-3">Solution</h3>
              <p className="text-gray-600">{project.solution}</p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold mb-3">Impact</h3>
              <p className="text-gray-600">{project.impact}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="mb-6">Context</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{project.context}</p>
          <div>
            <h3 className="text-lg font-semibold mb-3">制約条件</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {project.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8">Process</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Research</h3>
              <p className="text-gray-600">{project.process.research}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Options</h3>
              <div className="space-y-4">
                {project.process.options.map((option, index) => (
                  <Card key={index}>
                    <h4 className="font-semibold mb-2">{option.option}</h4>
                    <p className="text-gray-600 text-sm">{option.reason}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Build</h3>
              <p className="text-gray-600">{project.process.build}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Validate</h3>
              <p className="text-gray-600">{project.process.validate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screens */}
      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="mb-8">Screens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screens.map((screen, index) => (
              <div key={index}>
                <div className="bg-gray-200 rounded-lg aspect-video mb-3 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{screen.caption}</span>
                </div>
                <p className="text-sm text-gray-600 text-center">{screen.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'd do next */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8">What I'd do next</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.nextSteps.map((step, index) => (
              <Card key={index}>
                <h3 className="font-semibold mb-2">{step}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
