<script>
  import logo from "$lib/assets/shed3.webp";
</script>

<div class="dark-wrapper">
  <!-- Landing page Hero -->
  <section class="hero is-fullheight is-transparent">
    <!-- Hero Image and Title -->
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <!-- Landing page Title -->
          <div class="column is-5 landing-caption">
            <h1 class="title is-1 is-light is-semibold is-spaced main-title">
              Snickerbo
            </h1>
            <h2 class="subtitle is-5 is-light is-thin">
              Like Emil's woodshed, a holding company can play a role as a place
              of refuge or protection for its subsidiary companies. By owning
              and controlling these subsidiary companies, the holding company
              can provide them with financial support, strategic guidance, and
              other resources that they may need to thrive and grow.
            </h2>
            <!-- CTA -->
            <p class="buttons">
              <a
                href="/about"
                class="button k-button k-primary raised has-gradient is-fat is-bold"
              >
                <span class="text">Learn More</span>
                <span class="front-gradient"></span>
              </a>
            </p>
          </div>
          <!-- Hero image -->
          <div class="column is-7">
            <figure class="image">
              <img src={logo} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .dark-wrapper {
  background-color: gradient(to right, #6f6c6c, #6c6363);
  color: #fff;
  
}
</style>
