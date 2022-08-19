import {
  FASTElement,
  customElement,
  observable,
} from "@microsoft/fast-element";

import { StarWarsCharactersTemplate as template } from "./StarWarsCharacters.template";

@customElement({
  name: "star-wars-characters",
  template,
})
export class StarWarsCharacters extends FASTElement {
  @observable characters: any = [];
}
