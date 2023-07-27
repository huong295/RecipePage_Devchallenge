import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
function DetailRecipe() {
  const styles = {
    container: "px-4 py-4 w-full",
    yields: "flex",
    prepTime: "flex",
    wrapper: "justify-between flex py-2 md:flex-col",

    cookTime: "flex",
    totalTime: "flex",
    name: "font-Montserrat text-[8px] color-priority md: my-1",
    detail: "color-priority font-Montserrat font-light text-[10px] my-1",
  };

  return (
    <div className={styles.container}>
      <div className={styles.yields}>
        <GiKnifeFork />
        <div className="px-2">
          <div className={styles.name}>YIELD</div>
          <div className={styles.detail}>12servings</div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.prepTime}>
          <BsClock />
          <div className="px-2">
            <div className={styles.name}>PREP-TIME</div>
            <div className={styles.detail}>45minutes</div>
          </div>
        </div>
        <div className={styles.cookTime}>
          <BsClock />
          <div className="px-2">
            <div className={styles.name}>COOK-TIME</div>
            <div className={styles.detail}>1hour</div>
          </div>
        </div>

        <div className={styles.totalTime}>
          <BsClock />
          <div className="px-2">
            <div className={styles.name}>TOTAL-TIME</div>
            <div className={styles.detail}>7.75hours</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailRecipe;
