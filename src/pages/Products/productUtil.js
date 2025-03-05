/*
This function adds a discount key to the object 
product with value as specified.
*/
export function addDiscountToProduct(product) {
    switch(product.category) {
        case "jewelery":
          product["discount"] = 10
          return product;
        case "men's clothing":
          product["discount"] = 30
          return product;
        default:
          return product;
      }
  }