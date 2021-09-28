import React from "react";
import styles from "./Description.module.css";

const Description = () => {
  return (
    <>
      <h3>React Meals: Clients- we're on your side!</h3>
      <div>
        Here at React Meals we aren't bland vanilla, we render services faster
        and more efficiently than you've ever had before. After one bite you'll
        realize that quality and speed are part are core components to our
        success. Want to get started making your own delicious meals like we do?
        Find out{" "}
        <a
          target="blank"
          href="https://reactjs.org/docs/create-a-new-react-app.html"
        >
          here
        </a>
        !
      </div>
    </>
  );
};

export default Description;
