import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/300/150"
    );
    image.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
