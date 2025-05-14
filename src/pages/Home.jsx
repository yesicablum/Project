import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Home() {
    return (
        <div className="container">
            <Header />

            <main>
                <h2 className="title">Sistema de Gestión de Reservas</h2>
                <p className="subtitle">
                    Plataforma web para la gestión de citas y reservas para todo tipo de negocios como barberías, clínicas, coworkings y más.
                </p>

                

                <section className="cards">
                    <Card
                        title="Para Clientes"
                        items={[
                            'Reserva citas fácilmente',
                            'Consulta disponibilidad en tiempo real',
                            'Administra tus reservas existentes',
                            'Historial completo de servicios',
                        ]}
                    />
                    <Card
                        title="Para Administradores"
                        items={[
                            'Gestión de horarios y servicios',
                            'Aprobación de solicitudes',
                            'Panel administrativo completo',
                            'Reportes de uso y actividad',
                        ]}
                    />
                    <Card
                        title="Beneficios"
                        items={[
                            'Evita conflictos de horarios',
                            'Mejora la experiencia del cliente',
                            'Optimiza la gestión del tiempo',
                            'Aumenta la eficiencia operativa',
                        ]}
                    />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
