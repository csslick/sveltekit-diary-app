<script>
  import { writing, addDiary, editDiary, editId } from "$lib/store/store"; // 스토어에서 writing 스토어와 addDiary 함수를 가져온다.
  import { goto } from '$app/navigation'; // 내장 모듈에서 goto 함수를 가져온다.
  import { page } from '$app/stores'; // 내장 스토어 모듈에서 page 스토어를 가져온다.

  async function clickHandler() {
    if($page.url.pathname.startsWith('/read')) {
      goto('/'); // home으로 이동한다.
    } else if($page.url.pathname.startsWith('/write')) {
      // 글쓰기 로직
      if($writing) {
        await addDiary(); // 글을 작성한 후 addDiary 함수를 호출한다.
      }
      goto('/');
    } else if($page.url.pathname.startsWith('/edit')) {
      // 수정 로직
      if($writing) {
        await editDiary($editId); // 글을 수정한 후 editDiary 함수를 호출한다.
      }
      goto('/');
    }
  }
</script>

<header>
  <h1>Diary {$page.url.pathname}</h1>
  <!-- Home을 제외한 페이지 마다 완료 버튼 표시 -->
  {#if $page.url.pathname.startsWith('/read')}
    <button class="btn" on:click={clickHandler}>완료</button>
  {:else if $page.url.pathname.startsWith('/write')} 
    <button class="btn" on:click={clickHandler}>완료</button>
  {:else if $page.url.pathname.startsWith('/edit')} 
    <button class="btn" on:click={clickHandler}>완료</button> 
  {/if}
</header>
<nav>
  <a href="/">home</a>
  <a href="/read">read</a>
  <a href="/write">write</a>
  <a href="/edit">edit</a>
</nav>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: var(--main-color);
    color: var(--text-light);
    // a {
    //   text-decoration: none;
    //   color: var(--text-light);
    // }
    h1 { font-size: 28px; }
    .btn {
      border: none;
      background: transparent;
      color: var(--text-light);
      font-size: 18px;
      cursor: pointer;
    }
  }
</style>