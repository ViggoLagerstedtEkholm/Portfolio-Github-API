import React, { createContext } from 'react';
import { Container, Stack } from "react-bootstrap";

import useFetch from "./Components/useFetchAPI";
import Loading from "./Components/Loading";
import Repositories from "./Components/Repositories";
import Profile from "./Components/Profile";
import Courses from "./Components/Courses";
import NavigationBar from "./Components/NavigationBar";

import { IRepositories } from "./Components/Interfaces/RepositoryInterface";
import { IProfile } from "./Components/Interfaces/ProfileInterface";
import { ICourses } from "./Components/Interfaces/CoursesInterface";

interface Data{
    repositories: IRepositories[] | null,
    profile: IProfile | null,
    courses: ICourses[] | null;
}

export const GithubContext = createContext<Data | null>(null);

function App() {
    const [repositories, doneRepositoryFetch] = useFetch<IRepositories[]>("/github.json");
    const [profile, doneProfileFetch] = useFetch<IProfile>("/profile.json");
    const [courses, doneCourseFetch] = useFetch<ICourses[]>("/courses.json");

    const data = {
        repositories: repositories,
        profile: profile,
        courses: courses
    }

    if (!doneRepositoryFetch || !doneProfileFetch || !doneCourseFetch) {
        return <Loading/>
    }

    return (
        <GithubContext.Provider value={data}>
            <NavigationBar/>
            <Container className="vh-100 pb-3">
                <Stack>
                    <Profile/>
                    <Courses/>
                    <Repositories/>
                </Stack>
            </Container>
        </GithubContext.Provider>
    );
}

export default App;
