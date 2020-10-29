<template>
  <div class="board">
    <slot></slot>

    <footer>
      <ul>
        <li>
          <a href="https://twitter.com/psephopaiktes" target="brank">
            <img svg-inline src="@/assets/icon/sns/twitter.svg" role="img" />
            Twitter
          </a>
        </li>
        <li>
          <a href="https://note.com/psephopaiktes" target="brank">
            <img svg-inline src="@/assets/icon/sns/note.svg" />
            note
          </a>
        </li>
        <li>
          <a href="https://github.com/psephopaiktes" target="brank">
            <img svg-inline src="@/assets/icon/sns/github.svg" />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/psephopaiktes" target="brank">
            <img svg-inline src="@/assets/icon/sns/instagram.svg" />
            Instagram
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
  overflow: hidden;
  border-radius: 1.6rem;
}

.board > footer {
  margin-top: 4.8rem;
  color: color(theme);
  background: color(theme, 0.1);
  > ul {
    a {
      display: block;
      /* @include textHidden; */
    }
    svg {
      fill: color(theme);
    }
  }
  > p {
    margin-top: 3.2rem;
    text-align: center;
  }
}
</style>
