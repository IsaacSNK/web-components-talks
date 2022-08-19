import React, { useState } from "react";
import { Clock } from "./components/Clock";
import { StarWarsCharacters } from "./components/StarWarsCharacters";
import { fetchStarWarsCharacters } from "./services/StarWarsApiClient";

export function App() {
    const [ data, setData ] = useState([]);

    const fetchData = async () => {
        const data = await fetchStarWarsCharacters();
        setData(data.results);
    };

    React.useEffect(() => {
        fetchData();
    }, [])

    return (<>
        <h1>Star Wars Characters in React</h1>
        <Clock></Clock>
        <StarWarsCharacters data={data}></StarWarsCharacters>
    </>);
}