import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Skills
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Technologies I Work With
          </h3>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          {skillCategories.map((category, index) => (
            <p key={index} className="text-lg">
              <span className="font-semibold text-gray-500">
                {category.category}:
              </span>{' '}
              {category.skills.join(', ')}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
