import useStore from "../store/useStore";
import BookingsCard from "../components/BookingsCard";



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
          <BookingsCard 
            key={booking.id} 
            booking={booking} 
            handleDelete={handleDelete} 
          />
        ))}
      </div>
    </main>
  );
};

export default Bookings;
