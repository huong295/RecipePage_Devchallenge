import React from "react";

function Ingredients() {
  const styles = {
    container: "",
    title: "font-playfair font-bold text-[24px] py-4",
    nameIngredient: "font-playfair text-[14px] italic py-4",
    detailIngredient: "px-2 h-[25px] font-Montserrat text-[14px] font-thin",
  };
  const GrahamList = [
    "1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)",
    "5 Tablespoons (70g) unsalted butter, melted",
    "1/4 cup (50g) granulated sugar",
  ];
  const CheesesList = ["four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature", "1 cup (200g) granulated sugar", "1 cup (240g) full-fat sour cream, at room temperature","1 teaspoon pure vanilla extract", "2 teaspoons fresh lemon juice (optional, but recommended)", "3 large eggs, at room temperature", "topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes)"]
  return (
    <div className={styles.container}>
      <div className={styles.title}>Ingredients</div>
      <div className={styles.nameIngredient}>Graham Cracker Crust</div>
      <div>
        {GrahamList.map((item, index) => (
          <div key={index}>
            <input type="checkbox" />
            <label className={styles.detailIngredient}>{item}</label>
          </div>
        ))}

        <div className={styles.nameIngredient}>Cheesecake</div>
        <div>
          {CheesesList.map((item, index) => (
            <div key={index}>
              <input type="checkbox" />
              <label className={styles.detailIngredient}>{item}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
