import React from "react";

import AppFeatureMobile from "../../../../assets/images/App-feature-mobile.svg";
import CreditCard from "../../../../assets/icons/CreditCard.svg";
import Shield from "../../../../assets/icons/Shield.svg";
import BarsGraphic from "../../../../assets/icons/BarsGraphic.svg";
import Communication from "../../../../assets/icons/Communication.svg";
import Wallet from "../../../../assets/icons/Wallet.svg";
import Happy from "../../../../assets/icons/Happy.svg";
import AppFeatureCard from "./AppFeatureCard";

const features = [
  {
    icon: { CreditCard },
    title: "Easy Payments",
    description:
      "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
  },
  {
    icon: { Shield },
    title: "Data Security",
    description:
      "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.",
  },
  {
    icon: { BarsGraphic },
    title: "Cost Statistics",
    description:
      "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.",
  },
  {
    icon: { Communication },
    title: "Support 24/7",
    description:
      "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.",
  },
  {
    icon: { Wallet },
    title: "Regular Cashback",
    description:
      "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.",
  },
  {
    icon: { Happy },
    title: "Top Standards",
    description:
      "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.",
  },
];

const AppFeatures = () => {
  return (
    <section className="app-feature">
      <div className="image-container">
        <img src={AppFeatureMobile} alt="Mobile" />
      </div>
      <div className="details">
        <h2>App Features</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
          volutpat ligula est. Mattis fermentum, at nec lacus.
        </p>
        <div className="content">
          {features.map((feature, idx) => (
            <AppFeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
