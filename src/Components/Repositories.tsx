import React, { useContext } from "react";
import { GithubContext } from "../App";
import { Col, Row } from "react-bootstrap";
import Repository from "./Repository";

function Repositories(){
    const Data = useContext(GithubContext);

    return(
        <Row className="bg-secondary bg-opacity-10 pb-3 mb-3">
            <h2 className="text-center text-white mt-3">Repositories</h2>
            {Data!.repositories!.map((repository, index) =>{
                return <Col xl={3} xs={12} md={4} lg={3} key={index} className="mt-4">
                    <Repository repository={repository}/>
                </Col>
            })}
        </Row>
    )
}

export default Repositories;