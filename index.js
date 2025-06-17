const fs = require('fs');
const path = require('path');

// Simulação de dados do Instagram (em produção, substituir por scraping real ou API externa)
const posts = [
  {
    image: "https://via.placeholder.com/400x400?text=Post+1",
    link: "https://www.instagram.com/p/POST1/"
  },
  {
    image: "https://via.placeholder.com/400x400?text=Post+2",
    link: "https://www.instagram.com/p/POST2/"
  },
  {
    image: "https://via.placeholder.com/400x400?text=Post+3",
    link: "https://www.instagram.com/p/POST3/"
  }
];

fs.writeFileSync(path.join(__dirname, 'feed.json'), JSON.stringify(posts, null, 2));
console.log("Feed gerado com sucesso!");