/* eslint-disable @typescript-eslint/no-unused-vars */

import type { SvelteHTMLElements, EventHandler } from 'svelte/elements';

type Nullish<T> = T | null | undefined;

/**
 * Provides the event handler for a given element.
 *
 * @example
 *
 * type MyEventHandler = GetEventHandlers<"input">; // "on:change" | "on:copy" ...
 *
 */
type GetEventHandlers<T extends keyof SvelteHTMLElements> = Extract<
	keyof SvelteHTMLElements[T],
	`on${string}`
>;

/**
 * Provides the event type for a given element and handler.
 *
 * @example
 *
 * type MyEvent = SvelteHTMLElementEvent<"input", "on:change">; // Event & { currentTarget: EventTarget & HTMLInputElement }
 *
 */
export type SvelteHTMLElementEvent<
	TElement extends keyof SvelteHTMLElements,
	THandler extends GetEventHandlers<TElement>
> = SvelteHTMLElements[TElement][THandler] extends Nullish<EventHandler<infer TEvent, infer _>>
	? TEvent
	: never;
