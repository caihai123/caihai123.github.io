<template>
  <div id="app">
    <full-page ref="fullpage" :options="options">
      <div id="section-1" class="section top">
        <h1>I am iron man</h1>
        <h2>蔡海的个人网站</h2>
        <ul>
          <li>
            <a
              class="section-1-button"
              target="ducument"
              href="https://caihai123.com/documents/"
              >个人文档</a
            >
          </li>
          <li>
            <a
              class="section-1-button"
              target="github"
              href="https://github.com/caihai123/"
              >GitHub</a
            >
          </li>
        </ul>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      options: {
        // sectionsColor: ["#ff5f45", "#0798ec", "#fc6c7c", "grey", "#0798ec"],
        // navigation: true,
      },
    };
  },
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f2f3d;
}
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  color: #1f2f3d;
}
h1 {
  font-size: 8em;
  font-weight: 900;
  margin-bottom: 0.25em;
  color: #fff;
}
h2 {
  font-size: 1.73em;
  font-weight: 100;
  margin: -10px 30px 10px;
  color: rgba(255, 255, 255, 0.7);
}
#section-1 li {
  display: inline-block;
  margin: 1.25em 0.3em;
}
.section-1-button {
  height: 50px;
  line-height: 50px;
  width: 120px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  display: block;
  color: #0798ec;
}

@media (min-width: 768px) and (max-width: 1024px) {
  h1 {
    font-size: 5em;
  }
}
@media screen and (max-width: 767px) {
  h1 {
    font-size: 2.4em;
  }
}
</style>
<style scoped>
@-webkit-keyframes scrollBad {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -320px;
  }
}
@-moz-keyframes scrollBad {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -320px;
  }
}
@keyframes scrollBad {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -320px;
  }
}
.top {
  background: -webkit-linear-gradient(left, #ff5f45 50%, #0798ec 0);
}
#section-1 >>> .fp-tableCell {
  background-image: url("~@/assets/codepen.svg");
  background-position: center center;
  background-size: 500px;
  -webkit-animation: scrollBad 5s linear infinite;
  -moz-animation: scrollBad 5s linear infinite;
  animation: scrollBad 5s linear infinite;
}
</style>
