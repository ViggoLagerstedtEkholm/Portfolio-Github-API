import {Badge, Card, Row, Image} from "react-bootstrap";
import {IRepositories} from "./Interfaces/RepositoryInterface";
import { VscGithubInverted } from "react-icons/vsc";

// @ts-ignore
import GitHub from '../Images/GitHub-Mark-Light-64px.png';

interface Props{
    repository: IRepositories
}

function Repository({repository} : Props){
    console.log(repository);
    return(
        <Card className="h-100 bg-secondary p-4 bg-opacity-50 text-white">
            <Card.Body>
                <Row>
                    <h4 className="text-center">{repository.name}</h4>
                </Row>

                <a href={repository.svn_url} target="_blank" rel="noopener noreferrer">
                    <Image src={GitHub} width={64} height={64} className="rounded mx-auto d-block my-2"/>
                </a>

                <Row>
                    <p>{repository.description}</p>
                </Row>

                <Row>
                    <h3 className="text-center">{repository.language}</h3>
                </Row>

                <Row className="justify-content-end end-100">
                    <p>
                        {repository.topics.map((value, index) =>{
                        return <Badge key={index} className="m-1">{value}</Badge>
                        })}
                    </p>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Repository;