import "./ProductCategory.scss";
import { capitalizeFirstLetter } from "@/utils";

function CategoryItem({ item, selectedCategory, handleCategoryChange }) {
  return (
    <div className={"ProductCategory-item " + (selectedCategory == item ? "ProductCategory-selected": "")}
      onClick={() => handleCategoryChange(item)}>
      {capitalizeFirstLetter(item)}
    </div>
  );
}

function ProductCategory({ categories = [], selectedCategory, handleCategoryChange }) {
  return (
    <div className="ProductCategory">
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <div className={"ProductCategory-title " + (selectedCategory == "" ? "ProductCategory-selected": "")}
              onClick={() => handleCategoryChange("")}>
              {" "}
              {capitalizeFirstLetter(category?.name)}
            </div>
            {category?.children?.length > 0 &&
              category?.children?.map((item) => {
                return <CategoryItem key={item} item={item} selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}/>;
              })}
          </div>
        );
      })}
    </div>
  );
}

export default ProductCategory;
