<script>
  const formatDate = function() {
    return new Date().toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  }
</script>

<main>
  <div class="diary">
    <textarea placeholder="글쓰기를 시작하세요..."></textarea>
    <div class="bottom-info">
      <span class="date">{formatDate()}</span>
    </div>
  </div>
</main>

<style lang='scss'>
  textarea {
    border: none;
    width: 100%;
    font-size: inherit;
    padding: 0.5rem 0;
    background: transparent;
    outline: none;
  }
</style>