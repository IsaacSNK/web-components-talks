import { html, repeat, when } from "@microsoft/fast-element";
import { StarWarsApp } from "./StarWarsApp";
import { StarWarsCharacters } from "../StarWarsCharacters";

StarWarsCharacters;

export const StarWarsAppTemplate = html<StarWarsApp>`
    <h1>StarWars Characters</h1>
    <star-wars-characters :characters=${x => x.data}></star-wars-characters>
`;