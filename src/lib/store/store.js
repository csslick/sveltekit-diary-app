import formatDate from "$lib/utils/formatDate";
import { writable, get } from 'svelte/store'
import { posts } from '$lib/data/posts'

export const diaries = writable(posts) // 일기 데이터
export const writing = writable('') // textarea 입력값
export const editId = writable(0) // 수정중인 일기 id

// 글 삭제 함수
export const deleteDiary = (id) => {
  diaries.update(current => {
    return current.filter(diary => diary.id!== id)
  })
}

// 글 수정 함수
export const editDiary = (id) => {
  diaries.update(current => {
    return current.map(diary => {
      if(diary.id.toString() === id.toString()) {
        return { ...diary, content: get(writing) }
      } else {
        return diary
      }
    })
  })
}

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

  // console.log(get(diaries));
}