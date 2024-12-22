export const createCardTemplate = (article)=> /*html*/ `
<div class="article-card">
<a  href="/article/${article.id}" hx-get="/article/${article.id}" hx-trigger="click" hx-push-url="true" hx-target="main" hx-swap="innerHTML">
      <img
        src="${article.imgUrl}"
        alt="Article Image 1"
        class="article-card-image"
      />
      <h3 class="article-card-title">
        ${article.title}
      </h3>
</a>
    </div>

`