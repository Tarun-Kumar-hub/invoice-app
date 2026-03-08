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
    items: [],
  });

  return (
    <div>
      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded print:hidden"
      >
        Print Invoice
      </button>

      {/* Editable UI */}
      <div className="print:hidden">
        <Details data={invoiceData} setData={setInvoiceData} />
        <Bill data={invoiceData} setData={setInvoiceData} />
      </div>

      {/* Printable area */}
      <div
        ref={printingRef}
        className="hidden print:block print-container scale-90 origin-top"
      >
        {/* Copy 1 */}
        <div className="invoice-copy">
          <Details data={invoiceData} setData={setInvoiceData} />
          <Bill data={invoiceData} setData={setInvoiceData} />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
