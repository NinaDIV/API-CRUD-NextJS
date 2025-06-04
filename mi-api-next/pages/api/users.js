let users = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com", age: 25 },
    { id: 2, name: "María López", email: "maria@example.com", age: 30 },
  ];
  
  export default function handler(req, res) {
    const { method } = req;
  
    // GET: Listar todos los usuarios
    if (method === "GET") {
      return res.status(200).json(users);
    }
  
   // POST: Agregar un nuevo usuario
if (method === "POST") {
    const { name, email, age } = req.body;
  
    // Validar campos requeridos
    if (!name || !email || !age) {
      return res.status(400).json({ message: "Todos los campos (name, email, age) son requeridos." });
    }
  
    // Validar edad como número entero positivo
    if (!Number.isInteger(age) || age <= 0) {
      return res.status(400).json({ message: "La edad debe ser un número entero positivo." });
    }
  
    // Validar email único
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      return res.status(409).json({ message: "El email ya está registrado." });
    }
  
    // Crear el nuevo usuario
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name,
      email,
      age
    };
  
    users.push(newUser);
    return res.status(201).json(newUser);
  }
  
  
    // PUT: Actualizar un usuario por su ID
    if (method === "PUT") {
      const { id, name, email, age } = req.body;
      const user = users.find((u) => u.id === parseInt(id));
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      if (name) user.name = name;
      if (email) user.email = email;
      if (age) user.age = age;
      return res.status(200).json(user);
    }
  
    // DELETE: Eliminar un usuario por su ID
    if (method === "DELETE") {
      const { id } = req.body;
      users = users.filter((u) => u.id !== parseInt(id));
      return res.status(200).json({ message: "Usuario eliminado" });
    }
  
    // Si el método no es ninguno de los anteriores
    res.status(405).json({ message: "Método no permitido" });
  }
  