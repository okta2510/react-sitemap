require("babel-register")({
  presets: ["es2015", "react"]
});
const axios = require('axios');
const projectsData = require('./data/project.json');
const router = require("./sitemap-routes").default;
const blogRouter = require("./blog-sitemap-routes").default;
const projectRouter = require("./project-sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;


async function generateSitemap() {
  try {
  // const posts = await axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
  //     return response.data
  // });
  // // ####
      // const posts = await axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      //     return response.data;
      //   });
      
      // let idMap = [];

      //   for(var i = 0; i < posts.length; i++) {
      //     idMap.push({ id: posts[i].id });
      //   }
      // const pathsConfig = { 
      //       '/project/:id': idMap,
      //       '/blog/:id': idMap,
      //   };

  // // ####
    // const pathsConfig = posts.map((post) => ({
    //   route: `/projects/${post.id}`,
    //   lastmod: new Date().toISOString(), // You can set the last modification date if needed
    //   changefreq: "monthly", // You can set the change frequency as needed
    //   priority: 0.5, // You can set the priority as needed
    // }));

    // const pathsConfig = posts.map((post) => `/projects/${post.id}`);
  // const pathsConfig = { 
  //       '/projects/:id': [ 
  //           { 
  //         id: projectsData.projects.map((item, index ) => (item.id))
  //           } 
  //       ] 
  //   };
      return (
        new Sitemap(router)
        // .applyParams(pathsConfig)
            .build("http://localhost:3000")
            .save("./public/sitemap.xml")
      );
  } catch(e) {
    console.log(e);
  } 
}

async function generateBlogSitemap() {
  try {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      return response.data;
    });
  
  let idMap = [];

    for(var i = 0; i < posts.length; i++) {
      idMap.push({ id: posts[i].id });
    }
  const pathsConfig = { 
        '/blog/:id': idMap,
    };
  //  const pathsConfig = posts.map((post) => ({
  //     route: `/projects/${post.id}`,
  //     lastmod: new Date().toISOString(), // You can set the last modification date if needed
  //     changefreq: "monthly", // You can set the change frequency as needed
  //     priority: 0.5, // You can set the priority as needed
  //   }));

      return (
        new Sitemap(blogRouter)
        .applyParams(pathsConfig)
            .build("http://localhost:3000")
            .save("./public/blog-sitemap.xml")
      );
  } catch(e) {
    console.log(e);
  } 
}

async function generateProjectSitemap() {
  try {
  // const posts = await axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
  const posts = await axios.get('https://api.djubli.com/api/cars?sort=desc&by=id&limit=100&categoryId=6').then((response) => {
      return response.data.data;
    });
  console.log(posts.length)
  let idMap = [];

    for(var i = 0; i < posts.length; i++) {
      idMap.push({ id: posts[i].id });
    }
  const pathsConfig = { 
        '/project/:id': idMap,
    };
  //  const pathsConfig = posts.map((post) => ({
  //     route: `/projects/${post.id}`,
  //     lastmod: new Date().toISOString(), // You can set the last modification date if needed
  //     changefreq: "monthly", // You can set the change frequency as needed
  //     priority: 0.5, // You can set the priority as needed
  //   }));

      return (
        new Sitemap(projectRouter)
        .applyParams(pathsConfig)
            .build("http://localhost:3000")
            .save("./public/project-sitemap.xml")
      );
  } catch(e) {
    console.log(e);
  } 
}


generateSitemap();
generateBlogSitemap();
generateProjectSitemap();
