import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Outlet /> {/* This is where the page-specific content will be injected */}
      <Contact />
      <Footer />
    </div>
  );
};