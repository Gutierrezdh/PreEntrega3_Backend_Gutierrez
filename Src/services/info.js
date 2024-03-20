const addProductErrorInfo = (product) => {
    return `Can´t add new product.
    required properties:
      * title: needs to be a string, received ${product.title}
      * description: needs to be a string, received ${product.description}
      * price: needs to be a number, received ${product.price};
      * code: needs to be a string, received ${product.code};
      * stock: needs to be a number, received ${product.stock}`;
};

const addProductToCartErrorInfo = (cart) => {
    return `Can´t add product to the cart.
    required properties:
      * cartId: needs to be a string, received ${cart.cartId}
      * productId: needs to be a string, received ${cart.pid}
      * quantity: needs to be a number, received ${cart.quantity}`;
};

module.exports = { addProductErrorInfo, addProductToCartErrorInfo };
