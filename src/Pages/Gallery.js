import React, { useState } from "react";
import photo2 from "../assets/SuperiorBuildcon-Gallery/Anirudha CHSL, Sant Jana Bai Road, Vile Parle East/photo2.jpg"; 
import photo1 from "../assets/SuperiorBuildcon-Gallery/Anirudha CHSL, Sant Jana Bai Road, Vile Parle East/photo1.jpg"; 
import photo3 from "../assets/SuperiorBuildcon-Gallery/Anirudha CHSL, Sant Jana Bai Road, Vile Parle East/photo3.jpg"; 
import photo4 from "../assets/SuperiorBuildcon-Gallery/Koteshwar Darshan, Subhash Road, Vile Parle East/photo4.jpg"; 
import photo5 from "../assets/SuperiorBuildcon-Gallery/Koteshwar Darshan, Subhash Road, Vile Parle East/photo5.jpg";
import photo6 from "../assets/SuperiorBuildcon-Gallery/Pushpakunj CHSL, Dixit Road,Vile Parle East/photo6.jpg";
import photo7 from "../assets/SuperiorBuildcon-Gallery/Pushpakunj CHSL, Dixit Road,Vile Parle East/photo7.jpg";
import photo9 from "../assets/SuperiorBuildcon-Gallery/Sahajanand CHSL Location  Santacruz West/photo9.jpg";
import photo10 from "../assets/SuperiorBuildcon-Gallery/Sahajanand CHSL Location  Santacruz West/photo10.jpg";
import photo11 from "../assets/SuperiorBuildcon-Gallery/Sahajanand CHSL Location  Santacruz West/photo11.jpg";
import photo12 from "../assets/SuperiorBuildcon-Gallery/Umia CHSL Location  Vile Parle East/photo12.jpg";
import photo13 from "../assets/SuperiorBuildcon-Gallery/Umia CHSL Location  Vile Parle East/photo13.jpg";
import photo14 from "../assets/SuperiorBuildcon-Gallery/Umia CHSL Location  Vile Parle East/photo14.jpg";
import photo15 from "../assets/SuperiorBuildcon-Gallery/Vinayak Bunglow, Tejpal scheme Road No 5, Vile Parle East/photo15.jpg";

const Gallery = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  const galleryData = [
    {
      subtitle: "Vinayak Bunglow",
      description: "Address: Vinayak Bunglow, Tejpal scheme Road No 5, Vile Parle East",
      images: [photo15],
    },
   
    {
      subtitle: "Koteshwar Darshan",
      description: "Address: Koteshwar Darshan, Subhash Road, Vile Parle East",
      images: [photo4, photo5],
    },
    {
      subtitle: "Pushpakunj CHSL",
      description: "Address: Pushpakunj CHSL, Dixit Road,Vile Parle East",
      images: [photo6, photo7],
    },
    {
      subtitle: "Sahajanand CHSL",
      description: "Address: Sahajanand CHSL Location Santacruz West",
      images: [photo9, photo10, photo11],
    },
    {
      subtitle: "Umia CHSL",
      description: "Address: Umia CHSL Location Vile Parle East",
      images: [photo12, photo13, photo14],
    },
    {
      subtitle: "Anirudha CHSL",
      description: "Address: Anirudha CHSL, Sant Jana Bai Road, Vile Parle East",
      images: [photo1, photo2, photo3],
    },
  ];

  const handleOpenModal = (gallery) => {
    setSelectedGallery(gallery);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const handleCloseModal = () => {
    setSelectedGallery(null);
    document.body.style.overflow = "auto"; // Restore background scroll
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            SuperiorBuilderCon Gallery Showcase
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Welcome to the SuperiorBuilderCon Gallery. Explore our curated selection of projects highlighting our expertise.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {galleryData.map((item, index) => (
            <div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
              <div className="flex relative h-[300px] cursor-pointer" onClick={() => handleOpenModal(item)}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.images[0]} // Show the first image
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex flex-col justify-center">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#0184a2] mb-1">
                    {item.subtitle}
                  </h2>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-11/12 max-w-3xl overflow-hidden">
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
                onClick={handleCloseModal}
              >
                ✕
              </button>
              <h2 className="text-xl font-bold text-center my-4">{selectedGallery.subtitle}</h2>
              <p className="text-center text-gray-600">{selectedGallery.description}</p>
            </div>
            <div className="overflow-y-auto max-h-[400px] p-4">
              {selectedGallery.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="mb-4 w-full rounded shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
