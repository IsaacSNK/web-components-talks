export const fetchStarWarsCharacters = async () => {
    const rawResponse = await fetch("https://swapi.dev/api/people");
    if (rawResponse?.status !== 200) {
        return [];
    }
    return rawResponse.json();
};