import { useState } from "react";
import useStore from "../store/useStore";

const AdminServices = () => {
  const services = useStore((state) => state.services);
  const addService = useStore((state) => state.addService);
  const removeService = useStore((state) => state.removeService);

  // Form state
  const [form, setForm] = useState({
    type: "",
    name: "",
    address: "",
    services: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a new id (simple example)
    const newId =
      services.length > 0 ? Math.max(...services.map((s) => s.id)) + 1 : 1;
    addService({
      id: newId,
      type: form.type,
      name: form.name,
      address: form.address,
      services: form.services
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s),
    });
    setForm({ type: "", name: "", address: "", services: "" });
  };

  return (
    <main className="admin-services-container">
      <h2>Servicios</h2>
      <form className="admin-service-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          placeholder="Tipo"
          value={form.type}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="services"
          placeholder="Servicios (separados por coma)"
          value={form.services}
          onChange={handleChange}
          required
        />
        <button className="btn-filled" type="submit">
          Agregar Servicio
        </button>
      </form>
      <div className="admin-services-list">
        {services.map((service) => (
          <div key={service.id} className="admin-service-card">
            <h3>{service.name}</h3>
            <p>Tipo: {service.type}</p>
            <p>Dirección: {service.address}</p>
            <p>
              Servicios:{" "}
              {Array.isArray(service.services)
                ? service.services.join(", ")
                : ""}
            </p>
            <button
              className="btn-outline"
              onClick={() => removeService(service.id)}
            >
              Eliminar Servicio
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminServices;
