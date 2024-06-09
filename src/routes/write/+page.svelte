<script>
  import { writing } from "$lib/store/store";
  import TextArea from "$lib/components/TextArea.svelte";
  const formatDate = function() {
    return new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  }
 
  let val = ''; // textarea에 입력된 값
  $: {
    $writing = val;
    console.log($writing);
  }
</script>

<main>
  <!-- 글쓰기 페이지 -->
  <div class="diary">
    <!-- <textarea placeholder="글쓰기를 시작하세요..."></textarea> -->
    <TextArea 
      bind:value={val}  
      minRows={4}
      maxRows={40}
      placeholder="글쓰기를 시작하세요..."
    ></TextArea>
    <div class="bottom-info">
      <span class="date">{formatDate()}</span>
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
  // }
</style>