import ContentEight from "../home/ContentEight";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import ContentThree from "../home/ContentThree"
import CatalogFour from "./CatalogFour";
import CatalogOne from "./CatalogOne";
import CatalogThree from "./CatalogThree";
import CatalogTwo from "./CatalogTwo";
function Catalog() {
  return (
    <div>
      <Navbar />
      <CatalogOne />
      <CatalogTwo />
      <CatalogThree />
      <CatalogFour />
      <ContentThree />
      <div className="mb-12">
        <ContentEight />
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;
