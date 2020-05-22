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
    accessToken: TOKEN,
    host: process.env.NODE_ENV === 'development' ? 'preview.contentful.com' : 'cdn.contentful.com'
  });

  getPosts(): Promise<Post[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const { items } = await this._client.getEntries({
          'content_type': ContentType.BLOG_POST
        });
        resolve(items.map(post => _createPost(post)));
      } catch (e) {
        reject(e);
      }
    });
  }

  getPostBySlug(slug: string): Promise<Post> {
    return new Promise(async (resolve, reject) => {
      try {
        const { items }: any = await this._client.getEntries({
          'content_type': ContentType.BLOG_POST,
          'fields.slug[in]': slug
        });

        const [post] = items;
        if (!post) {
          return reject();
        }

        resolve(_createPost(post));
      } catch (e) {
        reject(e);
      }
    });
  }

  getPostsSlugs(): Promise<string[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const { items } = await this._client.getEntries({
          'content_type': ContentType.BLOG_POST,
          select: 'fields.slug'
        });
        resolve(items.map((post: any) => post.fields.slug));
      } catch (e) {
        reject(e);
      }
    });
  }
}

const _createPost = post => ({
  title: post.fields.title,
  image: post.fields.image?.fields?.file?.url || '',
  body: post.fields.body || '',
  introBody: post.fields.introBody || '',
  imageAlt: post.fields.image?.fields?.description || '',
  slug: post.fields.slug || '',
  createdAt: _formatDate(post.fields.createdAt || '')
});

const _formatDate = (date: string) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(
    new Date(date)
  );
};
