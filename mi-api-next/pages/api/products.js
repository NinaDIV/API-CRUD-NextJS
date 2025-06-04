let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Teclado", price: 50 },
    { id: 4, name: "Monitor", price: 300 },
  ];
  
  export default function handler(req, res) {
    const { method, query } = req;
  
    // Manejo de la solicitud GET
    if (method === "GET") {
      let filteredProducts = products;
  
      // Obtener los parámetros de la consulta
      const minPrice = parseFloat(query.minPrice);
      const maxPrice = parseFloat(query.maxPrice);
      const name = query.name;
  
      // Filtrar por precio mínimo
      if (!isNaN(minPrice)) {
        filteredProducts = filteredProducts.filter((p) => p.price >= minPrice);
      }
  
      // Filtrar por precio máximo
      if (!isNaN(maxPrice)) {
        filteredProducts = filteredProducts.filter((p) => p.price <= maxPrice);
      }
  
      // Filtrar por nombre (case insensitive)
      if (name) {
        filteredProducts = filteredProducts.filter((p) =>
          p.name.toLowerCase().includes(name.toLowerCase())
        );
      }
  
      // Responder con los productos filtrados
      return res.status(200).json(filteredProducts);
    }
  
    // Manejo de la solicitud POST
    if (method === "POST") {
      const { name, price } = req.body;
  
      if (!name || isNaN(price)) {
        return res.status(400).json({ message: "Faltan parámetros o el precio no es válido" });
      }
  
      const newProduct = {
        id: products.length + 1, // Genera un ID único
        name,
        price: parseFloat(price),
      };
  
      products.push(newProduct);
  
      return res.status(201).json(newProduct);
    }
  
    // Si el método no es ni GET ni POST
    res.status(405).json({ message: "Método no permitido" });
  }
  