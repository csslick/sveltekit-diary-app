<script>
  import { diaries } from '$lib/store/store';
  console.log($diaries)
</script>

<main class='container'>
  {#each $diaries as diary}
  <div class='diary'>
    <a href={`/read/${diary.id}`}>
      <p class="content">{diary.content}</p>
    </a>
    <div class="bottom-info">
      <span class="date">{diary.date}</span>
      <div class="btns">
        <button class="btn">edit</button>
        <button class="btn">delete</button>
      </div>
    </div>
  </div>
  {/each}
</main>