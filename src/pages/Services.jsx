import { useState } from "react";
import useStore from "../store/useStore";

const Services = () => {
  const services = useStore((state) => state.services);
  const addBooking = useStore((state) => state.addBooking);
  const currentUser = useStore((state) => state.currentUser);
  const [selectedDates, setSelectedDates] = useState({});

  const handleDateChange = (serviceId, date) => {
    setSelectedDates((prev) => ({
      ...prev,
      [serviceId]: date,
    }));
  };

  const handleBooking = (service) => {
    const selectedDate = selectedDates[service.id];
    if (!selectedDate) {
      alert("Por favor selecciona una fecha para la reserva.");
      return;
    }
    const bookingId = Math.floor(Math.random() * 10000);
    const newBooking = {
      id: bookingId,
      userId: currentUser.id,
      bookingId: bookingId,
      service: service.name,
      date: selectedDate,
      time: new Date().toLocaleTimeString(),
      status: "Pending",
    };
    addBooking(newBooking);
    alert("Reserva realizada con éxito!");
  };

  return (
    <main className="services-container">
      <h2>Servicios Disponibles</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>Tipo: {service.type}</p>
            <p>Dirección: {service.address}</p>
            <p>Servicios ofrecidos:</p>
            <ul>
              {service.services.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
            <input
              type="date"
              value={selectedDates[service.id] || ""}
              onChange={(e) => handleDateChange(service.id, e.target.value)}
            />
            <button onClick={() => handleBooking(service)}>
              <span>Reservar</span>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
