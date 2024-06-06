<header>
  <h1>Diary</h1>
  <button class="btn">완료</button>
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