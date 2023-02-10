 
const SimmerUI = () => {
  return (
    <>
      <div className="py-4 bg-gray-300 "></div>
      <div className="flex flex-wrap justify-center  bg-gray-300 items-start shadow-lg shadow-white pb-12">
     
        {Array(15).fill('').map((d,index) => {
          return (
            <div className="flex flex-col p-2 m-4  " key={index}>
              <div className=" bg-white w-80 min-h-[350px]"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SimmerUI;
