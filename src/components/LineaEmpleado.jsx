import { Card, Button, Container, Row, Col } from "react-bootstrap"

const LineaEmpleado = () => {
    return (
        <div className="lineaEmpleado">
            <Card>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <Card.Img className="avatar" src="https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png" />
                        </Col>
                        <Col xs={6}>
                            <Card.Body>
                                <br></br>
                                <Card.Title className="fs-2">Nombre del Empleado</Card.Title>
                                <br></br>
                                <Card.Text className="fs-4">
                                    Cargo del empleado en la empresa  <span className="btn btn-info text-light"> Sector </span>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    );
};

export default LineaEmpleado;