import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import "./PublicLayout.scss";
import { Outlet } from "react-router-dom";


function PublicLayout() {

  return (
    <>
      <Header  />
      <Outlet />
      <Footer />
    </>
  );
}

export default PublicLayout;
