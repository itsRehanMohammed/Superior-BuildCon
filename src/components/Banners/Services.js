import React from "react";

const Services = () => {
  const areasOfWork = [
    {
      title: "Planning",
    },
    {
      title: "Management (At Site)",
    },
    {
      title: "Execution",
    },
    {
      title: "Rehabilitation of Residential & Industrial Structures",
    },
    {
      title: "Constructions & Interior Fit outs",
    },
    {
      title: "Safety",
    },
    {
      title: "Quality",
    },
    {
      title: "Trust",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            What you will get from us
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {areasOfWork.map((area, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#0184a2] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{area.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
