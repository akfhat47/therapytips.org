import express from "express";
import createHomePageTemplate from "./views/index.js";
import { createArticlesTemplate } from "./views/articles.js";
import { createArticlePageTemplate } from "./views/articlePage.js";
import createMainPageTemplate from "./views/mainPage.js";
import {createSearchPageTemplate} from "./views/searchPage.js";
import { ARTICLES } from "./data/data.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));



const generateSearchResults = (filteredArticles) => {
    if (filteredArticles.length === 0) {
      return `<p class="no-results">No results found for your query.</p>`;
    }
    return `
      <ul class="search-results">
        ${filteredArticles
          .map(
            (article, index) =>
              `<li>
                <h3>${index + 1}. <a  href="/article/${article.id}" hx-get="/article/${article.id}" hx-trigger="click" hx-push-url="true" hx-target="main" hx-swap="innerHTML">${article.title}</a></h3>
                <p>${article.intro || "No description available"}</p>
              </li>`
          )
          .join("")}
      </ul>
    `;
  };

app.get("/", (req, res) => {
    const isHTMXRequest = req.headers['hx-request'];
    const mainContent = createMainPageTemplate();
  
    if (isHTMXRequest) {

      res.send(createHomePageTemplate());
    } else {
      
      res.send(createHomePageTemplate(mainContent));
    }
});
app.get("/search", (req, res) => {
    res.send(createSearchPageTemplate());
  });
app.get("/searchresults", (req, res) => {
    const query = req.query.query || "";
  
    if (!query.trim()) {
      return res.send(`<p class="no-results">Please enter a search term to find articles.</p>`);
    }
  
    const filteredArticles = ARTICLES.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
  
    const searchResultsHtml = generateSearchResults(filteredArticles);
    res.send(searchResultsHtml);
  });
  
app.get("/main", (req, res) => {
    const mainContent = createMainPageTemplate(); 
    const isHTMXRequest = req.headers['hx-request'];
    if(isHTMXRequest){
        res.send(mainContent)
    }
    else{
        res.send(createHomePageTemplate(mainContent))
    }
  });
  


app.get("/articles", (req, res) => {
  const { type, limit } = req.query;
  const isHTMXRequest = req.headers['hx-request'];

  const html = createArticlesTemplate(type, limit ? parseInt(limit) : undefined);
  if(isHTMXRequest){
    res.send(html);
  }
  else{
    res.send(createHomePageTemplate(html))
  }
  
});

app.get("/article/:id", (req, res) => {
  const articleId = parseInt(req.params.id, 10);
  const isHTMXRequest = req.headers['hx-request'];
  const html = createArticlePageTemplate(articleId);
  if(isHTMXRequest){
    res.send(html)
  }
  else{
    res.send(createHomePageTemplate(html))
  }
});

app.listen(3000, () => {
  console.log("Server started at Port: 3000");
});
