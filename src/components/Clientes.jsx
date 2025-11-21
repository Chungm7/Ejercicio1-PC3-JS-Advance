import { Container, Card, ListGroup } from 'react-bootstrap';

function Clientes() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>Gestión de Clientes</h2>
        </Card.Header>
        <Card.Body>
          <p>Administra la base de datos de clientes de la empresa.</p>
          
          <ListGroup className="mt-3">
            <ListGroup.Item>
              <strong>Juan Pérez</strong> - juan.perez@email.com - Tel: 555-1234
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>María García</strong> - maria.garcia@email.com - Tel: 555-5678
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Carlos López</strong> - carlos.lopez@email.com - Tel: 555-9012
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Ana Martínez</strong> - ana.martinez@email.com - Tel: 555-3456
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Clientes;
