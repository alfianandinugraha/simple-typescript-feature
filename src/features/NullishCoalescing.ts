type Product = {
  name: string;
  price: number;
  size?: string;
};

const product: Product = {
  name: "Asus",
  price: 3000000,
};

function printProduct(product: Product) {
  console.log(
    `Name: ${product.name}, Price: ${product.price}, Size: ${
      product.size ?? "not found"
    }`
  );
}

printProduct(product); // "Name: Asus, Price: 3000000, Size: not found"
printProduct({
  name: "Lenovo",
  price: 2500000,
  size: "XL",
}); // Name: Lenovo, Price: 2500000, Size: XL
