import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
    <section class="video">
      <div class="video-player">
        <iframe class="video-iframe"></iframe>
      </div>
      <h3 class="pageItem-title video-title"></h3>
    </section>
    `);

    const iframe = this.element.querySelector(
      ".video-iframe"
    )! as HTMLIFrameElement;

    iframe.src = this.convertEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      ".video-title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
  private convertEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
