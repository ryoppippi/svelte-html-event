# svelte-html-event

To install dependencies:

```bash
bun install svelte-html-event
```

# Usage
```svelte
<script lang="ts">
import type { SvelteHTMLElementEvent } from 'svelte-html-event';
function onClick(e: SvelteHTMLElementEvent<'button', 'on:click'>) {
    console.log(e.detail);
}
</script>

<button on:click={onClick}>Click me</button>
```

# License
MIT
