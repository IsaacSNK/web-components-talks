import { customElement, FASTElement, observable } from "@microsoft/fast-element";
import { fetchStarWarsCharacters } from "../../services/StarWarsApiClient";
import { StarWarsAppTemplate as template } from "./StarWarsApp.template";

@customElement({
    name: "star-wars-app",
    template,
})
export class StarWarsApp extends FASTElement {
    @observable data: any = [];

    connectedCallback() {
        super.connectedCallback();
        this.loadData();
    }

    private async loadData() {
        const response = await fetchStarWarsCharacters() as any;
        this.data = response.results;
    }
}