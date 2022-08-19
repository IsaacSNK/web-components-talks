import {
  FASTElement,
  customElement,
  observable,
} from "@microsoft/fast-element";

import { StarWarsCharacterTemplate as template } from "./StarWarsCharacter.template";

@customElement({
  name: "star-wars-character",
  template,
})
export class StarWarsCharacter extends FASTElement {
  @observable character: any = undefined;
}
