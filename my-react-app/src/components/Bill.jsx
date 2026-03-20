import React, { useState } from "react";

const Bill = ({ data, setData }) => {
  const juices = [
    "Mango Licith Pineapple[mix bundle]",
    "Mango",
    "Licith ",
    "Pinapple",
  ];

  const [juice, setJuice] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!juice || !price || !quantity) return;

    const newItem = {
      juice,
      price,
      quantity,
      total: Number(price) * Number(quantity),
    };

    setData({
      ...data,
      items: [...data.items, newItem],
    });

    setJuice("");
    setPrice("");
    setQuantity("");
  };

  const deleteRow = (index) => {
    const updatedItems = data.items.filter((_, i) => i !== index);

    setData({
      ...data,
      items: updatedItems,
    });
  };

  const grandTotal = data.items.reduce(
    (sum, item) => sum + Number(item.total),
    0,
  );

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 rounded-md shadow print:shadow-none">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-3 items-end mb-3 print:hidden"
      >
        <div>
          <label className="block text-xs font-medium">Juice</label>
          <select
            value={juice}
            onChange={(e) => setJuice(e.target.value)}
            className="border rounded px-2 py-1 text-xs w-44"
          >
            <option value="">Select Juice</option>

            {juices.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded px-2 py-1 text-xs w-24"
          />
        </div>

        <div>
          <label className="block text-xs font-medium">Qty</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border rounded px-2 py-1 text-xs w-20"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700"
        >
          Add
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-black text-xs">
          <thead className="bg-gray-100 print:bg-white">
            <tr>
              <th className="border px-2 py-1">#</th>
              <th className="border px-2 py-1">Item</th>
              <th className="border px-2 py-1">Qty</th>
              <th className="border px-2 py-1">Price</th>
              <th className="border px-2 py-1">Total</th>
              <th className="border px-2 py-1 print:hidden">X</th>
            </tr>
          </thead>

          <tbody>
            {data.items.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border px-2 py-1">{index + 1}</td>
                <td className="border px-2 py-1">{item.juice}</td>
                <td className="border px-2 py-1">{item.quantity}</td>
                <td className="border px-2 py-1">{item.price}</td>
                <td className="border px-2 py-1">{item.total}</td>

                <td className="border px-2 py-1 print:hidden">
                  <button
                    type="button"
                    onClick={() => deleteRow(index)}
                    className="text-red-600"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="font-semibold">
            <tr>
              <td colSpan="4" className="border px-2 py-1 text-right">
                Grand Total
              </td>

              <td className="border px-2 py-1 text-center">{grandTotal}</td>

              <td className="border print:hidden"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Signature */}
      <div className="mt-6 text-right">
        <p className="text-xs font-medium">Signature</p>
        <div className="border-b w-40 ml-auto mt-3"></div>
      </div>
    </div>
  );
};

export default Bill;
