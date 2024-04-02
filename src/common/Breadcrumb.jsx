import React from "react";

const Breadcrumb = ({ pathName }) => {
  const formatPathname = (name) => {
    const trimmedPath = name.startsWith("/") ? name.slice(1) : name;
    return trimmedPath.charAt(0).toUpperCase() + trimmedPath.slice(1);
  };

  const formattedPathname = formatPathname(pathName);

  return (
    <section id="breadcrumb">
      <img src="./icons/HomeGray.svg" alt="Home icon" className="home-icon" />
      <h2>Home</h2>
      <img
        src="./icons/ChevronsRight.svg"
        alt="Chevrons pointing right"
        className="chevron-icon"
      />
      <h2 className="path-name">{formattedPathname}</h2>
    </section>
  );
};

export default Breadcrumb;
