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
              Quality is at the core of everything we do. Since the company was
              founded, we are focused on delivering quality to our clients. We
              recognize that continual improvement is the key factor of Quality.
              Our aim is to complete the work with zero snags. For this, we
              conduct continuing training and stay aware of technology. Each
              step of projects is extensively documented on site. Our quality
              teams stay at the site regularly and ensure compliance with
              building regulations.
            </p>
            <a class="mt-3 text-[#0184a2] inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Safety Policy
            </h2>
            <p class="leading-relaxed text-base">
              Safety is not negotiable. This Policy on Safety and Health at Work
              is based on Superior Buildcon Business Principles and the Superior
              Buildcon Leadership Principles, which are binding for the whole
              Superior Buildcon. We believe that sustainable success can be
              reached only through people. No other asset in the company is as
              important as the people that contribute with their work to our
              culture and our business results. Therefore, we devote all
              necessary energy and attention to protect employees, contractors,
              and any other people involved with the company along the value
              chain, including suppliers, customers, and the public. Compliance
              is crucial, and to be at the forefront of accident prevention in
              the industry, we implement the mandatory Occupational Safety and
              Health Management System in all our sites, which meets or exceeds
              the requirements of the health and safety laws applicable in the
              countries in which we operate.
            </p>
            <a class="mt-3 text-[#0184a2] inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
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
