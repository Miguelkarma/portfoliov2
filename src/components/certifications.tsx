import { certifications } from "@/elements/constants";

export default function Certifications() {
  return (
    <>
      <div
        className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-card rounded-xl border "
        id="certs"
      >
        {/* Title */}
        <div className="max-w-2xl mx-auto text-start mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2">
            Certifications
          </h2>
          <p className="mt-1 text-muted">
            My completed courses and qualifications
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Accordion */}
          <div className="hs-accordion-group">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="hs-accordion bg-card-foreground border hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10 mb-4"
                id={`hs-certification-${cert.id}`}
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded={cert.id === 1 ? "true" : "false"}
                  aria-controls={`hs-certification-collapse-${cert.id}`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={cert.author.avatar}
                      alt={cert.author.name}
                      className="size-8 rounded-full"
                    />
                    <span>
                      {cert.author.name} - {cert.author.date}
                    </span>
                  </div>
                  <svg
                    className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id={`hs-certification-collapse-${cert.id}`}
                  className={`hs-accordion-content ${
                    cert.id === 1 ? "" : "hidden"
                  } w-full overflow-hidden transition-[height] duration-300`}
                  role="region"
                  aria-labelledby={`hs-certification-${cert.id}`}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2">
                      <img
                        src={cert.image}
                        alt={`Certificate ${cert.id}`}
                        className="rounded-lg w-full shadow-sm"
                      />
                    </div>
                    <div className="md:w-1/2 text-gray-800 dark:text-neutral-200">
                      <h3 className="font-semibold text-lg mb-2">
                        {cert.title}
                      </h3>
                      <p className="mb-4">{cert.description}</p>
                      <p className="text-sm text-gray-600 dark:text-neutral-400 mb-4">
                        Issued by {cert.author.name} on {cert.author.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
