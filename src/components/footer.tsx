export default function Footer() {
  return (
    <>
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
        <div className="py-6 border-t !border-gray-500 ">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <p className="text-sm text-muted">© 2025 Miguelkarma</p>
            </div>

            {/* List */}
            <ul className="flex flex-wrap items-center">
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                <a
                  className="text-sm text-muted underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 "
                  href="https://github.com/Miguelkarma"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                <a
                  className="text-sm text-muted underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2"
                  href="https://www.instagram.com/migzyr/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li className="inline-block pe-4 text-xs">
                <a
                  className="text-sm text-muted underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 "
                  href="https://www.linkedin.com/in/paul-miguel-santos-17aa43320/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      ;
    </>
  );
}
