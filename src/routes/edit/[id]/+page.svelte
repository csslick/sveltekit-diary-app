<script>
  import autosize from 'svelte-autosize';
  import Btns from '$lib/components/Btns.svelte';
  import { diaries, writing, editId } from "$lib/store/store";
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  // import formatDate from "$lib/utils/formatDate";
  import TextArea from "$lib/components/TextArea.svelte";
  
  let id = $page.params.id;
  let editDiary = $diaries.find(diary => diary.id == id);
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
    <!-- <textarea placeholder="글쓰기를 시작하세요..."></textarea> -->
    <!-- <TextArea 
      bind:value={val}  
      minRows={8}
      maxRows={40}
      placeholder="글쓰기를 시작하세요..."
    ></TextArea> -->
    <textarea 
      use:autosize
      bind:value={val}  
      placeholder="글쓰기를 시작하세요..."
    ></textarea>
    <div class="bottom-info">
      <span class="date">{date}</span>
      <Btns diary={editDiary} />
      <!-- <button class="btn">
        <Icon icon="ic:baseline-delete" width="24" height="24"  style="color: #f80;" />
      </button> -->
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