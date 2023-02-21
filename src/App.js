import './App.scss';

// Common Layout
import Header from "./myComponents/headerComponents/Header";
import Footer from "./myComponents/footerComponent/Footer";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// React Router Dom
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Route page Dclaration
import Landing from "./routePage/Landing";
import Company from "./routePage/Company";
import Portfolio from "./routePage/Portfolio";
import Products from "./routePage/Products";
import Services from "./routePage/Services";
import Blog from "./routePage/Blog";
import Contact from "./routePage/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" element={<Landing />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
