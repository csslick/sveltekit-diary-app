<script>
  import Btns from '$lib/components/Btns.svelte';
  import Icon from '@iconify/svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { diaries } from '$lib/store/store';

  const { id } = $page.params;
  console.log(id);
  const diary = $diaries.find(diary => diary.id == id);
  const { content, date } = diary;
</script>
<main>
  <h1>보기 {id}</h1>
  <div class='diary'>
    <p class="content">{content}</p>
    <div class="bottom-info">
      <span class="date">{date}</span>
      <Btns {diary} />
      <!-- <div class="btns">
        <button class="btn">
          <Icon icon="uil:pen" width="24" height="24" style="color: #444;" />
        </button>
        <button class="btn">
          <Icon icon="ic:baseline-delete" width="24" height="24" style="color: #f80;" />
        </button>
      </div> -->
    </div>
</main>
