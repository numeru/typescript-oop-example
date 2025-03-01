import { BaseComponent } from "../../component.js";
import { MediaData } from "../dialog.js";

export class MediaSectionInput
  extends BaseComponent<HTMLElement>
  implements MediaData {
  constructor() {
    super(`
    <div>
      <div class="form-container">
        <label for="title">Title</label>
        <input type="text" id="title">
      </div>
      <div class="form-container">
        <label for="url">Url</label>
        <input type="text" id="url">
      </div>
    </div>
    `);
  }

  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement;
    return element.value;
  }
}
