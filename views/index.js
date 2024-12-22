const createHomePageTemplate = (mainContent) =>
  /*html*/
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Therapy Tips</title>
  <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
  <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9;
    color: #333;
  }
  
  .container {
   display: flex; /* Enables flexbox layout */
  flex-direction: column; /* Stacks children vertically */
  align-items: center; /* Horizontally centers all sections */
  justify-content: center; /* Optional: centers vertically if there's extra space */
  width: 90%; /* Adjusts width */
  max-width: 1200px; /* Adds a max width for large screens */
  margin: 0 auto; /* Centers the container itself */
  padding: 20px;
  }
  
  header {
    background-color: #fff;
    padding: 20px 0;
    border-bottom: 2px solid #e5e5e5;
    align-item:left;
    text-align: left
  }
  
  .header h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .nav-menu {
    display: flex;
    gap: 15px;
    list-style: none;
  }
  
  .nav-menu li a {
    text-decoration: none;
    color: #668cc5;
    background-color: #d2def1;
    padding: 4px;
    border-radius: 5px;
    font-weight: bold;
  }
  
  main {
    padding: 20px 0;
  }
  
  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
  }
  
  /* Section Container */
.articles-section {
  width: 100%; /* Ensures sections take up full width of the container */
  max-width: 800px; /* Optionally, restrict maximum width of individual sections */
  text-align: center; /* Centers text content inside the section */
  margin-bottom: 20px;
}

/* Section Title */
.section-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* Grid Container */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: start;
}

/* Individual Card */
.article-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Card Image */
.article-card-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Card Title */
.article-card-title {
  font-size: 1rem;
  font-weight: 500;
  color: #668cc5;
  padding: 15px;
  background-color: #d2def1;
  margin: 0;
  text-transform: capitalize;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column; /* Stack items vertically */
    align-items: flex-start; /* Align to the left */
    gap: 10px;
  }

  .nav-menu li {
    width: 100%; /* Make each item take up the full width */
  }

  .nav-menu li a {
    display: block; /* Ensure clickable area spans the full width */
    padding: 10px; /* Add padding for better spacing */
    background-color: #f1f1f1; /* Optional: Background for better visibility */
    border-radius: 5px; /* Optional: Rounded edges */
    text-align: left;
  }
}
    .container { max-width: 800px; margin: 0 auto; }
    .search-box { margin-bottom: 20px; }
    .search-input { width: 100%; padding: 10px; font-size: 16px; border: 1px solid #ccc; border-radius: 4px; }
    .search-results { list-style: none; padding: 0; }
    .search-results li { margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; background-color: #fff; }
    .search-results li h3 { margin: 0; font-size: 18px; color: #007bff; text-decoration: underline; }
    .search-results li p { margin: 5px 0 0; font-size: 14px; color: #555; }
    .no-results { color: #999; font-style: italic; }



    
  </style>
  </head>
<body hx-boost="true">
  <header>
    <div class="container header">
      <h1>Therapytips.org</h1>
      <nav>
        <ul class="nav-menu">
  <li>
    <a href="/" hx-get="/" hx-target="body" hx-push-url="/" hx-swap="innerHTML">
      Home
    </a>
  </li>
  <li>
    <a href="/articles?type=articles" 
       hx-get="/articles?type=articles" 
       hx-target="main" 
       hx-push-url="/articles?type=articles" 
       hx-swap="innerHTML">
      Articles
    </a>
  </li>
  <li>
    <a href="/articles?type=newInterviews" 
       hx-get="/articles?type=newInterviews" 
       hx-target="main" 
       hx-push-url="/articles?type=newInterviews" 
       hx-swap="innerHTML">
      Interviews
    </a>
  </li>
  <li>
    <a href="/articles?type=adviceColumns" 
       hx-get="/articles?type=adviceColumns" 
       hx-target="main" 
       hx-push-url="/articles?type=adviceColumns" 
       hx-swap="innerHTML">
      Advice
    </a>
  </li>
  <li>
    <a href="/articles?type=personalityTests" 
       hx-get="/articles?type=personalityTests" 
       hx-target="main" 
       hx-push-url="/articles?type=personalityTests" 
       hx-swap="innerHTML">
      Personality Tests
    </a>
  </li>
  <li>
    <a href="/search" 
       hx-get="/search" 
       hx-target="main" 
       hx-push-url="/search" 
       hx-swap="innerHTML">
      Search
    </a>
  </li>
  <li>
    <a href="/about" 
       hx-get="/about" 
       hx-target="main" 
       hx-push-url="/about" 
       hx-swap="innerHTML">
      About Us
    </a>
  </li>
  <li>
    <a href="/contact" 
       hx-get="/contact" 
       hx-target="main" 
       hx-push-url="/contact" 
       hx-swap="innerHTML">
      Contact
    </a>
  </li>
</ul>
      </nav>
    </div>
  </header>

  

  
  <main class="container">
    ${mainContent || `<div hx-get="/main" hx-trigger="load" hx-target="main" hx-swap="innerHTML"></div>`}
  </main>
  <footer>
    <div class="container footer">
      <p>&copy; 2024 Therapy Tips</p>
    </div>
  </footer>

  <script src="htmx.min.js"></script>
</body>
</html>




`;
export default createHomePageTemplate;
