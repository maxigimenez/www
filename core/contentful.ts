import { createClient } from 'contentful';

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

enum ContentType {
  BLOG_POST = 'blogPost'
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
      return posts.items;
    } catch (e) {
      console.error(e);
    }
  }

  async getPostBySlug(slug: string) {
    try {
      const posts: any = await this._client.getEntries({
        'content_type': ContentType.BLOG_POST,
        'fields.slug[in]': slug
      });
      const post = posts.items[0];

      return {
        title: post.fields.title,
        body: post.fields.body,
        image: post.fields.heroImage.fields.file.url
      }
    } catch (e) {
      console.error(e);
    }
  }
}
