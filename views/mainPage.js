const createMainPageTemplate = ()=>`
<div class="banner-container">
  <!-- Top Banner -->
  <div class="top-banner">
    <img src="https://i.ibb.co/StQFXzV/banner1.jpg" alt="Weekly Journal Prompt">
  </div>

  <!-- Bottom Banner -->
  <div class="bottom-banner">
    <a href="your-link-to-join-club" target="_blank">
      <img src="https://i.ibb.co/wLhpYdJ/banner2.jpg" alt="Join Our Journal Club">
    </a>
  </div>
</div>
  <section id="articles" class="section-title">
      <h2>Latest Articles</h2>
      <div id="articles-list" hx-get="/articles?type=articles&limit=4" hx-trigger="load" hx-target="#articles-list" hx-swap="innerHTML">
        
      </div>
    </section>
    <section id="featured" class="section-title">
      <h2>Featured Personality Tests</h2>
      <div id="personality-tests" hx-get="/articles?type=personalityTests&limit=2" hx-trigger="load" hx-target="#personality-tests" hx-swap="innerHTML">
        
      </div>
    </section>
    <section id="interviews" class="section-title">
      <h2>New Interviews</h2>
      <div id="new-interviews" hx-get="/articles?type=newInterviews&limit=4" hx-trigger="load" hx-target="#new-interviews" hx-swap="innerHTML">
        
      </div>
    </section>
    <section id="interviews" class="section-title">
      <h2>Advice Columns</h2>
      <div id="advice-columns" hx-get="/articles?type=adviceColumns&limit=4" hx-trigger="load" hx-target="#advice-columns" hx-swap="innerHTML">
        
      </div>
    </section>

    <section id="interviews" class="section-title">
      <h2>Recommended Videos</h2>
      <div id="videos" hx-get="/videos" hx-trigger="load" hx-target="#videos" hx-swap="innerHTML">
        
      </div>
    </section>

`
export default createMainPageTemplate