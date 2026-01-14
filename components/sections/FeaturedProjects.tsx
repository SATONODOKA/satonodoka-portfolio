import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Link from "next/link";

import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <section id="work" className="section-spacing bg-gray-50">
      <div className="container-custom">
        <h2 className="mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.id}`}>
              <Card>
                <div className="mb-4">
                  <div className="bg-gray-200 rounded-lg aspect-video mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">サムネイル</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
