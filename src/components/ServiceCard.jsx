function ServiceCard({ handleBooking, selectedDates, handleDateChange, service }) {
    const { id, name, type, address, services } = service;
    return (
        <div className="service-card">
            <h3>{name}</h3>
            <p>Tipo: {type}</p>
            <p>Dirección: {address}</p>
            <p>Servicios ofrecidos:</p>
            <ul>
                {services.map((s, idx) => (
                    <li key={idx}>{s}</li>
                ))}
            </ul>
            <input
                type="date"
                value={selectedDates || ""}
                onChange={(e) => handleDateChange(id, e.target.value)}
            />
            <button onClick={() => handleBooking(service)}>
                <span>Reservar</span>
            </button>
        </div>
    );
}

export default ServiceCard
