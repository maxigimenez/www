import { createClient } from 'contentful';
import { Post } from './models/post';

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

enum ContentType {
  BLOG_POST = 'post'
}

export class ContentFulService {
  private _client = createClient({
    space: SPACE,
    accessToken: TOKEN
  });

  async getPosts() {
    try {
      const posts = await this._client.getEntries({
        'content_type': ContentType.BLOG_POST
      });
      return posts.items.map((post: any) => {
        return new Post({
          title: post.fields.title,
          image: post.fields.image.fields.file.url,
          body: post.fields.body,
          introBody: post.fields.introBody,
          imageAlt: post.fields.image.fields.description,
          slug: post.fields.slug
        });
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async getPostBySlug(slug: string) {
    try {
      const posts: any = await this._client.getEntries({
        'content_type': ContentType.BLOG_POST,
        'fields.slug[in]': slug
      });
      const post = posts.items[0];

      return new Post({
        title: post.fields.title,
        image: post.fields.image.fields.file.url,
        body: post.fields.body,
        introBody: post.fields.introBody,
        imageAlt: post.fields.image.fields.description,
        slug: post.fields.slug
      })
    } catch (e) {
      throw new Error(e);
    }
  }
}
