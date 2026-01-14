export default function Artifacts() {
  return (
    <section id="contact" className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:example@example.com"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
