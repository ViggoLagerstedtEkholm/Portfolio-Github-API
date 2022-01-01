import React, { createContext } from 'react';
import useFetch from "./Components/useFetchAPI";
import { Container, Row } from "react-bootstrap";
import Loading from "./Components/Loading";
import Repositories from "./Components/Repositories";
import Profile from "./Components/Profile";
import {IRepositories} from "./Components/Interfaces/RepositoryInterface";
import {IProfile} from "./Components/Interfaces/ProfileInterface";

interface Data{
    repositories: IRepositories[] | null,
    profile: IProfile | null
}

export const GithubContext = createContext<Data | null>(null);

function App() {
    const [repositories, doneRepositoryFetch] = useFetch<IRepositories[]>("/github.json");
    const [profile, doneProfileFetch] = useFetch<IProfile>("/profile.json");

    const data = {
        repositories: repositories,
        profile: profile
    }

    if (!doneRepositoryFetch || !doneProfileFetch) {
        return <Loading/>
    }

    return (
        <GithubContext.Provider value={data}>
            <Container className="vh-100">
                <Row className="mb-3 w-100 mt-3">
                    <Profile/>
                </Row>
                <Row>
                    <Repositories/>
                </Row>
            </Container>
        </GithubContext.Provider>
    );
}

export default App;
