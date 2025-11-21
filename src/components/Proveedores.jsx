import { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';

function Proveedores() {
  const [titulo, setTitulo] = useState('Gestión de Proveedores');

  const cambiarTitulo = () => {
    setTitulo(titulo === 'Gestión de Proveedores' 
      ? 'Listado de Proveedores' 
      : 'Gestión de Proveedores');
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>{titulo}</h2>
        </Card.Header>
        <Card.Body>
          <p>En este módulo puedes gestionar todos los proveedores de la empresa.</p>
          <Button variant="primary" onClick={cambiarTitulo}>
            Cambiar Título
          </Button>
          
          <div className="mt-4">
            <h5>Ejemplo de Proveedores:</h5>
            <ul>
              <li>Proveedor ABC - Materiales de oficina</li>
              <li>Proveedor XYZ - Equipos electrónicos</li>
              <li>Proveedor 123 - Servicios de limpieza</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Proveedores;
