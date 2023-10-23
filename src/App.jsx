import { FooterWithSitemap } from "./components/Footer";
import CarouselWithContent from "./components/carousel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhySwifts from "./pages/WhySwift";
import { CardDefault } from "./pages/home";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <CarouselWithContent />
        <Routes>
          <Route exact path="/" element={<CardDefault />} />
          <Route path="/why-swift" element={<WhySwifts />} />
        </Routes>
        <FooterWithSitemap />
      </BrowserRouter>
    </div>
  );
}
