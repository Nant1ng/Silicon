import React from "react";

const Breadcrumb = ({ pathName }) => {
  const formatPathname = (name) => {
    const trimmedPath = name.startsWith("/") ? name.slice(1) : name;
    return trimmedPath.charAt(0).toUpperCase() + trimmedPath.slice(1);
  };

  const formattedPathname = formatPathname(pathName);

  return (
    <section className="breadcrumb">
      <img src="./icons/HomeGray.svg" alt="Home icon" />
      <h2>Home</h2>
      <img src="./icons/ChevronsRight.svg" alt="Chevrons pointing right" />
      <h2 className="path-name">{formattedPathname}</h2>
    </section>
  );
};

export default Breadcrumb;
