import React from "react";
import { Link } from "react-router-dom";
import Panel from "./Panel";

const faqs = [
  {
    title: "Is any of my personal information stored in the App?",
    description:
      "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
  },
  {
    title: "What formats can I download my transaction history in?",
    description:
      "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
  },
  {
    title: "Can I schedule future transfers?",
    description:
      "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
  },
  {
    title: "When can I use Banking App services? ",
    description:
      "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
  },
  {
    title: "Can I create my own password that is easy for me to remember?",
    description:
      "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
  },
  {
    title: "What happens if I forgot or lose my password?",
    description:
      "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
  },
];

const FAQ = () => {
  return (
    <section id="faq">
      <div className="faq-container">
        <div className="questions">
          <h2>Any questions? Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get in touch?</p>
          <div className="card-container">
            <div className="card">
              <img src="./icons/Phone.svg" alt="Phone icon" className="card-icon"/>
              <p>Still have questions?</p>
              <Link>
                Contact us{" "}
                <img src="./icons/ArrowBlue.svg" alt="Blue arrow icon" />
              </Link>
            </div>
            <div className="card">
              <img src="./icons/Message.svg" alt="Message icon" className="card-icon" />
              <p>Don't like phone calls?</p>
              <Link>
                Contact us{" "}
                <img src="./icons/ArrowGreen.svg" alt="Green arrow icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="accordion">
          {faqs.map((faq, idx) => (
            <Panel key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
