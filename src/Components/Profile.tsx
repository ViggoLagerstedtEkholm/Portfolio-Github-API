import {Card, Col, Image, Row, Stack} from "react-bootstrap";
import {useContext} from "react";
import {GithubContext} from "../App";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi";
import { VscGithubInverted } from "react-icons/vsc";

function Profile(){
    const Data = useContext(GithubContext);

    return(
        <Card className="bg-secondary bg-opacity-10 text-white">
            <Card.Body>
                <Row>
                    <Col xl={2} xs={2} md={2} lg={2} className="border-end">
                        <Image src={Data?.profile?.avatar_url} fluid roundedCircle/>
                    </Col>
                    <Col xl={8} xs={10} md={8} lg={8} className="border-end">
                        <h2>I'm {Data?.profile?.name}</h2>
                        <p>{Data?.profile?.bio}</p>
                    </Col>
                    <Col xl={2} xs={12} md={2} lg={2}>
                        <Stack>
                            <span><HiOutlineLocationMarker/> {Data?.profile?.location}</span>
                            <span><HiBookOpen/> Public Repositories - {Data?.profile?.public_repos}</span>
                            <span><VscGithubInverted/> - <a href={Data?.profile?.html_url}>GitHub</a></span>
                        </Stack>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Profile;