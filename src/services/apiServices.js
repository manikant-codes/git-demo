export function getAllProducts(sort) {
  return fetch(`https://fakestoreapi.com/products?sort=${sort}`).then(
    (response) => {
      return response.json();
    }
  );
}

export function getSingleProduct(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((response) => {
    return response.json();
  });
}

export function getAllCategories() {
  return fetch(`https://fakestoreapi.com/products/categories`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

export function getProductsOfCategory(category) {
  return fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
