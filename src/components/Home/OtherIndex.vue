<template>
  <ul class="otherIndex">
    <li class="me">
      <router-link to="/me">ABOUT ME</router-link>
    </li>
    <li class="contact">
      <router-link to="/contact">
        <SVG symbol="contact" />
        お仕事のご依頼
      </router-link>
    </li>
    <li class="follow">
      <h3>Follow This Blog.</h3>
      <ul>
        <li>
          <a
            href="https://twitter.com/psephopaiktes"
            target="_blank"
            rel="noopener"
          >
            <SVG symbol="twitter" alt="twitter" />
          </a>
        </li>
        <li>
          <a href="http://fb.me/hira.page" target="_blank" rel="noopener">
            <SVG symbol="facebook" alt="facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fhira.page%2Fblog%2Findex.xml"
            target="_blank"
            rel="noopener"
          >
            <SVG symbol="feedly" alt="feedly" />
          </a>
        </li>
        <li>
          <a href="http://hira.page/blog/index.xml" target="_blank">
            <SVG symbol="rss" alt="rss" />
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "OtherIndex"
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.otherIndex {
  margin-top: 2rem;
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(0rem, 32rem));
  > li {
    border: 1px solid color(main, 0.1);
    border-radius: 3.2rem;
    overflow: hidden;
    a {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  > li:not(.follow) {
    border-radius: 3.2rem 0.8rem;
    transition: $TRANSITION;
    will-change: transform;
    @media (prefers-color-scheme: light) {
      box-shadow: 0 1.6rem 6.4rem -2rem color(main, 0.3);
    }
    a {
      transition: inherit;
    }
    &:hover,
    &:active {
      transform: scale(1.02);
      a {
        letter-spacing: 0.08em;
      }
    }
  }
  .me {
    background: url(https://source.unsplash.com/daily?cat&orientation=landscape);
    background-size: cover;
    a {
      color: color(base);
    }
  }
  .contact {
    background: color(theme);
    a {
      color: color(base);
    }
    svg {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
  .follow {
    h3 {
      border-bottom: 1px solid rgba(var(--color-main), 0.1);
      text-align: center;
      padding-bottom: 1.6rem;
      margin-top: 1.6rem;
      font-size: 1.8rem;
      color: color(main, 0.6);
      font-weight: 500;
    }
    ul {
      display: flex;
      padding: 1.2rem 1.6rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    li {
      margin: 0.8rem;
    }
    a {
      opacity: 0.6;
      transition: $TRANSITION;
      &:hover,
      &:active {
        opacity: 0.9;
      }
    }
    svg {
      fill: color(main);
      width: 4rem;
      height: 4rem;
    }
  }
}
</style>
