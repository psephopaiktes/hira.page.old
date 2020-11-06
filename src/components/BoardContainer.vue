<template>
  <div class="board l-board">
    <slot></slot>

    <footer>
      <ul>
        <li>
          <a
            href="https://twitter.com/psephopaiktes"
            target="brank"
            title="Twitter"
          >
            <SVG symbol="twitter" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://note.com/psephopaiktes" target="brank" title="note">
            <SVG symbol="note" alt="note" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/psephopaiktes"
            target="brank"
            title="GitHub"
          >
            <SVG symbol="github" alt="GitHub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/psephopaiktes"
            target="brank"
            title="Instagram"
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

.board {
  background: color(base);
  margin: 1.6rem;
  min-height: calc(100vh - 3.2rem);
  overflow: hidden;
  border-radius: 1.6rem;
  position: relative;
  padding-bottom: #{24 + 4.8}rem;
  @include max($MD) {
    margin: 0;
    border-radius: 0;
    min-height: calc(100vh - 1.6rem);
  }
  @include max($SM) {
    min-height: 100vh;
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
    a {
      display: block;
      opacity: 0.6;
      margin: 0 1.2rem;
      position: relative;
      &::after {
        content: attr(title);
        display: block;
        pointer-events: none;
        opacity: 0;
        position: absolute;
        bottom: 50%;
        left: calc(50% - 5rem);
        width: 10rem;
        padding: 0.5em 0;
        border-radius: 0.8rem;
        text-align: center;
        font-size: 1.4rem;
        transition: $TRANSITION;
        background: color(main, 0.4);
        color: color(base, 1);
      }
      &:hover {
        opacity: 1;
        &::after {
          opacity: 1;
          bottom: 110%;
        }
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
  }
}
</style>
