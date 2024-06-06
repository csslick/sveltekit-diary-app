<script>
  import { page } from '$app/stores'; // 내장 스토어 모듈에서 page 스토어를 가져온다.
</script>

<header>
  <h1>Diary {$page.url.pathname}</h1>
  <!-- Home을 제외한 페이지 마다 완료 버튼 표시 -->
  {#if $page.url.pathname === '/read'}
    <button class="btn">완료</button>
  {:else if $page.url.pathname === '/write'} 
    <button class="btn">완료</button>
  {:else if $page.url.pathname === '/edit'} 
    <button class="btn">완료</button> 
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