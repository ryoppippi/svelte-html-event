# svelte-html-event

A simple type function to get the correct event type for a Builtin HTML element in Svelte.

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

Also, you can use [custom attributes](https://svelte.dev/docs/typescript#enhancing-built-in-dom-types) as well.  
This is really useful when you use `use:` directive by some libraries like [svelte-dnd-action](https://github.com/isaacHagoel/svelte-dnd-action).


For Svelte Custom Elements, [you can use the builtin `SvelteCustomElementEvent` instead](https://svelte.dev/docs/svelte#types-componentevents).
```svelte
<script lang="ts">
   import type { ComponentEvents } from 'svelte';
   import Component from './Component.svelte';

   function handleCloseEvent(event: ComponentEvents<Component>['close']) {
	  console.log(event.detail);
   }
</script>

<Component on:close={handleCloseEvent} />
```

# Inspiration
[This article](https://www.totaltypescript.com/event-types-in-react-and-typescript) inspired me to create this package.

# License
MIT
