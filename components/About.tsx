export default function About() {
  return (
    <section id="about" className="h-full w-full flex justify-center items-center px-6 bg-white/50 dark:bg-black/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="p-10 md:p-16">
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I studied astronomy and physics at UVA, with two years in the middle for
              mandatory military service in Korea. I liked it more than I was good at it,
              and I couldn&apos;t see a future in it, so I left and spent nine months
              learning to build software instead.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              On team projects I always took frontend. Backend and databases were the part
              I quietly avoided &mdash; I only touched them once, when a teammate left
              mid-project and someone had to. Then I built EHCO and Jigekun alone, and there
              was no one to hand it to. Frontend, database, APIs, all of it.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Jigekun is a location-based short-term labor matching app, now live on the App
              Store and Google Play. I&apos;d never written a line of Dart when I started
              &mdash; I knew the shape of what I wanted from React and spent the first while
              learning how to say it in Flutter. It matches workers by distance and trust
              score, takes payments through Toss, and runs an AI agent that turns a plain
              Korean sentence into a structured job request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
