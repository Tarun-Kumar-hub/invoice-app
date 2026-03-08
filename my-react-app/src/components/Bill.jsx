import React, { useState } from "react";

const Bill = ({ data, setData }) => {
  const juices = [
    "Mango Licith[mix bundle]",
    "Orange Juice",
    "Apple Juice",
    "Mixed Fruit",
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
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 items-end mb-6 print:hidden"
      >
        <div>
          <label className="block text-sm font-medium">Juice</label>
          <select
            value={juice}
            onChange={(e) => setJuice(e.target.value)}
            className="border rounded px-3 py-2 w-48"
          >
            <option value="">-- Select Juice --</option>

            {juices.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="border rounded px-3 py-2 w-32"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Qty"
            className="border rounded px-3 py-2 w-32"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Item
        </button>
      </form>

      {/* Table */}
      <h3 className="text-lg font-semibold mb-3">Invoice Items</h3>

      <div className="overflow-x-auto">
        <table className="w-full border border-black text-sm">
          <thead className="bg-gray-100 print:bg-white">
            <tr>
              <th className="border px-3 py-2">S No</th>
              <th className="border px-3 py-2">Juice Name</th>
              <th className="border px-3 py-2">Quantity</th>
              <th className="border px-3 py-2">Price</th>
              <th className="border px-3 py-2">Total</th>
              <th className="border px-3 py-2 print:hidden">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.items.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border px-3 py-2">{index + 1}</td>
                <td className="border px-3 py-2">{item.juice}</td>
                <td className="border px-3 py-2">{item.quantity}</td>
                <td className="border px-3 py-2">{item.price}</td>
                <td className="border px-3 py-2">{item.total}</td>

                <td className="border px-3 py-2 print:hidden">
                  <button
                    type="button"
                    onClick={() => deleteRow(index)}
                    className="bg-red-500 text-white px-1 py-1 rounded hover:bg-red-600"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="bg-gray-100 font-semibold">
            <tr>
              <td colSpan="4" className="border px-3 py-2 text-right">
                Grand Total
              </td>

              <td className="border px-3 py-2 text-center">{grandTotal}</td>

              <td className="border print:hidden"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Signature */}
      <div className="mt-10 text-right">
        <p className="font-medium">Signature</p>
        <div className="border-b w-48 ml-auto mt-6"></div>
      </div>
    </div>
  );
};

export default Bill;
