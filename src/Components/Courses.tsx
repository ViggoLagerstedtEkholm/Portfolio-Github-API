import { Row, Table } from "react-bootstrap";
import React, { useContext, useMemo } from "react";
import { GithubContext } from "../App";

function Courses(){
    const Data = useContext(GithubContext);

    const totalCredits = useMemo(() => getTotalCredits(), [Data?.courses]);

    function getTotalCredits(){
        let total = 0;

        Data?.courses!.map((value) =>{
            total += value.Credits;
        })

        return total;
    }

    return(
        <Row className="mt-2">
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>COURSE</th>
                    <th>CREDITS</th>
                    <th>UNIVERSITY</th>
                    <th>COURSE CODE</th>
                    <th>GRADE</th>
                    <th>MAX GRADE</th>
                </tr>
                </thead>
                <tbody>
                {
                    Data?.courses!.map((value, index) =>{
                        return (
                            <tr key={index}>
                            <td>{value.Course}</td>
                            <td>{value.Credits}</td>
                            <td>{value.University}</td>
                            <td>{value.CourseCode}</td>
                            <td>{value.Grade}</td>
                            <td>{value.MAX_Grade}</td>
                        </tr>
                        )
                    })
                }
                </tbody>
                <tfoot>
                <tr>
                    <td>Total Credits</td>
                    <td colSpan={5}>{totalCredits}</td>
                </tr>
                </tfoot>
            </Table>
        </Row>
    )
}

export default Courses;