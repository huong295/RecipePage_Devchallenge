import "./App.css";
import { Component } from "react";
import Header from "./components/Header.js";
import DetailRecipe from "./components/DetailRecipe";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions.js";
import Footer from "./components/Footer.js";
function App() {
  const styles = {
    contentFirst: "md:hidden",
    contentSecondary: "hidden md:block",
  };
  return (
    <div className="px-2 md:px-56">
      <Header />
      <div className="md:flex justify-around">
        <div className={styles.contentFirst}>
          <DetailRecipe />
        </div>
        <div className={styles.details}>
          <Ingredients />
          <Instructions />
        </div>
        <div className={styles.contentSecondary}>
          <DetailRecipe />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
