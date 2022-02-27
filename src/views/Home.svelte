<script lang="ts">
  import { onMount } from "svelte";
  import { createScrollObserver } from "../animate";

  let contentBody: HTMLElement;

  onMount(async () => {
    setTimeout(() => {
      const children = Array.from(
        contentBody.querySelectorAll(".slidein-animate-target")
      );
      createScrollObserver(contentBody, "slidein-top-animation", children);
    }, 0);
  });
</script>

<div class="content" bind:this={contentBody}>
  <div class="row">
    <img
      class="selfie slidein-animate-target"
      src="/assets/me_v2.jpg"
      alt="Lucas Burdell"
    />
    <div class="column">
      <div class="row slidein-animate-target text-content text-center">
        <p>
          Hello! I am Lucas Burdell, a Software developer. I'm committed to
          creating excellent, useful software. My strengths are scalability,
          user experience, and maintainability.
        </p>
      </div>
      <div class="row slidein-animate-target">
        <div class="text-left ml">
          <p>I have great experience with these programming languages:</p>
          <ul>
            <li>Javascript/Typescript</li>
            <li>GoLang</li>
            <li>C#</li>
            <li>Java</li>
            <li>Lua</li>
            <li>Python</li>
          </ul>
        </div>
        <div class="text-left ml">
          <p>I have great experience with these technologies:</p>
          <ul>
            <li>React</li>
            <li>Vue</li>
            <li>Svelte</li>
            <li>AWS Networking</li>
            <li>MySQL (and PostgreSQL/other SQL DBs)</li>
            <li>MongoDB (or any NoSQL DB)</li>
            <li>Docker</li>
            <li>.NET Core and ASP.NET Core</li>
            <li>Azure Service Fabric Microservices</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="row slidein-animate-target">
    <h2 class="text-center margin-auto">Contact Information</h2>
  </div>
  <div class="row slidein-animate-target contact-row">
    <div class="contact">
      <i class="fa fa-envelope-square" />
      <a class="fancy-link" href="mailto:lucasburdell@gmail.com"
        >Email: lucasburdell@gmail.com</a
      >
    </div>
    <div class="contact">
      <i class="fa fa-linkedin-square" />
      <a class="fancy-link" href="https://www.linkedin.com/in/lucas-burdell/">
        LinkedIn
      </a>
    </div>
    <div class="contact">
      <i class="fa fa-github-square" />
      <a class="fancy-link" href="https://github.com/lucas-burdell">GitHub</a>
    </div>
  </div>
</div>

<style>
  .content {
    margin: 1em 5em;
    overflow: hidden;
  }
  .text-content {
    margin-top: 3em;
    margin-left: 1em;
    padding: 0px 0.5em;
  }
  .text-content:first-child {
    margin-top: 0;
  }

  .text-content > p {
    margin: 0 0;
  }
  .row {
    margin-top: 2em;
  }
  .selfie {
    border: 2px solid var(--primary-light);
    background-color: #fff;
    width: 300px;
    height: 375px;
  }
  .contact-row {
    column-gap: 5em;
    align-items: center;
    justify-content: center;
  }
</style>
