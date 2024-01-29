export default function Footer() {
  return (
    <footer className="py-14 bg-slate-100 border-t border-slate-100">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3">
            <a href="/" className="text-lg flex items-center">
              <span className="font-bold text-gray-600">Revamped</span>
              <span className="text-slate-600">CV</span>
            </a>
            <p className="mt-4 text-sm text-slate-700 max-w-md">
              Empowering careers, one step at a time. RevampedCV is dedicated to
              providing you with the tools and resources you need to succeed in
              your professional journey.
            </p>
            <div className="flex gap-3 mt-4 items-center">
              <a
                href="https://twitter.com/surjithctly"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-200 hover:bg-slate-300 rounded w-6 h-6 inline-flex items-center justify-center text-slate-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  astro-icon="bx:bxl-twitter"
                >
                  <path
                    fill="currentColor"
                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                  />
                </svg>
                <span className="sr-only">Twitter or X</span>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-200 hover:bg-slate-300 rounded w-6 h-6 inline-flex items-center justify-center text-slate-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  astro-icon="bx:bxl-facebook-circle"
                >
                  <path
                    fill="currentColor"
                    d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-200 hover:bg-slate-300 rounded w-6 h-6 inline-flex items-center justify-center text-slate-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  astro-icon="bx:bxl-linkedin-square"
                >
                  <path
                    fill="currentColor"
                    d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
                  />
                </svg>
                <span className="sr-only">Linkedin</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm text-slate-800">Company</h3>
            <div className="flex flex-col mt-3">
              <a
                href="/about"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                About
              </a>
              <a
                href="#"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                Careers
              </a>
              <a
                href="/blog"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                Contact
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm text-slate-800">Product</h3>
            <div className="flex flex-col mt-3">
              <a
                href="#"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                For Startups
              </a>
              <a
                href="#"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                Features
              </a>
              <a
                href="/pricing"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                Pricing
              </a>
              <a
                href="#"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                Integrations
              </a>
            </div>
          </div>
          {/* <div>
            <h3 className="font-medium text-sm text-slate-800">Resources</h3>
            <div className="flex flex-col mt-3">
              <a
                href="#"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                Help Center
              </a>
              <a
                href="#"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                Guides
              </a>
              <a
                href="#"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                Documentation
              </a>
              <a
                href="#"
                className="py-2 text-sm text-slate-600 hover:text-gray-600"
              >
                Uptime Status
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-14 pt-8 px-5 border-t border-slate-200">
        <div className="max-w-screen-xl mx-auto px-5">
          <p className="text-center text-sm text-slate-600 [text-wrap:balance]">
            Copyright © 2023 Astroship. All rights reserved.
          </p>
          {/* <p className="text-center text-xs text-slate-600 mt-2">
            <a href="/terms" className="hover:text-gray-500">
              {" "}
              Terms
            </a>{" "}
            ・
            <a href="/privacy" className="hover:text-gray-500">
              {" "}
              Privacy
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
