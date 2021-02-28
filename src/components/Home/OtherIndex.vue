<template>
  <ul class="otherIndex">
    <li class="me">
      <router-link to="/me">
        <SVG symbol="me" />
        ABOUT ME
        <SVG symbol="next" class="u-showTabSp" />
      </router-link>
    </li>
    <li class="contact">
      <router-link to="/contact">
        <SVG symbol="contact" />
        お仕事のご依頼
        <SVG symbol="next" class="u-showTabSp" />
      </router-link>
    </li>
    <li class="follow u-hideTabSp">
      <h3>Follow Blog.</h3>
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
          <a href="http://fb.me/webablog" target="_blank" rel="noopener">
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
          <a
            href="http://hira.page/blog/index.xml"
            target="_blank"
            rel="noopener"
          >
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
  margin-top: 1.6rem;
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(3, 1fr);
  @include max($MD) {
    grid-template-columns: 1fr;
  }
  > li {
    border: 1px solid color(main, 0.1);
    border-radius: 3.2rem 0.8rem;
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
    transition: $TRANSITION;
    will-change: transform;
    @media (prefers-color-scheme: light) {
      box-shadow: 0 1.6rem 6.4rem -2rem color(main, 0.3);
    }
    a {
      transition: inherit;
      color: color(base);
    }
    svg {
      width: 4.8rem;
      height: 4.8rem;
    }
    &:hover,
    &:active {
      transform: scale(1.02);
      a {
        letter-spacing: 0.08em;
      }
    }

    @include max($MD) {
      background: none;
      box-shadow: none;
      border: none;
      border-radius: 0;
      border-radius: 1.2rem;
      font-size: 1.8rem;
      background: color(main, 0.05);
      a {
        flex-direction: row;
        color: color(main);
        padding: 1.6rem 1.2rem 1.6rem 1.8rem;
      }
      svg {
        width: 3.2rem;
        height: 3.2rem;
        &:first-child {
          margin-right: 1.6rem;
        }
        &:last-child {
          opacity: 0.2;
          margin-left: auto;
        }
      }
      &:hover,
      &:active {
        transform: none;
      }
    }
  }
  .me,
  .contact {
    background: color(main, 0.8);
  }
  .follow {
    @include max($MD) {
      margin-top: 3.2rem;
      border-radius: 1.6rem;
    }
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
      width: 3.2rem;
      height: 3.2rem;
    }
  }
}
</style>
