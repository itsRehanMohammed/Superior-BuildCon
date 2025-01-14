import React from "react";

const Quality = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Policies
          </h1>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#0184a2] flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Quality Policy
            </h2>
            <p class="leading-relaxed text-base">
              At Superior BuilderCon, quality is the cornerstone of everything
              we do. We are committed to delivering top-tier building renovation
              and repair solutions that exceed client expectations. Through
              meticulous planning, skilled craftsmanship, and the use of premium
              materials, we ensure every project is completed to the highest
              standards. We continuously improve our processes, embrace
              innovative techniques, and prioritize customer satisfaction,
              fostering long-term trust and reliability in our services.
            </p>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Safety Policy
            </h2>
            <p class="leading-relaxed text-base">
              Safety is a fundamental priority at Superior BuilderCon. We are
              dedicated to maintaining a safe and healthy work environment for
              our employees, clients, and stakeholders. By adhering to stringent
              safety protocols, conducting regular training, and utilizing
              appropriate protective equipment, we mitigate risks and ensure
              safe execution across all projects. Our commitment to safety
              extends to proactively identifying hazards, complying with
              regulatory requirements, and promoting a culture where safety is
              everyone’s responsibility. Together, we build with care and
              confidence.
            </p>
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#0184a2] flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
