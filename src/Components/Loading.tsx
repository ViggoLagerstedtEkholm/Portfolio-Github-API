import {Col, Container, Row, Spinner} from "react-bootstrap";

function Loading(){
    return(
        <Container fluid className="bg-light vh-100">
            <Row className="justify-content-center h-100 align-content-center">
                <Col md="auto" xl="auto" xs="auto"><Spinner animation="grow" variant="dark"/></Col>
            </Row>
        </Container>
    )
}

export default Loading;