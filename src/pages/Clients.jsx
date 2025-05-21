import useStore from "../store/useStore";

const Clients = () => {
  const users = useStore((state) => state.users);
  const removeUser = useStore((state) => state.removeUser);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este cliente?"
    );
    if (!confirmDelete) {
      return;
    }
    removeUser(id);
  };

  return (
    <main className="clients-container">
      <h2>Clientes</h2>
      <div className="clients-list">
        {users
          .filter((user) => user.role !== "admin")
          .map((user) => (
            <div key={user.id} className="client-card">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Rol: {user.role}</p>
              <button
                className="btn-outline"
                onClick={() => handleDelete(user.id)}
              >
                Eliminar Cliente
              </button>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Clients;
