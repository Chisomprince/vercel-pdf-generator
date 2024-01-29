export default function FeaturesGrid() {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="mt-24">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          Your Dream Job Awaits -{" "}
          <span className="text-gray-600">Your Complete Toolkit</span>
        </h2>
        <p className="text-lg mt-4 text-slate-600 w-11/12 ">
          Craft standout resumes and persuasive cover letters effortlessly. Your
          gateway to professional success is just a click away. Achieve more in
          less time – because everything you need for your dream job is right
          here.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 mt-16 gap-10">
        <div className="rounded-2xl p-8 bg-gray-50 transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg lg:col-span-3">
          <div className="overflow-hidden flex items-start justify-center h-auto relative lg:h-80">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent z-10"></div>

            <img
              src="/images/ux.png"
              alt="Feature image"
              className="h-full w-full object-cover"
              loading="lazy"
              width="1280"
              height="800"
              decoding="async"
            />
          </div>
          <div className="mt-2">
            <span className="bg-gray-100 border-gray-200 border text-gray-600 rounded-full text-xs font-medium px-3 py-1">
              <span>Intuitive UX</span>
            </span>
            <h3 className="text-xl lg:text-2xl font-medium mt-2">
              <span>Easy-to-Use Interface</span>
            </h3>
            <p className="text-slate-600 mt-2 [text-wrap:balance]">
              <span>
                We feature a user-friendly interface that makes it simple and
                intuitive to create a professional resume. With its clean design
                and easy-to-navigate layout, users can effortlessly build their
                resumes without any technical expertise.
              </span>
            </p>
          </div>
        </div>
        <div className="rounded-2xl p-8 bg-gray-50 transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg lg:col-span-2">
          <div className="overflow-hidden flex items-start justify-center h-auto relative lg:h-80">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent z-10"></div>

            <img
              src="/images/customization.png"
              alt="Feature image"
              className="h-full w-full object-cover"
              loading="lazy"
              width="1280"
              height="800"
              decoding="async"
            />
          </div>
          <div className="mt-2">
            <span className="bg-gray-100 border-gray-200 border text-gray-600 rounded-full text-xs font-medium px-3 py-1">
              <span>Creative</span>
            </span>
            <h3 className="text-xl lg:text-2xl font-medium mt-2">
              <span> Customizable Templates</span>
            </h3>
            <p className="text-slate-600 mt-2 [text-wrap:balance]">
              <span>
                We offer a wide range of customizable templates to suit various
                industries and job positions. Users can choose from a selection
                of professionally designed templates and easily personalize them
                to showcase their unique skills and qualifications.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
        <div className="rounded-2xl p-8 bg-gray-50 transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg">
          {/* <div className="overflow-hidden flex items-start justify-center h-auto relative lg:h-60">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent z-10"></div>
            <picture>
              <source
                srcSet="/_astro/3.703c5567_Z28hFYy.avif"
                type="image/avif"
              />
              <source
                srcSet="/_astro/3.703c5567_Z1YYVk6.webp"
                type="image/webp"
              />
              <img
                src="/_astro/3.703c5567_Z1QFVOs.png"
                alt="Feature image"
                className="h-full w-full object-contain"
                loading="lazy"
                width="1280"
                height="800"
                decoding="async"
              />
            </picture>
          </div> */}
          <div className="mt-2">
            <span className="bg-gray-100 border-gray-200 border text-gray-600 rounded-full text-xs font-medium px-3 py-1">
              <span>Template</span>
            </span>
            <h3 className="text-xl lg:text-2xl font-medium mt-2">
              <span>Modern Design</span>
            </h3>
            <p className="text-slate-600 mt-2 [text-wrap:balance]">
              <span>
                Our sleek and stylish templates are meticulously crafted to
                align with design trends. with layouts that not only capture
                attention but also convey a sense of professionalism and
                innovation.
              </span>
            </p>
          </div>
        </div>
        <div className="rounded-2xl p-8 bg-gray-50 transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg">
          {/* <div className="overflow-hidden flex items-start justify-center h-auto relative lg:h-60">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent z-10"></div>
            <picture>
              <source
                srcSet="/_astro/2.1eadf3d6_ZBO5u7.avif"
                type="image/avif"
              />
              <source
                srcSet="/_astro/2.1eadf3d6_ZtwkOE.webp"
                type="image/webp"
              />
              <img
                src="/_astro/2.1eadf3d6_Z1XHntr.png"
                alt="Feature image"
                className="h-full w-full object-contain"
                loading="lazy"
                width="1280"
                height="800"
                decoding="async"
              />
            </picture>
          </div> */}
          <div className="mt-2">
            <span className="bg-gray-100 border-gray-200 border text-gray-600 rounded-full text-xs font-medium px-3 py-1">
              <span>Helps and Hints</span>
            </span>
            <h3 className="text-xl lg:text-2xl font-medium mt-2">
              <span>AI Integration</span>
            </h3>
            <p className="text-slate-600 mt-2 [text-wrap:balance]">
              <span>
                Harness the power of artificial intelligence to optimize your
                Resume. Our AI integration goes beyond mere formatting
                suggestions; it analyzes industry trends, keywords, and hiring
                patterns to provide personalized recommendations.
              </span>
            </p>
          </div>
        </div>
        <div className="rounded-2xl p-8 bg-gray-50 transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg">
          {/* <div className="overflow-hidden flex items-start justify-center h-auto relative lg:h-60">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent z-10"></div>
            <img
              src="/_astro/integrations.bcb2b653.svg"
              alt="Feature image"
              className="h-full w-full object-contain"
              loading="lazy"
              width="909"
              height="823"
              decoding="async"
            />
          </div> */}
          <div className="mt-2">
            <span className="bg-gray-100 border-gray-200 border text-gray-800 rounded-full text-xs font-medium px-3 py-1">
              <span>Quest Link</span>
            </span>
            <h3 className="text-xl lg:text-2xl font-medium mt-2">
              <span>Real-Time Preview</span>
            </h3>
            <p className="text-slate-600 mt-2 [text-wrap:balance]">
              <span>
                With real-time preview feature, This allows instant
                visualization of edits and ensure that resume looks polished and
                professional before finalizing it.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mt-24 max-w-3xl mx-auto flex flex-col items-center justify-center">
        <span className="bg-gray-100 border-gray-200 border text-gray-600 rounded-full text-xs font-medium px-3 py-1">
          MORE FEATURES
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-4 text-center">
          We've got you covered
        </h2>
        <p className="text-lg mt-4 text-slate-600 text-center [text-wrap:pretty]">
          Our template covers all things SAAS. If you don't find what you're
          looking for, contact us and we'll either help you or steer you in the
          right direction.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-8 md:gap-16">
        <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
          <div className="mt-1 bg-gray-50 border shadow shadow-gray-100/50 border-gray-100 transition-colors rounded-lg grid place-items-center p-2 w-10 h-10 shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="text-gray-500"
              width="24"
              height="24"
              astro-icon="fluent:document-javascript-24-regular"
            >
              <path
                fill="currentColor"
                d="M18 20.5h-7.034a2.939 2.939 0 0 1-.702 1.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828a.491.491 0 0 0-.049-.04.63.63 0 0 1-.036-.03 2.072 2.072 0 0 0-.219-.18.652.652 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.109-.063-.166-.087a1.977 1.977 0 0 0-.624-.138.56.56 0 0 1-.059-.007.605.605 0 0 0-.082-.007H6a2 2 0 0 0-2 2v10.018a1.745 1.745 0 0 1 1.5.508V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5zm-.622-12H14a.5.5 0 0 1-.5-.5V4.621L17.378 8.5zM4.25 15a.75.75 0 0 1 .75.75V20a2 2 0 1 1-4 0v-.25a.75.75 0 0 1 1.5 0V20a.5.5 0 0 0 1 0v-4.25a.75.75 0 0 1 .75-.75zm3.7 0A1.95 1.95 0 0 0 6 16.95v.234c0 .614.323 1.184.85 1.5l1.529.918a.25.25 0 0 1 .121.214v.234a.45.45 0 0 1-.45.45h-.1a.45.45 0 0 1-.45-.45V20A.75.75 0 0 0 6 20v.05A1.95 1.95 0 0 0 7.95 22h.1A1.95 1.95 0 0 0 10 20.05v-.234a1.75 1.75 0 0 0-.85-1.5l-1.529-.918a.25.25 0 0 1-.121-.214v-.234a.45.45 0 0 1 .45-.45h.1a.45.45 0 0 1 .45.45V17a.75.75 0 0 0 1.5 0v-.05A1.95 1.95 0 0 0 8.05 15h-.1z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Bring Your Own Framework</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">
              Build your site using React, Svelte, Vue, Preact, web components,
              or just plain ol&#39; HTML + JavaScript.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
          <div className="mt-1 bg-gray-50 border shadow shadow-gray-100/50 border-gray-100 transition-colors rounded-lg grid place-items-center p-2 w-10 h-10 shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="text-gray-500"
              width="24"
              height="24"
              astro-icon="fluent:trophy-24-regular"
            >
              <path
                fill="currentColor"
                d="M15.254 2a2.25 2.25 0 0 1 2.236 2h1.268a1.75 1.75 0 0 1 1.744 1.606l.006.144v3a3.25 3.25 0 0 1-3.066 3.245l-.21.006a5.758 5.758 0 0 1-4.731 3.95V17.5h1.753a3.25 3.25 0 0 1 3.244 3.066l.006.184v.5a.75.75 0 0 1-.649.743l-.101.007H6.75a.75.75 0 0 1-.744-.648L6 21.25v-.5a3.25 3.25 0 0 1 3.065-3.245l.185-.005H11v-1.549a5.758 5.758 0 0 1-4.729-3.95L6.246 12a3.25 3.25 0 0 1-3.25-3.25v-3c0-.966.784-1.75 1.75-1.75h1.268a2.25 2.25 0 0 1 2.237-2h7.003zm-1 17H9.25a1.75 1.75 0 0 0-1.705 1.352l-.028.148h8.468a1.75 1.75 0 0 0-1.579-1.493L14.255 19zm1-15.5H8.25a.75.75 0 0 0-.75.75v5.998a4.252 4.252 0 0 0 8.503 0V4.25a.75.75 0 0 0-.75-.75zm3.504 2h-1.254v4.983A1.75 1.75 0 0 0 19 8.904l.007-.154v-3a.25.25 0 0 0-.193-.243l-.057-.007zM6 5.5H4.746a.25.25 0 0 0-.25.25v3a1.75 1.75 0 0 0 1.505 1.733V5.5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">100% Static HTML, No JS</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">
              Astro renders your entire page to static HTML, removing all
              JavaScript from your final build by default.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
          <div className="mt-1 bg-gray-50 border shadow shadow-gray-100/50 border-gray-100 transition-colors rounded-lg grid place-items-center p-2 w-10 h-10 shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="text-gray-500"
              width="24"
              height="24"
              astro-icon="fluent:box-24-regular"
            >
              <path
                fill="currentColor"
                d="M10.591 2.513a3.75 3.75 0 0 1 2.818 0l7.498 3.04A1.75 1.75 0 0 1 22 7.175v9.653a1.75 1.75 0 0 1-1.093 1.621l-7.498 3.04a3.75 3.75 0 0 1-2.818 0l-7.498-3.04A1.75 1.75 0 0 1 2 16.827V7.176a1.75 1.75 0 0 1 1.093-1.622l7.498-3.04zm2.254 1.39a2.25 2.25 0 0 0-1.69 0L9.24 4.68l7.527 2.927 2.669-1.03-6.592-2.673zm1.846 4.505L7.215 5.5 4.59 6.564l7.411 2.882 2.69-1.038zM3.5 16.828a.25.25 0 0 0 .156.231l7.499 3.04c.031.013.063.025.095.036v-9.371L3.5 7.75v9.078zm9.345 3.271 7.499-3.04a.25.25 0 0 0 .156-.232V7.774l-7.75 2.992v9.37a2.18 2.18 0 0 0 .095-.036z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">On-Demand Components</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">
              Need some JS? Astro can automatically hydrate interactive
              components when they become visible on the page.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
          <div className="mt-1 bg-gray-50 border shadow shadow-gray-100/50 border-gray-100 transition-colors rounded-lg grid place-items-center p-2 w-10 h-10 shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="text-gray-500"
              width="24"
              height="24"
              astro-icon="fluent:box-multiple-24-regular"
            >
              <path
                fill="currentColor"
                d="M15.78 3.737a2.25 2.25 0 0 0-1.56 0L9.913 5.33a.25.25 0 0 0-.163.234v2.793a4.75 4.75 0 0 0-1.5 0V5.563a1.75 1.75 0 0 1 1.143-1.641L13.7 2.33a3.75 3.75 0 0 1 2.6 0l4.307 1.592a1.75 1.75 0 0 1 1.143 1.641v10.67a1.75 1.75 0 0 1-1.143 1.642l-4.018 1.484c.105-.292.161-.604.161-.927v-.731l3.337-1.233a.25.25 0 0 0 .163-.235V5.563a.25.25 0 0 0-.163-.234L15.78 3.737zm-4.01 3.93a.75.75 0 1 1 .49-1.418l2.658.92a.25.25 0 0 0 .163 0l2.65-.92a.75.75 0 1 1 .492 1.418l-2.65.919a1.75 1.75 0 0 1-1.145 0l-2.659-.919zm-6 7a.75.75 0 0 1 .49-1.418l2.74.948 2.732-.947a.75.75 0 1 1 .49 1.417l-2.472.857v2.7a.75.75 0 0 1-1.5 0v-2.7l-2.48-.857zM10.3 9.53a3.75 3.75 0 0 0-2.6 0l-4.307 1.592a1.75 1.75 0 0 0-1.143 1.641v5.67a1.75 1.75 0 0 0 1.143 1.642L7.7 21.666a3.75 3.75 0 0 0 2.6 0l4.307-1.592a1.75 1.75 0 0 0 1.143-1.642v-5.67a1.75 1.75 0 0 0-1.143-1.641L10.3 9.529zm-2.08 1.407a2.25 2.25 0 0 1 1.56 0l4.307 1.592a.25.25 0 0 1 .163.234v5.67a.25.25 0 0 1-.163.235L9.78 20.259a2.25 2.25 0 0 1-1.56 0l-4.307-1.592a.25.25 0 0 1-.163-.235v-5.67a.25.25 0 0 1 .163-.234l4.307-1.592z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Broad Integration</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">
              Astro supports TypeScript, Scoped CSS, CSS Modules, Sass,
              Tailwind, Markdown, MDX, and any other npm packages.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
          <div className="mt-1 bg-gray-50 border shadow shadow-gray-100/50 border-gray-100 transition-colors rounded-lg grid place-items-center p-2 w-10 h-10 shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="text-gray-500"
              width="24"
              height="24"
              astro-icon="fluent:book-search-24-regular"
            >
              <path
                fill="currentColor"
                d="M14.819 11.795a3.724 3.724 0 1 0-1.024 1.024l2.476 2.475.067.058.008.006a.724.724 0 0 0 .942-1.093l-2.47-2.47zm-3.095-4.348a2.276 2.276 0 1 1 0 4.553 2.276 2.276 0 0 1 0-4.553zM6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2H6.5zM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1V18z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">SEO Enabled</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">
              Automatic sitemaps, RSS feeds, pagination and collections take the
              pain out of SEO and syndication. It just works!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start group hover:bg-slate-50 hover:border-slate-100 border border-transparent rounded-lg transition-all md:-m-5 p-5">
          <div className="mt-1 bg-gray-50 border shadow shadow-gray-100/50 border-gray-100 transition-colors rounded-lg grid place-items-center p-2 w-10 h-10 shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="text-gray-500"
              width="24"
              height="24"
              astro-icon="fluent:people-community-24-regular"
            >
              <path
                fill="currentColor"
                d="M14.75 15c.966 0 1.75.784 1.75 1.75l-.001.962c.117 2.19-1.511 3.297-4.432 3.297-2.91 0-4.567-1.09-4.567-3.259v-1c0-.966.784-1.75 1.75-1.75h5.5zm0 1.5h-5.5a.25.25 0 0 0-.25.25v1c0 1.176.887 1.759 3.067 1.759 2.168 0 2.995-.564 2.933-1.757V16.75a.25.25 0 0 0-.25-.25zm-11-6.5h4.376a4.007 4.007 0 0 0-.095 1.5H3.75a.25.25 0 0 0-.25.25v1c0 1.176.887 1.759 3.067 1.759.462 0 .863-.026 1.207-.077a2.743 2.743 0 0 0-1.173 1.576l-.034.001C3.657 16.009 2 14.919 2 12.75v-1c0-.966.784-1.75 1.75-1.75zm16.5 0c.966 0 1.75.784 1.75 1.75l-.001.962c.117 2.19-1.511 3.297-4.432 3.297l-.169-.002a2.755 2.755 0 0 0-1.218-1.606c.387.072.847.108 1.387.108 2.168 0 2.995-.564 2.933-1.757V11.75a.25.25 0 0 0-.25-.25h-4.28a4.05 4.05 0 0 0-.096-1.5h4.376zM12 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM6.5 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm11 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-11 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Community</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">
              Astro is an open source project powered by hundreds of
              contributors making thousands of individual contributions.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
