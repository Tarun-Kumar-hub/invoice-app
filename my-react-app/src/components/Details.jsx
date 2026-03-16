import React, { useState } from "react";

const Details = ({ data, setData }) => {
  const [date, setDate] = useState("");

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-6">
      
      {/* Company Header */}
      <div className="border-b pb-4 mb-4 flex justify-between items-center print:block print:text-center">
        
        <div>
          <h1 className="text-3xl font-bold text-green-700">Parveen & Co.</h1>
          <p className="text-sm text-black">
            Phone: +91 90342 51034, +91 94668 7172
          </p>
        </div>

      <div className="text-right print:text-center mt-2 ">

  {/* Date Input */}
  <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className="border p-2 rounded print:hidden"
  />

  {/* Date for print */}
  <p className="text-sm font-medium hidden print:block">
    Date: {date }
  </p>

</div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 print:grid-cols-2">
        
        {/* Invoice No */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold whitespace-nowrap">
            Invoice No:
          </label>

          <input
            type="number"
            value={data.invoiceNo}
            onChange={(e) =>
              setData({ ...data, invoiceNo: e.target.value })
            }
            className="w-full border rounded px-2 py-1 print:border-none print:outline-none print:bg-transparent"
          />
        </div>

        {/* Customer Name */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold whitespace-nowrap">
            Bill To:
          </label>

          <input
            type="text"
            value={data.customerName}
            onChange={(e) =>
              setData({ ...data, customerName: e.target.value })
            }
            className="w-full border rounded px-2 py-1 print:border-none print:outline-none print:bg-transparent"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold whitespace-nowrap">
            Phone:
          </label>

          <input
            type="text"
            value={data.customerNo}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 10) {
                setData({ ...data, customerNo: value });
              }
            }}
            className="w-full border rounded px-2 py-1 print:border-none print:outline-none print:bg-transparent"
          />
        </div>

      </div>
    </div>
  );
};

export default Details;
