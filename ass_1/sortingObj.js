let products = [
    { name: "John",price: 26  },
    { name: "Alice", price: 30 },
    { name: "Bob", price: 29 },
    {name: "Steve",price: 35 }
  ];
  console.log("Original Products are:")

  let sortedProducts = products.sort(
      (p1, p2) => p1.age - p2.age);
  
  console.log("Products sorted based on descending order of their prices are:")
  console.table(products);