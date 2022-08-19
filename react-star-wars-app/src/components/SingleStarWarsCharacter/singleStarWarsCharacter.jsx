export function SingleStarWarsCharacter(props) {
    const {name, height, birth_year} = props.characterData;
    return (<tr>
        <td>{name}</td>
        <td>{height}</td>
        <td>{birth_year}</td>
    </tr>);
}