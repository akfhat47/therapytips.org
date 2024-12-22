export const createVideoCardTemplate = (video)=> /*html*/ `
<div class="article-card">
<a href="${video.redirectUrl}">
      <img
        src="${video.imgUrl}"
        alt="Article Image 1"
        class="article-card-image"
      />
     
</a>
    </div>

`