import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Link from "next/link";
import ProjectImage from "@/components/ui/ProjectImage";

import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <section id="work" className="snap-start snap-always min-h-screen flex items-center py-16 md:py-0">
      <div className="container-custom w-full py-12 md:py-0">
        <h2 className="mb-6 md:mb-8 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-accent bg-clip-text text-transparent">Projects</h2>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.id}`}>
              <Card>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    {project.id === "1" && (
                      <ProjectImage
                        src="/images/project1-thumbnail.png"
                        alt={project.name}
                        className="rounded-lg aspect-video object-cover w-full"
                      />
                    )}
                    {project.id === "2" && (
                      <img
                        src="/images/rpa-concept.svg"
                        alt={project.name}
                        className="rounded-lg aspect-video object-cover w-full p-4 border border-gray-400"
                      />
                    )}
                    {project.id === "3" && (
                      <ProjectImage
                        src="/images/project3-thumbnail.png"
                        alt={project.name}
                        className="rounded-lg aspect-video object-cover w-full"
                      />
                    )}
                    {!["1", "2", "3"].includes(project.id) && (
                      <div className="border border-gray-400 rounded-lg aspect-video flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
