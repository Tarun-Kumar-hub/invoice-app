import React, { useRef, useState } from "react";
import Details from "./components/Details";
import Bill from "./components/Bill";
import { useReactToPrint } from "react-to-print";

const Invoice = () => {
  const printingRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: printingRef,
    documentTitle: "Juice_Invoice",
  });

  const [invoiceData, setInvoiceData] = useState({
    invoiceNo: "",
    customerName: "",
    customerNo: "",
    date: "",
    items: [],
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Print Button */}
      <div className="max-w-4xl mx-auto mb-4 flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="px-5 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
        >
          Print Invoice
        </button>
      </div>

      {/* Editable UI */}
      <div className="print:hidden">
        <Details data={invoiceData} setData={setInvoiceData} />
        <Bill data={invoiceData} setData={setInvoiceData} />
      </div>

      {/* Printable Invoice */}
      <div
        ref={printingRef}
        className="hidden print:block max-w-4xl mx-auto bg-white p-6"
      >
        <Details data={invoiceData} setData={setInvoiceData} />
        <Bill data={invoiceData} setData={setInvoiceData} />
      </div>
    </div>
  );
};

export default Invoice;
