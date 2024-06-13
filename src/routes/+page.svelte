<script>
  import formatDate from "$lib/utils/formatDate";
  import Btns from '$lib/components/Btns.svelte';
  import { goto } from '$app/navigation';
  import addIcon from '$lib/assets/icon_add.svg';
  import Icon from '@iconify/svelte';
  import { diaries } from '$lib/store/store';
  // console.log($diaries)

  export let data;

  // $diaries에 data 저장


  // console.log(data);
</script>

<!-- Home -->
<main class='container'>
  {#each data.diaries as diary}
  <div class='diary'>
    <a href={`/read/${diary.id}`}>
      <p class="content">{
        diary.content.length > 50 ? 
          diary.content.slice(0, 50) + '...' : diary.content
      }</p>
    </a>
    <div class="bottom-info">
      <span class="date">{formatDate(diary.created_at)}</span>
      <Btns {diary} />
    </div>
  </div>
  {/each}
</main>

<a href="/write" class="btn-write">
  <img src={addIcon} alt="add">
</a>

<style lang="scss">
  .btn-write {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    img {
      width: 64px;
      height: 64px;
    }
  }
</style>