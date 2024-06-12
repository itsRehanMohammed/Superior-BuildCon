import React from "react";

const Gallery = () => {
  const galleryData = [
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      subtitle: "THE SUBTITLE",
      title: "Shooting Stars",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            SuperiorBuilderCon Gallery Showcase
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Welcome to the SuperiorBuilderCon Gallery, where innovation meets
            craftsmanship. Our collection features the finest examples of modern
            building techniques and design. Explore our curated selection of
            projects that highlight our dedication to excellence in construction
            and design. From cutting-edge architecture to sustainable solutions,
            each piece in our gallery tells a story of vision and expertise.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {galleryData.map((item, index) => {
            return (
              <div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={item.imageUrl}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-[#0184a2] mb-1">
                      {item.subtitle + " " + (index + 1)}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {item.title}
                    </h1>
                    <p className="leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
