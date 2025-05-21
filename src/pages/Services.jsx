import { useState } from "react";
import useStore from "../store/useStore";
import ServiceCard from "../components/ServiceCard";
import "../App.css";

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
          <ServiceCard 
            key={service.id} 
            service={service} 
            handleBooking={handleBooking}
            handleDateChange={handleDateChange}
            selectedDate={selectedDates[service.id]} 
          />
        ))}
      </div>
    </main>
  );
};

export default Services;
