const shortenText = (text) => text.split(" ").slice(0, 3).join("");

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

const createQueryObject = (productrentQuery, newQuery) => {
  if (newQuery.category === "all") {
    //delete category from query in url if category is all
    const { category, ...rest } = productrentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    ///delete search from quey in url if search is empty
    const { search, ...rest } = productrentQuery;
    return rest;
  }
  return { ...productrentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumPrice = (products) => {
  return products
    .reduce((counter, product) => counter + product.price * product.quantity, 0)
    .toFixed(2); //price of each product
};
const sumQuantity = (products) => {
  return products.reduce((counter, product) => counter + product.quantity, 0);
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumPrice,
  sumQuantity,
  productQuantity,
};
