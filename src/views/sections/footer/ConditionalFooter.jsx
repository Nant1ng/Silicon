import { useLocation } from "react-router-dom";
import HomeFooter from "./HomeFooter";
import Footer from "./Footer";

const ConditionalFooter = () => {
  let location = useLocation();

  if (location.pathname === "/") {
    return <HomeFooter />;
  } else {
    return <Footer />;
  }
};

export default ConditionalFooter;
