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
export const editDiary = async (id) => {
  const content = get(writing);

  if(content) {
    const response = await fetch('/api', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, content })
    })
    const data = await response.json()
    console.log(data)
    // 성공 여부 확인
    if(data.success) {
      console.log('글수정 성공')
    } else {
      console.log('글수정 실패')
    }
  }
}

// 글 저장 함수
export const addDiary = async () => {
  const content = get(writing);

  if(content) {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    })
    const data = await response.json()
    console.log(data)
    // 글쓰기 성공 여부 확인
    if(data.success) {
      console.log('글쓰기 성공')
    } else {
      console.log('글쓰기 실패')
    }
  }

  // console.log(get(diaries));
}