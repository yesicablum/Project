import useStore from "../store/useStore";

const Bookings = () => {
  const bookings = useStore((state) => state.bookings);
  const removeBooking = useStore((state) => state.removeBooking);
  const currentUser = useStore((state) => state.currentUser);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas cancelar esta reserva?"
    );
    if (!confirmDelete) {
      return;
    }
    removeBooking(id);
  };

  const userBookings = bookings.filter(
    (booking) => booking.userId === currentUser?.id
  );

  return (
    <main className="bookings-container">
      <h2>Mis Reservas</h2>
      <div className="bookings-list">
        {userBookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <h3>Reserva #{booking.bookingId}</h3>
            <p>Servicio: {booking.service}</p>
            <p>Fecha: {booking.date}</p>
            <p>Hora: {booking.time}</p>
            <p>Estado: {booking.status}</p>
            <button
              className="btn-outline"
              onClick={() => handleDelete(booking.id)}
            >
              Cancelar Reserva
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Bookings;
