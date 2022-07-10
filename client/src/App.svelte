<script lang="ts">
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';

  import { liff } from '@line/liff';

  console.log(liff);
</script>

<main>
  <Router {routes} />
</main>
