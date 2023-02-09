import { useEffect, useState } from "react";

const useISOnlinne = () => {
  const [isOnline, setIsOnline] = useState(true);

  const Online = () => {
    console.log("hello")
    setIsOnline(true);
  };
  const Offline = () => {
    setIsOnline(false);
  };
  useEffect(() => {
 
 
      window.addEventListener("online", Online);

      window.addEventListener("offline", Offline);
 

    

    return () => {
      window.removeEventListener("online", Online);
      window.removeEventListener("offline", Offline);
    };
  }, []);
  return isOnline;
};

export default useISOnlinne;
