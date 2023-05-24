import { Card, Button, Container, Row, Col } from "react-bootstrap"

const LineaEmpleado = ({empleado}) => {
    return (
        <div className="lineaEmpleado">
            <Card>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <Card.Img src={empleado.pic} />
                        </Col>
                        <Col xs={6}>
                            <Card.Body>
                                <br></br>
                                <Card.Title className="fs-2">{empleado.fullName}</Card.Title>
                                <br></br>
                                <Card.Text className="fs-4">
                                    {empleado.title}  <span className="btn btn-info text-light"> {empleado.department} </span>
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