import React from "react";
import { generatePDFCatalogue } from "./pdfUtils"; // Adjust the path to your utility file

const Catalogue = () => {
  return (
    <div className="catalogue-page container text-center py-5">
      <h1 className="catalogue-title">Download Our Product Catalogue</h1>
      <p>Explore our full range of products. Click the button below to download the PDF catalogue.</p>
      <button className="btn btn-primary" onClick={generatePDFCatalogue}>
        Download PDF Catalogue
      </button>
    </div>
  );
};

export default Catalogue;
