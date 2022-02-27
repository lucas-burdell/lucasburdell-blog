<script lang="ts">
  import page from "page";
  import Home from "../views/Home.svelte";

  let current = Home;

  page("/", () => (current = Home));
</script>

<svelte:component this={current} />
