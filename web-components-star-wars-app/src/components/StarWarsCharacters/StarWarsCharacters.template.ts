import { html, repeat, when } from "@microsoft/fast-element";
import { StarWarsCharacter } from "../StarWarsCharacter";

import { StarWarsCharacters } from "./StarWarsCharacters";

StarWarsCharacter;

export const StarWarsCharactersTemplate = html<StarWarsCharacters>`
    <ul>
    ${repeat(x => x.characters, html<any>`
        <star-wars-character :character=${character => character}></star-wars-character>
    `)}
    </ul>
`;