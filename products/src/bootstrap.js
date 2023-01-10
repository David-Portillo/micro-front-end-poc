import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

// Context/Situation #1
// we are running this file in development in isolation
// we are using our local index.html file
// which definitely has an element with an id of dev-products
// we want to immediately render our app into that element

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // assuming our container does not have an element
  // with id 'dev-products'
  if (el) {
    mount(el); // most like we are running in isolation
  }
}

// Context/Situation #2
// we are running this file in development or production
// through the container app
// no guarantee that an element with an id of dev-products exists
// we don't want to try to immediately render the app

export { mount };
