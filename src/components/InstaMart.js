import { useState } from "react";

const Section = ({ sectionName, isVisible, setIsVisible }) => {
  return (
    <>
    
      <div className=" py-2 px-4 border-solid border-2 border-indigo-600 my-3 mx-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl ">{sectionName}</h1>
          {isVisible ? (
            <button
              className="px-4  border-solid border-2 hover:bg-yellow-300 hover:text-white"
              onClick={() => setIsVisible()}
            >
              Hide
            </button>
          ) : (
            <button
              className="px-4  border-solid border-2 hover:bg-yellow-300 hover:text-white"
              onClick={() => setIsVisible()}
            >
              Show
            </button>
          )}
        </div>
        {isVisible && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
            quam at dui ultrices porttitor sed vitae velit. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Fusce et vehicula est. Ut congue mauris a vestibulum fringilla.
            Donec vulputate suscipit ligula sit amet tempor. Etiam tempus velit
            odio, nec auctor metus dignissim sed. Aenean efficitur eget sapien
            nec mollis. Ut convallis varius eleifend.
          </p>
        )}
      </div>
    </>
  );
};

const InstaMart = () => {
  const [isVisible, setIsVisible] = useState("about");
  return (
    <>
          <div className=" flex flex-col bg-[#171a29] h-44 md:h-64 justify-center items-center shadow-lg mt-10"></div>
      <Section
        sectionName="About Instamart"
        isVisible={isVisible === "about"}
        setIsVisible={() => (isVisible==='about')? setIsVisible(''): setIsVisible("about")}
      />
      <Section
        sectionName="Team Instamart"
        isVisible={isVisible === "team"}
        setIsVisible={() =>  (isVisible==='team')? setIsVisible(''): setIsVisible("team")}
      />
      <Section
        sectionName="Careers Instamart"
        isVisible={isVisible === "careers"}
        setIsVisible={() =>  (isVisible==='careers')? setIsVisible(''): setIsVisible("careers")}
      />
    </>
  );
};

export default InstaMart;
