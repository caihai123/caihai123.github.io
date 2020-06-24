<template>
  <div id="app">
    <full-page ref="fullpage" :options="options">
      <div id="section-1" class="section">
        <h1>I am iron man</h1>
        <h2>蔡海的个人网站</h2>
        <ul>
          <li>
            <a
              class="section-1-button"
              target="_black"
              href="https://caihai123.com/documents/"
              >个人文档</a
            >
          </li>
          <li>
            <a
              class="section-1-button"
              target="_black"
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
        sectionsColor: [
          "#2d7586",
          "#ff5f45",
          "#0798ec",
          "#fc6c7c",
          "grey",
          "#0798ec",
        ],
        // navigation: true,
      },
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
h1,
h2,
ol,
ul {
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #1f2f3d;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
}
</style>
