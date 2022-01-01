import {useEffect, useState} from "react";

function useFetchAPI<Payload>(
    URL: string
):[
    result: Payload | null,
    done: boolean
] {
    const [result, setResult] = useState<Payload | null>(null);
    const [done, setDone] = useState(false);

    useEffect(() =>{
        fetch(URL)
            .then((response) => response.json())
            .then((response) => {
                setResult(response);
                setDone(true);
            });
    }, [URL])

    return[result, done];
}

export default useFetchAPI;