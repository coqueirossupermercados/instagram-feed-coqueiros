const fs = require('fs');
const fetch = require('node-fetch');

const INSTAGRAM_USERNAME = 'coqueiros_supermercados';
const OUTPUT_FILE = 'feed.json';

async function scrapeInstagramFeed() {
  try {
    const response = await fetch(`https://www.instagram.com/${INSTAGRAM_USERNAME}/?__a=1&__d=dis`, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const json = await response.json();
    const edges = json?.graphql?.user?.edge_owner_to_timeline_media?.edges || [];

    const posts = edges.slice(0, 6).map(edge => ({
      image: edge.node.display_url,
      link: `https://www.instagram.com/p/${edge.node.shortcode}/`
    }));

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
    console.log(`✅ Feed atualizado com ${posts.length} posts.`);
  } catch (err) {
    console.error("❌ Erro ao atualizar o feed:", err);
  }
}

scrapeInstagramFeed();