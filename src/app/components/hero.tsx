export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              Ishwor Khadka
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-light">
              Full Stack Developer
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            I build modern, scalable web applications with clean code and great
            user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 text-gray-500 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>

          <div className="pt-12">
            <a
              href="#about"
              className="inline-flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
