export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary-background"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              About
            </h2>
            <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
              Crafting Digital Experiences
            </h3>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Results-driven full stack developer with 4+ years of experience
              and proven expertise in building scalable web applications.
              Skilled at writing clean, scalable and production-ready code, with
              a consistent focus on performance, quality and user experience.
            </p>
            <p>
              A proactive team collaborator who brings a can-do attitude and a
              commitment to continuous learning and improvement, while
              delivering impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
