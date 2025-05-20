export const UserData = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan@mail.com",
    password: "123456",
    role: "client",
  },
  {
    id: 2,
    name: "Ana Gómez",
    email: "ana@mail.com",
    password: "123456",
    role: "client",
  },
  {
    id: 3,
    name: "Admin User",
    email: "admin@mail.com",
    password: "admin",
    role: "admin",
  },
];

export const ServicesData = [
  {
    id: 1,
    type: "barbería",
    name: "Barbería El Corte",
    address: "Calle 123, Ciudad",
    services: ["Corte de cabello", "Afeitado", "Arreglo de barba"],
  },
  {
    id: 2,
    type: "hotel",
    name: "Hotel Central",
    address: "Avenida Principal 456, Ciudad",
    services: ["Habitación simple", "Habitación doble", "Suite"],
  },
  {
    id: 3,
    type: "negocio",
    name: "Oficina Coworking",
    address: "Calle Negocios 789, Ciudad",
    services: ["Sala de reuniones", "Espacio de trabajo", "Oficina privada"],
  },
  {
    id: 4,
    type: "restaurante",
    name: "Restaurante La Buena Mesa",
    address: "Boulevard Gastronómico 101, Ciudad",
    services: ["Mesa para 2", "Mesa para 4", "Salón privado"],
  },
  {
    id: 5,
    type: "clínica",
    name: "Clínica Salud Total",
    address: "Avenida Salud 202, Ciudad",
    services: ["Consulta general", "Pediatría", "Odontología"],
  },
  {
    id: 6,
    type: "peluquería",
    name: "Peluquería Estilo",
    address: "Calle Belleza 303, Ciudad",
    services: ["Corte de cabello", "Peinado", "Coloración"],
  },
];

export const Bookings = [
  {
    id: 1,
    userId: 1,
    bookingId: 1,
    date: "2023-10-01",
    time: "10:00",
    service: "Corte de cabello",
    status: "confirmed",
  },
  {
    id: 2,
    userId: 2,
    bookingId: 2,
    date: "2023-10-02",
    time: "11:00",
    service: "Habitación simple",
    status: "pending",
  },
];
