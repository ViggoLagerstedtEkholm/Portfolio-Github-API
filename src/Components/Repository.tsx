import {Badge, Card, Row, Image, Button} from "react-bootstrap";
import {IRepositories} from "./Interfaces/RepositoryInterface";

// @ts-ignore
import GitHub from '../Images/GitHub-Mark-Light-64px.png';

import { AiFillPushpin } from "react-icons/ai";

interface Props{
    repository: IRepositories
}

function Repository({repository} : Props){
    return(
        <Card className="h-100 bg-secondary p-1 bg-opacity-50 text-white">
            <Card.Header>
                <Row>
                    <h4 className="text-center">{repository.name}</h4>
                </Row>
            </Card.Header>
            <Card.Body>
                <a href={repository.svn_url} target="_blank" rel="noopener noreferrer">
                    <Image src={GitHub} width={64} height={64} className="rounded mx-auto d-block mb-3 my-1"/>
                </a>

                <Row className="">
                    <p>{repository.description}</p>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <h5 className="text-center py-2">{repository.language}</h5>
                </Row>
                <Row>
                    <p className="text-center py-2"><span className="text-info">{new Date(repository.created_at).toString()}</span></p>
                </Row>
                <Row className="bg-secondary bg-opacity-25 rounded">
                    <p className="mt-1 text-center p-2">
                        <AiFillPushpin/>
                    </p>

                    <p>
                        {repository.topics.map((value, index) =>{
                            return <Badge key={index} className="m-1">{value}</Badge>
                        })}
                    </p>
                </Row>
                <Row>
                    <Button href={repository.svn_url} className="mt-2">Repository</Button>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default Repository;