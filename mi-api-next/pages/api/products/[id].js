let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Teclado", price: 50 },
  ];
  
  export default function handler(req, res) {
    const { id } = req.query; // Extraer el ID desde la URL
    
    if (req.method === "DELETE") {
      // Convertimos el ID a entero
      const productId = parseInt(id);
      
      // Comprobamos si el ID es válido
      if (isNaN(productId)) {
        return res.status(400).json({ message: "ID no válido" });
      }
  
      // Filtramos el array de productos
      const productIndex = products.findIndex((product) => product.id === productId);
  
      if (productIndex === -1) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
  
      // Eliminamos el producto encontrado
      products.splice(productIndex, 1);
      
      return res.status(200).json({ message: "Producto eliminado" });
    }
  
    // Si el método no es DELETE
    res.status(405).json({ message: "Método no permitido" });
  }
  