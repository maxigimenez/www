export class Post {
  title: string;
  image: string;
  imageAlt: string;
  body: string;
  introBody: string;
  slug: string;

  constructor({ title, image, imageAlt, body, introBody, slug }) {
    this.title = title;
    this.image = image;
    this.imageAlt = imageAlt;
    this.body = body;
    this.introBody = introBody;
    this.slug = slug;
  }
}
