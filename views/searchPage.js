const createSearchPageTemplate = () => /*html*/ `


  <div class="container">
    <h1>Enter your search term here:</h1>
    <form hx-get="/searchresults" hx-target="#results" hx-swap="innerHTML" class="search-box">
      <input
        type="text"
        name="query"
        class="search-input"
        placeholder="Search articles..."
        autofocus
      />
      <button type="submit">Search</button>
    </form>
    <div id="results"></div>
  </div>


`;




export {createSearchPageTemplate};
