import { writable } from "svelte/store";

export const ACTIVE_NAV_SECTION = writable<string | null>(null);