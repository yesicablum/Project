function BookingsCard({ booking, handleDelete }) {
    return (
        <div className="booking-card">
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
    );
}

export default BookingsCard;
