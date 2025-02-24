import React from "react";
import Card from "./components/Card";
import "./CardContainer.css";
const CardContainer = () => {
  return (
    <div className="cards-container">
      <Card
        image="./src/assets/illustration1.png"
        title="Search engine optimization"
        backgroundColor="#F3F3F3"
        textbackgroundColor={" #B9FF66"}
      />
      <Card
        backgroundColor="#B9FF66"
        title={"Pay-per-click ads"}
        image={"./src/assets/illustration2.png"}
        textbackgroundColor={"white"}
      />
      <Card
        backgroundColor="#191A23"
        title={"Social Media Marketing"}
        image={"./src/assets/illustration3.png"}
        textbackgroundColor={"#F3F3F3"}
      />
      <Card
        backgroundColor="#F3F3F3"
        title={"Email Marketing"}
        image={"./src/assets/illustration4.png"}
        textbackgroundColor={"#B9FF66"}
      />
    </div>
  );
};
export default CardContainer;
