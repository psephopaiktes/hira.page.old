<template>
  <div class="board l-board">
    <nav id="backhome">
      <router-link to="/">
        <SVG symbol="backhome" alt="ホームへ戻る" />
      </router-link>
    </nav>

    <slot></slot>

    <footer>
      <ul>
        <li>
          <a
            href="https://twitter.com/psephopaiktes"
            target="_blank"
            rel="noopener"
            title="Twitter"
            class="c-tips"
          >
            <SVG symbol="twitter" alt="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://note.com/psephopaiktes"
            target="_blank"
            rel="noopener"
            title="note"
            class="c-tips"
          >
            <SVG symbol="note" alt="note" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/psephopaiktes"
            target="_blank"
            rel="noopener"
            title="GitHub"
            class="c-tips"
          >
            <SVG symbol="github" alt="GitHub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/psephopaiktes"
            target="_blank"
            rel="noopener"
            title="Instagram"
            class="c-tips"
          >
            <SVG symbol="instagram" alt="Instagram" />
          </a>
        </li>
      </ul>
      <p>
        <small>© Akira HIRATA {{ new Date().getFullYear() }}</small>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BoardContainer"
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

#backhome {
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 3.2rem 0;
  overflow: hidden;
  .router-link-exact-active {
    display: none;
  }
  a {
    display: block;
    background: color(theme);
    width: 4rem;
    height: 4rem;
  }
  svg {
    opacity: 0.6;
    margin: 0.3rem;
    width: 3.6rem;
    height: 3.6rem;
    fill: color(base);
  }
  @include min($SM + 1) {
    display: none;
  }
}

.board {
  background: color(base);
  margin: 1.6rem;
  padding: 0 9.6rem #{24 + 10.4}rem;
  min-height: calc(100vh - 3.2rem);
  overflow: hidden;
  border-radius: 1.6rem;
  position: relative;

  @include max($LG) {
    padding: 0 8rem #{24 + 8.8}rem;
  }

  @include max($MD) {
    margin: 0;
    border-radius: 0;
    min-height: calc(100vh - 1.6rem);
    padding: 0 6.4rem #{24 + 8}rem;
  }

  @include max($SM) {
    min-height: 100vh;
    padding: 0 4rem #{24 + 8}rem;
  }
}

.board > footer {
  width: 100%;
  height: 24rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: color(theme);
  background: color(theme, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  > ul {
    display: flex;
    justify-content: center;
    @include max($SM) {
      margin-top: -3.2rem;
    }
    a {
      display: block;
      opacity: 0.6;
      margin: 0 1.2rem;
      &:hover {
        opacity: 1;
      }
    }
    svg {
      width: 3.2rem;
      height: 3.2rem;
      fill: color(theme);
    }
  }
  > p {
    margin-top: 3.2rem;
    text-align: center;
    font-weight: 500;
    @include max($SM) {
      margin-top: 1.6rem;
    }
  }
}
</style>
