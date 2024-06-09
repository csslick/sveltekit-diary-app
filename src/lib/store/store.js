import { writable } from 'svelte/store'
import { posts } from '$lib/data/posts'

export const diaries = writable(posts)
export const writing = writable('')