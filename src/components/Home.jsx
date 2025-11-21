import { Container, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>Bienvenido al Sistema de Gestión</h2>
        </Card.Header>
        <Card.Body>
          <p className="lead">
            Este es un sistema integral para la administración de tu negocio.
          </p>
          <hr />
          <h5>Módulos disponibles:</h5>
          <ul>
            <li><strong>Proveedores:</strong> Gestiona tus proveedores y sus datos de contacto.</li>
            <li><strong>Artículos:</strong> Administra el catálogo de productos disponibles.</li>
            <li><strong>Clientes:</strong> Mantén actualizada la base de datos de clientes.</li>
            <li><strong>Ventas:</strong> Registra y visualiza todas las transacciones.</li>
          </ul>
          <p className="text-muted mt-3">
            Utiliza el menú de navegación superior para acceder a cada módulo.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
