export default function Hero() {
  return (
    <div className="overflow-x-clip">
      <div className="max-w-screen-xl mx-auto px-5 py-32">
        <main className="grid lg:grid-cols-5 place-items-center relative">
          <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial from-gray-200 right-0 top-0"></div>
          <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial from-gray-200 right-56 top-10"></div>
          <div className="max-w-sm md:max-w-max lg:col-span-2">
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter [text-wrap:balance] text-center lg:text-start">
              Unlock Your Career Potential
            </h1>
            <p className="text-lg mt-4 max-w-lg text-slate-600 [text-wrap:balance] text-center lg:text-start">
              Are you ready to take the next big step in your career? Your
              journey to success begins with a powerful resume and cover letter.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
              <a
                href="https://web3templates.com/templates/astroship-pro-astro-saas-website-template"
                target="_blank"
                rel="noopener"
                className="rounded text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray px-7 py-2.5 bg-gray-600 text-white hover:bg-gray-800 flex gap-1 items-center justify-center"
              >
                Create a Resume
              </a>
              <a
                href="https://github.com/surjithctly/astroship"
                rel="noopener"
                target="_blank"
                className="rounded text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray px-7 py-2.5 bg-white border-2 border-gray-500 hover:bg-gray-50 text-gray-600 flex gap-1 items-center justify-center"
              >
                Create a Cover Letter
              </a>
            </div>
          </div>
          <div className="py-3 lg:col-span-3 lg:-mr-44">
            <picture>
              {/* <source
                srcSet="
                /_astro/hero-screenshot.cf064354_Z2lYXy6.avif,
                /_astro/hero-screenshot.cf064354_dLCmu.avif    240w,
                /_astro/hero-screenshot.cf064354_Z1BwxY6.avif  540w,
                /_astro/hero-screenshot.cf064354_ZPDPxQ.avif   720w,
                /_astro/hero-screenshot.cf064354_Z2lYXy6.avif 1183w
              "
                type="image/avif"
              />
              <source
                srcSet="
                /_astro/hero-screenshot.cf064354_Z2dHdSD.webp,
                /_astro/hero-screenshot.cf064354_1JPoUb.webp   240w,
                /_astro/hero-screenshot.cf064354_Z5sLqp.webp   540w,
                /_astro/hero-screenshot.cf064354_FoUYP.webp    720w,
                /_astro/hero-screenshot.cf064354_Z2dHdSD.webp 1183w
              "
                type="image/webp"
              /> */}
              {/* <img
                src="/images/hero.png"
                className="object-contain w-[700px]"
                alt="Astronaut in the air"
                sizes="(max-width: 720px) 100vw, 50vw"
                loading="eager"
                fetchPriority="high"
                width="1183"
                height="787"
                decoding="async"
              /> */}
            </picture>
          </div>
        </main>
      </div>
    </div>
  );
}
