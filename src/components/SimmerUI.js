 
const SimmerUI = () => {
  return (
    <>
      <div className="search-container"></div>
      <div className="restaurant-list">
     
        {Array(15).fill('').map((d,index) => {
          return (
            <div className="card" key={index}>
              <div className="img-section"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SimmerUI;
