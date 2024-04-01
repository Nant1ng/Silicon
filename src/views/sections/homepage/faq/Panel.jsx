import { useState } from "react";

const Panel = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className="panel-open" onClick={() => setIsOpen(!isOpen)}>
          <div className="panel-header">
            <p className="panel-title">{title}</p>
            <div className="more">
              <span className="icon-wrapper-open">
                <img
                  src="./icons/ChevronUpWhite.svg"
                  alt="Arrow pointing down"
                  className="icon"
                />
              </span>
            </div>
          </div>
          <div className="panel-description">
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div className="panel" onClick={() => setIsOpen(!isOpen)}>
          <p className="panel-title">{title}</p>
          <div className="more">
            <span className="icon-wrapper">
              <img
                src="./icons/ChevronDown.svg"
                alt="Arrow pointing down"
                className="icon"
              />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Panel;
