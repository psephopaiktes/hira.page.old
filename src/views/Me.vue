<template>
  <section class="l-hero hero">
    <h1>
      Akira HIRATA
      <br />is a Digital Product Designer, <br />and Web Front-end Engineer.
    </h1>

    <a class="scroll" href="#anchorTarget">
      SCROLL
      <SVG symbol="more" />
    </a>

    <footer>
      <ul>
        <li>
          <a
            href="https://twitter.com/psephopaiktes"
            target="brank"
            title="Twitter"
            class="c-tips"
          >
            <SVG symbol="twitter" alt="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://note.com/psephopaiktes"
            target="brank"
            title="note"
            class="c-tips"
          >
            <SVG symbol="note" alt="note" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/psephopaiktes"
            target="brank"
            title="GitHub"
            class="c-tips"
          >
            <SVG symbol="github" alt="GitHub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/psephopaiktes"
            target="brank"
            title="Instagram"
            class="c-tips"
          >
            <SVG symbol="instagram" alt="Instagram" />
          </a>
        </li>
      </ul>
    </footer>
  </section>

  <hr id="anchorTarget" />

  <BoardContainer class="meBoard">
    <h1>ABOUT ME</h1>
    <ul v-for="n of 80" :key="n">
      <li>{{ n }}</li>
    </ul>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Me",
  components: {
    BoardContainer
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  @keyframes wght {
    from {
      font-variation-settings: "wght" 100;
    }
    to {
      font-variation-settings: "wght" 800;
    }
  }
  h1 {
    font: 4rem FuturaNowVar;
    letter-spacing: 0.05em;
    /* animation: wght 1s ease alternate infinite; */
  }
  .scroll {
    position: fixed;
    bottom: 0;
    width: 16rem;
    height: 12rem;
    padding-top: 2rem;
    background: color(base);
    color: color(main);
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    svg {
      fill: currentColor;
      display: block;
      margin: 0 auto;
      width: 3.2rem;
      height: 3.2rem;
    }
  }
  footer {
    position: fixed;
    right: 8rem;
    bottom: 8rem;
    ul {
      display: flex;
    }
    li {
      margin-left: 0.8rem;
    }
    a {
      display: block;
      width: 4.8rem;
      height: 4.8rem;
      background: rgba(#fff, 0.2);
      &:hover,
      &:active {
        background: rgba(#fff, 0.4);
      }
    }
    svg {
      width: 2.8rem;
      height: 2.8rem;
      margin: 1rem;
    }
  }
}

#anchorTarget {
  margin-top: 100vh;
  height: 0;
}
</style>
