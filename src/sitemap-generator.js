require("babel-register")({
  presets: ["es2015", "react"]
});
const axios = require('axios');
const projectsData = require('./data/project.json');
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;


async function generateSitemap() {
  try {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    console.log(response.data)
      return response.data
  });
  
  let idMap = [];

    for(var i = 0; i < posts.length; i++) {
      idMap.push({ id: posts[i].id });
    }
  const pathsConfig = { 
        '/projects/:id': idMap
    };
  // const pathsConfig = { 
  //       '/projects/:id': [ 
  //           { 
  //         id: projectsData.projects.map((item, index ) => (item.id))
  //           } 
  //       ] 
  //   };
    console.log(pathsConfig)
      return (
        new Sitemap(router)
        .applyParams(pathsConfig)
            .build("http://localhost:3000")
            .save("./public/sitemap.xml")
      );
   
  } catch(e) {
    console.log(e);
  } 
}


generateSitemap();