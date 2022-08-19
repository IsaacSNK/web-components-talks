import { SingleStarWarsCharacter } from "../SingleStarWarsCharacter";

export function StarWarsCharacters(props) {
    const dataArray = props.data ?? [];
    return (<>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Birth Date</th>
                </tr>
            </thead>
            <tbody>
                { dataArray.map((character, index) => <SingleStarWarsCharacter key={index} characterData={character}></SingleStarWarsCharacter>) }
            </tbody>
        </table>
    </>);
};