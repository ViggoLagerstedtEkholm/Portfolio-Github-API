import {Col, Container, Row, Spinner} from "react-bootstrap";

function Loading(){
    return(
        <Container fluid className="bg-light vh-100">
            <Row className="justify-content-md-center h-100 align-content-md-center">
                <Col md="auto"><Spinner animation="grow" variant="dark"/></Col>
            </Row>
        </Container>
    )
}

export default Loading;