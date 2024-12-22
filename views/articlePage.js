import { ARTICLES } from "../data/data.js";

export const createArticlePageTemplate = articleId => {
  const article = ARTICLES.find(a => a.id === parseInt(articleId, 10));

  if (!article) {
    return /*html*/ `
    <div class="error-message">
      <h2>Article Not Found</h2>
      <p>We couldn't find the article you're looking for.</p>
      <a href="/" hx-get="/" hx-push-url="true" hx-target="main" hx-swap="outerHTML">Go Back to Homepage</a>
    </div>`;
  }

  return /*html*/ `
  <div class="article-detail">
    <img src="${article.imgUrl}" alt="${article.title}" />
    <h1>${article.title}</h1>
    <p><strong>Author:</strong> ${article.author}</p>
    <p><strong>Published:</strong> ${article.publishDate}</p>
    <div>
      ${article.content
        .map(
          section => `
        <h2>${section.title}</h2>
        <p>${section.data}</p>`
        )
        .join("")}
    </div>
    <a href="/" hx-get="/" hx-push-url="true" hx-target="main" hx-swap="outerHTML">Back to Homepage</a>
  </div>`;
};
