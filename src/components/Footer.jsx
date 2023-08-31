import React from "react";

const Footer = ({ items }) => {
  if (items.length === 0)
    return (
      <h1
        className="text-rose-400 bg-slate-400 mx-4 p-2
    text-center font-bold text-xl"
      >
        You have no items on your list
      </h1>
    );

  const tot = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = Math.round((packed / tot) * 100);
  return (
    <footer
      className="bg-slate-400 mx-4 p-2 text-white
    text-center font-bold text-xl
    "
    >
      {percent === 100 ? (
        <h1 className="text-rose-600">
          🎉🎉🎉 You are ready to go! ({percent}%)
        </h1>
      ) : (
        <h1>
          You have planned {tot} items on your list, and you have already packed{" "}
          {packed} ({percent}%)
        </h1>
      )}
    </footer>
  );
};

export default Footer;
