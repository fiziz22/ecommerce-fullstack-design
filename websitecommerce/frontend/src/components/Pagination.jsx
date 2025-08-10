import React from "react";

const Pagination = () => {
  return (
    <div className="flex gap-2">
      <button className="px-3 py-1 border rounded">Prev</button>
      <button className="px-3 py-1 border rounded bg-blue-500 text-white">1</button>
      <button className="px-3 py-1 border rounded">2</button>
      <button className="px-3 py-1 border rounded">Next</button>
    </div>
  );
};

export default Pagination;
