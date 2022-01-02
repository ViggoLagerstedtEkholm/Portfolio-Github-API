import { Image, Row, Stack } from "react-bootstrap";
import React, { useContext } from "react";
import { GithubContext } from "../App";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi";
import { VscGithubInverted } from "react-icons/vsc";

function Profile(){
    const Data = useContext(GithubContext);

    return(
        <Row className="mt-4 text-white mb-3">
            <Stack>
                <Image src={Data?.profile?.avatar_url} width={300} height={300} fluid roundedCircle/>
                <h2 className="mt-3">I'm {Data?.profile?.name}</h2>
                <p>{Data?.profile?.bio}</p>
                    <span><HiOutlineLocationMarker/> {Data?.profile?.location}</span>
                    <span><HiBookOpen/> Public Repositories - {Data?.profile?.public_repos}</span>
                    <span><VscGithubInverted/> - <a href={Data?.profile?.html_url} className="text-white">GitHub</a></span>
            </Stack>
        </Row>
    )
}

export default Profile;