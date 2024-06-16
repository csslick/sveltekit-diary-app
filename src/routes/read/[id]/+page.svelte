<script>
  import formatDate from "$lib/utils/formatDate";
  import Btns from '$lib/components/Btns.svelte';
  import Icon from '@iconify/svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { diaries } from '$lib/store/store';

  const { id } = $page.params;
  console.log(id);
  // const diary = $diaries.find(diary => diary.id == id);
  // const { content, date } = diary;

  // 서버 페이지에서 params 값을 가져옴
  export let data;
  console.log(data);
</script>
<main>
  <h1>보기 {data.diary[0].id}</h1>
  <div class='diary'>
    <p class="content">{data.diary[0].content}</p>
    <div class="bottom-info">
      <span class="date">{formatDate(data.diary[0].created_at)}</span>
      <!-- <Btns {diary} /> -->
      <Btns diary={data.diary[0]} />
    </div>
</main>
