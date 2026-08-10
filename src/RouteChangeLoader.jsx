import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "./Spinner/Spinner";

function RouteChangeLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);    
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Spinner />}
      {children}
    </>
  );
}

export default RouteChangeLoader;