export default function FeatureOne() {
  return (
    <div className="grid md:grid-cols-2 py-10 px-5 lg:px-0">
      <div className="grid place-items-center">
        <picture>
          <img
            src="/images/feature1.png"
            className="object-contain w-[500px]"
            alt="Feature Image"
            loading="lazy"
            width="730"
            height="584"
            decoding="async"
          />
        </picture>
      </div>
      <div className="grid place-items-center">
        <div className="max-w-lg">
          <span className="bg-gray-100 border-gray-200 border text-gray-600 -ml-px rounded-full text-xs font-medium px-3 py-1">
            Simplified Workflows
          </span>
          <h3 className="text-2xl font-medium mt-4 [text-wrap:balance]">
            Unlock Your Success in Just Four Simple Steps
          </h3>
          <p className="mt-4 text-slate-600 [text-wrap:balance]">
            Embark on a journey towards professional triumph. Our user-friendly
            process ensures that you effortlessly create standout resumes and
            cover letters, setting the stage for your career aspirations.
            Here&apos;s how it works:
          </p>
          <ul className="grid mt-6 text-left gap-y-4">
            <li className="flex items-center gap-3 text-neutral-800">
              <svg
                viewBox="0 0 256 256"
                className="w-5 h-5"
                astro-icon="ph:check-circle-fill"
              >
                <path
                  fill="currentColor"
                  d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"
                />
              </svg>
              <span className="text-sm">Sign Up</span>
            </li>
            <li className="flex items-center gap-3 text-neutral-800">
              <svg
                viewBox="0 0 256 256"
                className="w-5 h-5"
                astro-icon="ph:check-circle-fill"
              >
                <path
                  fill="currentColor"
                  d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"
                />
              </svg>
              <span className="text-sm">Choose Your Template</span>
            </li>
            <li className="flex items-center gap-3 text-neutral-800">
              <svg
                viewBox="0 0 256 256"
                className="w-5 h-5"
                astro-icon="ph:check-circle-fill"
              >
                <path
                  fill="currentColor"
                  d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"
                />
              </svg>
              <span className="text-sm">Customize Your Content</span>
            </li>
            <li className="flex items-center gap-3 text-neutral-800">
              <svg
                viewBox="0 0 256 256"
                className="w-5 h-5"
                astro-icon="ph:check-circle-fill"
              >
                <path
                  fill="currentColor"
                  d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"
                />
              </svg>
              <span className="text-sm">Download and Share</span>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              className="rounded text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray px-4 py-2 text-sm bg-gray-600 text-white hover:bg-gray-800 inline-flex items-center group gap-px"
            >
              <span>Start 14-day trial</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mt-px group-hover:translate-x-1 transition-transform"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-sm px-2 transition py-1 text-slate-600 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray rounded-full"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
