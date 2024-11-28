import jsPDF from "jspdf";
import "jspdf-autotable"; // For table creation

// Import the catalogue data
import catalogueData from "./catalogData"; // Update with your actual path

export const generatePDFCatalogue = () => {
  const doc = new jsPDF();

  // Add the title to the first page
  doc.setFontSize(18);
  doc.text("Royal Chemicals and Motor Oils Product Catalogue", 14, 20);

  // Add some additional information
  doc.setFontSize(12);
  doc.text("Explore our range of products designed for performance and reliability.", 14, 30);

  // Track the vertical position (start after title)
  let currentY = 40;

  // Loop through each category
  catalogueData.forEach((category, index) => {
    // Add category title
    doc.setFontSize(14);
    doc.setTextColor("#1f3a93");
    doc.text(category.category, 14, currentY);

    // Prepare the table data
    const tableData = category.products.map((product) => [
      product.name,
      product.description,
    ]);

    // Add the table for the current category
    doc.autoTable({
      head: [["Product Name", "Description"]],
      body: tableData,
      startY: currentY + 10, // Start below the category title
      theme: "striped",
      styles: { fontSize: 10, cellPadding: 5 },
      headStyles: { fillColor: "#1f3a93", textColor: "#ffffff" },
      margin: { top: 10, bottom: 10, left: 14, right: 14 },
      pageBreak: "auto", // Automatically create page breaks
      didDrawPage: (data) => {
        currentY = data.cursor.y + 10; // Update vertical position for next content
      },
    });

    // Check if the current position exceeds the page height (A4 height is 297mm)
    if (currentY > 270) {
      doc.addPage(); // Add a new page
      currentY = 20; // Reset the Y position
    }
  });

  // Save the PDF
  doc.save("Royal_Chemicals_Catalogue.pdf");
};
