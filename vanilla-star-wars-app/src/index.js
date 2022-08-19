import { fetchStarWarsCharacters } from "./services/StarWarsApiClient.js";

const initApp = async () => {
    const characters = await fetchStarWarsCharacters();
    renderClock();
    renderData(characters.results);
};

const renderClock = () => {
    const clockDiv = document.getElementById("clock");
    setInterval(() => {
        clockDiv.textContent = new Date().toLocaleString();
    }, 1000);
};

const renderData = (characters) => {
    const tableBody = document.getElementById('tableBody'); 
    for (const character of characters) {
        const row = convertToRow(character);
        tableBody.appendChild(row);
    }
};

const convertToRow = (character) => {
    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");
    const heightTd = document.createElement("td");
    const birthDateTd = document.createElement("td");

    nameTd.textContent = character.name;
    heightTd.textContent = character.height;
    birthDateTd.textContent = character.birth_year;

    tr.appendChild(nameTd);
    tr.appendChild(heightTd);
    tr.appendChild(birthDateTd);
    return tr;
};

document.addEventListener('DOMContentLoaded', initApp);