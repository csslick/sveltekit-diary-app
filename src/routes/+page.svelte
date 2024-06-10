<script>
  import { goto } from '$app/navigation';
  import addIcon from '$lib/assets/icon_add.svg';
  import Icon from '@iconify/svelte';
  import { diaries } from '$lib/store/store';
  // console.log($diaries)
</script>

<!-- Home -->
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
        <button 
          class="btn" 
          on:click={() => goto(`/edit/${diary.id}`)}
        >
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