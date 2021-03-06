require('dotenv').config();

const fs = require('fs');
const Mustache = require('mustache');
const path = require('path');
const { createClient } = require('contentful');
const fetch = require('node-fetch');

const TEMPLATE_FILE = path.join(__dirname, '../README.mustache');
const OUTPUT_FILE = path.join(__dirname, '../README.md');

const DATA = {
  updated: new Date()
};

const getPosts = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.NODE_ENV !== 'production' ? 'preview.contentful.com' : 'cdn.contentful.com'
  });

  try {
    const { items } = await client.getEntries({
      'content_type': 'post'
    });

    DATA.posts = items.map(post => ({
      title: post.fields.title,
      url: `https://maxigimenez.xyz/post/${post.fields.slug}`
    }));
  } catch (e) {
    throw e;
  }
};

const generate = () => {
  fs.readFile(TEMPLATE_FILE, (err, template) => {
    if (err) {
      throw err;
    }
    const output = Mustache.render(template.toString(), DATA);
    fs.writeFileSync(OUTPUT_FILE, output);
  });
}

const run = async () => {
  await getPosts();
  generate();
}

run();
