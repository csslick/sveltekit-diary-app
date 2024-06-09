<script>
  import Icon from '@iconify/svelte';
  import { diaries } from '$lib/store/store';
  // console.log($diaries)
</script>

<main class='container'>
  {#each $diaries as diary}
  <div class='diary'>
    <a href={`/read/${diary.id}`}>
      <p class="content">{
        diary.content.length > 50 ? 
          diary.content.slice(0, 50) + '...' : diary.content
      }</p>
    </a>
    <div class="bottom-info">
      <span class="date">{diary.date}</span>
      <div class="btns">
        <button class="btn">
          <Icon icon="uil:pen" width="24" height="24" style="color: #444;" />
        </button>
        <button class="btn">
          <Icon icon="ic:baseline-delete" width="24" height="24" style="color: #f80;" />
        </button>
      </div>
    </div>
  </div>
  {/each}
</main>