import { educations } from '@/data/education';

export function Education() {
  return (
    <section
      id="education"
      className="bg-secondary-background py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Education
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Where I have Studied
          </h3>
        </div>

        <div className="space-y-12">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="group relative grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 pb-12 border-b border-gray-200 last:border-0"
            >
              <div className="text-sm text-gray-600 font-medium">
                {edu.institution} | {edu.period}
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-xl font-semibold text-gray-600 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-gray-600">{edu.location}</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
