var html = require("choo/html");

module.exports = header;

function header(state, emit) {
  return html`
    <section>
      <a href="/" id="main-header"><h1>BERNARDO ANDERSON</h1></a>
      <p class="web-developer">
        <i class="fa fa-chevron-right" aria-hidden="true"></i> Web Developer
        <span class="blink-text"></span>
      </p>
      <div class="social">
        <div class="row">
          <div class="column column-10">
            <a href="/" title="Home" class="tooltip">
              <i class="fas fa-home"></i>
            </a>
          </div>
          <div class="column column-10">
            <a href="./assets/anderson-resume.pdf" target="_blank" title="Resume" class="tooltip" rel="noopener noreferrer" download="anderson-resume.pdf">
              <i class="far fa-file-alt"></i>
            </a>
          </div>
          <!--
            <div class="column column-10">
              <a href="/blog" title="blog" class="tooltip">
                <i class="fal fa-newspaper"></i>
              </a>
            </div>
          -->
          <div class="column column-10">
            <a href="https://codesandbox.io/u/bernardodsanderson" target="_blank" title="codesandbox" class="tooltip">
              <i class="fas fa-laptop-code"></i>
            </a>
          </div>
          <div class="column column-10">
            <a href="https://gitlab.com/u/bernardodsanderson/projects" title="Gitlab Repository" target="_blank" class="tooltip">
              <i class="fab fa-gitlab"></i>
            </a>
          </div>
          <div class="column column-10">
            <a href="https://github.com/bernardodsanderson" title="Github Repository" target="_blank" class="tooltip">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div class="column column-10">
            <a href="https://www.linkedin.com/in/bernardodsanderson" title="Linkedin" target="_blank" class="tooltip">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="column column-10">
            <a href="mailto:bernardo@bdsa.xyz" title="bernardo@bdsa.xyz" target="_blank" class="tooltip">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
