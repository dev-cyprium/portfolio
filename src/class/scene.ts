import { Star, makeStar } from "./star";

const rnd = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export class Scene {
  private numStars: number = 0;
  private minDistanceTreshold: number = 0;
  private height: number = 0;
  private starGrowth: number = 0;
  private stars: Star[] = [];
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  init() {
    const isMobile = window.matchMedia(
      "only screen and (max-width: 760px)"
    ).matches;

    if (isMobile) {
      this.numStars = 100;
      this.minDistanceTreshold = 55;
      this.height = 300;
      this.starGrowth = 1;
    } else {
      this.numStars = 250;
      this.minDistanceTreshold = 75;
      this.height = 400;
      this.starGrowth = 1.5;
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = this.height;
  }

  makeStars() {
    this.stars = Array.from({ length: this.numStars }, () =>
      makeStar(
        rnd(
          this.canvas.width / 2 - this.canvas.width * 0.45,
          this.canvas.width / 2 + this.canvas.width * 0.45
        ),
        rnd(0, this.canvas.height),
        Math.random() * this.starGrowth + 1
      )
    );
  }

  getMinDistanceThreshold() {
    return this.minDistanceTreshold;
  }

  getStars() {
    return this.stars;
  }
}
