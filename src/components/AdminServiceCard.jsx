function AdminServiceCard({ service, removeService }) {
    const { id, name, type, address, services } = service;

    return (
        <div className="admin-service-card">
            <h3>{name}</h3>
            <p>Tipo: {type}</p>
            <p>Dirección: {address}</p>
            <p>
                Servicios: {Array.isArray(services) ? services.join(", ") : ""}
            </p>
            <button className="btn-outline" onClick={() => removeService(id)}>
                Eliminar Servicio
            </button>
        </div>
    );
}

export default AdminServiceCard;
