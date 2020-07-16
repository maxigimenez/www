import ReactMarkdown from 'react-markdown';
import { renderToString } from 'react-dom/server';

import { ContentFulService } from '../core';

const Rss = () => <></>;

Rss.getInitialProps = async ({ res }) => {
  const service = new ContentFulService();
  const posts = await service.getPosts();
  const [last] = posts;

  const xml = `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
      <title>maxi gimenez - developer</title>
      <link>https://maxigimenez.xyz</link>
      <language>en</language>
      <lastBuildDate>${last.createdAt}</lastBuildDate>
      ${posts.map(post => {
        return `<item>
          <title>${post.title}</title>
          <link>https://maxigimenez.xyz/post/${post.slug}</link>
          <pubDate>${post.createdAt}</pubDate>
          <description>
            <![CDATA[${renderToString(<ReactMarkdown source={post.body} />)}]]>
          </description>
        </item>`;
      }).join('')}
    </channel>
  </rss>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();
}

export default Rss;