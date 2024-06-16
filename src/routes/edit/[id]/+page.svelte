<script>
  import autosize from 'svelte-autosize';
  import Btns from '$lib/components/Btns.svelte';
  import { diaries, writing, editId } from "$lib/store/store";
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  import formatDate from "$lib/utils/formatDate";
  import TextArea from "$lib/components/TextArea.svelte";
  
  export let data;
  let id = $page.params.id;
  // let editDiary = $diaries.find(diary => diary.id == id);
  let editDiary = data.diary[0];
  let val = editDiary.content;
  let date = editDiary.date;
  console.log(id, $page.url.pathname);

  $editId = id;
  $: {
    $writing = val;
    console.log($writing);
  }
</script>

<main>
  <!-- 글수정 페이지 -->
  <div class="diary">
    <textarea 
      use:autosize
      bind:value={val}  
      placeholder="글쓰기를 시작하세요..."
    ></textarea>
    <div class="bottom-info">
      <span class="date">{formatDate(editDiary.created_at)}</span>
      <Btns diary={editDiary} />
    </div>
  </div>
</main>

<style lang='scss'>
  main {
    padding: 35px 20px;
  }

  // textarea {
  //   border: none;
  //   width: 100%;
  //   font-size: inherit;
  //   padding: 0.5rem 0;
  //   background: transparent;
  //   outline: none;
  //   line-height: 1.6;
  // }
</style>