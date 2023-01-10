import ProductCard from "../components/ProductCard";
import products from "../clothes.json";
import CategoriesRadio from "../components/CategoriesRadio";
import { useState } from "react";

const Shop = () => {
  //Handle the categories filtering logic
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = Array.from(new Set(products.map((item) => item.category)));
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <>
      <CategoriesRadio
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <div className="pt-8 flex flex-wrap gap-1 justify-center content-center">
        {products &&
          filteredProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
              />
            );
          })}
      </div>
    </>
  );
};

export default Shop;
