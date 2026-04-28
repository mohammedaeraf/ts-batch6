interface Product {
  title: string;
  price: number;
  description?: string;
}

let product: Product = {
  title: "Dell Inspiron 15.6 i5Core Laptop",
  price: 55000,
  description: "Windows 11, 1 TB Hard Drive, 16 GB Ram",
};

let product2:Product = {
    title: "Wired Mouse",
    price: 500
}

console.log(product.title);
