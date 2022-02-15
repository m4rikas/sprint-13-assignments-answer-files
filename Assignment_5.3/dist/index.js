"use strict";
const priceCheck = (product, category) => {
    const cost = (product.price * category.sale_amount).toFixed(2);
    const saleMessage = `Your ${product.name} is on sale for $${cost}!`;
    const wrongCategory = `Your product '${product.name}' has a mismatched category`;
    return product.category_id == category.id ? saleMessage : wrongCategory;
};
const stringCheese = {
    id: 1,
    name: 'String Cheese',
    price: 0.25,
    category_id: 1
};
const dairy = {
    id: 1,
    name: 'Dairy',
    sale_amount: 0.5
};
const forks = {
    id: 234,
    name: 'Forks',
    price: 5.35,
    category_id: 2
};
const silverware = {
    id: 2,
    name: 'Silverware',
    sale_amount: 0.25
};
console.log(priceCheck(stringCheese, dairy));
console.log(priceCheck(stringCheese, silverware));
console.log(priceCheck(forks, dairy));
console.log(priceCheck(forks, silverware));
