import formatDate from "$lib/utils/formatDate";
import { writable, get } from 'svelte/store'
import { posts } from '$lib/data/posts'

export const diaries = writable(posts) // 일기 데이터
export const writing = writable('') // textarea 입력값

// 글 저장 함수
export const addDiary = () => {
  const content = get(writing);

  if(content) {
    const newDiary = {
      id: Date.now(),
      date: formatDate(),
      content,
    }
    diaries.update(diaries => [...diaries, newDiary])
  }

  console.log(get(diaries));
}