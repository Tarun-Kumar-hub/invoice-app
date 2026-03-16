const Details = ({ data, setData }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-4 rounded-md shadow mb-3 print:shadow-none print:p-2">
      {/* Company Header */}
      <div className="border-b pb-2 mb-3 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-green-700">Parveen & Co.</h1>

          <p className="text-xs text-gray-700">
            Phone: +91 90342 51034, +91 94668 7172
          </p>
        </div>

        <div>
          {/* Date Picker */}
          <input
            type="date"
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
            className="border border-gray-300 px-2 py-1 rounded text-xs print:hidden"
          />

          {/* Date for print */}
          <p className="hidden print:block text-xs">Date: {data.date}</p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs print:grid-cols-2">
        {/* Invoice Number */}
        <div className="flex items-center gap-2">
          <label className="font-semibold whitespace-nowrap">Invoice No:</label>

          <input
            type="number"
            value={data.invoiceNo}
            onChange={(e) => setData({ ...data, invoiceNo: e.target.value })}
            className="border border-gray-300 rounded px-2 py-1 w-full print:border-none print:bg-transparent"
          />
        </div>

        {/* Customer Name */}
        <div className="flex items-center gap-2">
          <label className="font-semibold whitespace-nowrap">Bill To:</label>

          <input
            type="text"
            value={data.customerName}
            onChange={(e) => setData({ ...data, customerName: e.target.value })}
            className="border border-gray-300 rounded px-2 py-1 w-full print:border-none print:bg-transparent"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <label className="font-semibold whitespace-nowrap">Phone:</label>

          <input
            type="text"
            value={data.customerNo}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 10) {
                setData({ ...data, customerNo: value });
              }
            }}
            className="border border-gray-300 rounded px-2 py-1 w-full print:border-none print:bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
