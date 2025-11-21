import { Container, Card, Table, Badge } from 'react-bootstrap';

function Ventas() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>Registro de Ventas</h2>
        </Card.Header>
        <Card.Body>
          <p>Visualiza y administra las ventas realizadas.</p>
          
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Nº Venta</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>V-001</td>
                <td>Juan Pérez</td>
                <td>20/11/2025</td>
                <td>$850.00</td>
                <td><Badge bg="success">Completada</Badge></td>
              </tr>
              <tr>
                <td>V-002</td>
                <td>María García</td>
                <td>21/11/2025</td>
                <td>$100.00</td>
                <td><Badge bg="warning">Pendiente</Badge></td>
              </tr>
              <tr>
                <td>V-003</td>
                <td>Carlos López</td>
                <td>21/11/2025</td>
                <td>$225.00</td>
                <td><Badge bg="success">Completada</Badge></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Ventas;
