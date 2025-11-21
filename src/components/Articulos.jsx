import { Container, Card, Table } from 'react-bootstrap';

function Articulos() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>Gestión de Artículos</h2>
        </Card.Header>
        <Card.Body>
          <p>Administra el catálogo de artículos disponibles.</p>
          
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Laptop HP</td>
                <td>$850.00</td>
                <td>15</td>
              </tr>
              <tr>
                <td>002</td>
                <td>Mouse Inalámbrico</td>
                <td>$25.00</td>
                <td>50</td>
              </tr>
              <tr>
                <td>003</td>
                <td>Teclado Mecánico</td>
                <td>$75.00</td>
                <td>30</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Articulos;
