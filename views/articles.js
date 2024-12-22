import { ARTICLES } from "../data/data.js";
import { createCardTemplate } from "./card.js";

export const createArticlesTemplate = (type, limit) =>
  /*html*/ `
<div class="articles-grid">
  ${ARTICLES.filter(article => (type ? article.articleType === type : true))
    .slice(0, limit || ARTICLES.length)
    .map(article => createCardTemplate(article))
    .join("")}
</div>`;
