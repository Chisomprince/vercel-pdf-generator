import Link from "next/link";

export default function Header() {
  return (
    <header className="astronav-sticky-header sticky top-0 border-b z-20 transition-all py-5 border-transparent bg-white">
      <div className="max-w-screen-xl mx-auto px-5">
        <div
          className="flex flex-col lg:flex-row justify-between items-center relative z-10"
          data-astro-transition-scope="astro-o7bz76pi-1"
        >
          <div className="flex w-full lg:w-auto items-center justify-between">
            <a
              href="/"
              className="text-lg flex items-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray rounded-full px-2 -ml-2"
            >
              <span className="font-bold text-gray-600">Revamped</span>
              <span className="text-slate-600">CV</span>
            </a>
            <div className="block lg:hidden">
              <button id="astronav-menu" aria-label="Toggle Menu">
                <svg
                  fill="currentColor"
                  className="w-4 h-4 text-gray-800"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Toggle Menu</title>
                  <path
                    className="astronav-close-icon astronav-toggle hidden"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                  ></path>
                  <path
                    className="astronav-open-icon astronav-toggle"
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <nav className="astronav-items astronav-toggle hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
            <ul className="flex flex-col lg:flex-row lg:gap-3">
              <li>
                <a
                  href="/pricing"
                  className="flex lg:px-3 py-2 text-sm text-gray-600 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-offset-2 transition focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray rounded-full"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="flex lg:px-3 py-2 text-sm text-gray-600 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-offset-2 transition focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray rounded-full"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="flex lg:px-3 py-2 text-sm text-gray-600 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-offset-2 transition focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray rounded-full"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex lg:px-3 py-2 text-sm text-gray-600 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-offset-2 transition focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray rounded-full"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="lg:hidden flex items-center mt-3 gap-4">
              <Link
                href="/auth/login"
                className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray w-full px-5 py-2 bg-gray-100 hover:bg-gray-200 border-2 border-transparent"
              >
                Log in
              </Link>
              <a
                href="#"
                className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray w-full px-5 py-2 bg-gray-600 text-white hover:bg-gray-800"
              >
                Try for Free
              </a>
            </div>
          </nav>

          <div>
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/auth/login"
                className="text-sm px-2 py-1 transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray rounded-full"
              >
                Log in
              </Link>
              <a
                href="#"
                className="rounded text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 focus-visible:outline-none focus-visible:shadow-outline-gray px-4 py-2 text-sm bg-gray-600 text-white hover:bg-gray-800 inline-flex items-center group gap-px"
              >
                <span>Try for Free</span>
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
