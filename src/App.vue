<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/dynamic-component/a">Data: A</router-link>
      <router-link to="/dynamic-component/b">Data: B</router-link>
      <router-link to="/dynamic-component/c">Data: C</router-link>
      <router-link to="/dynamic-component/x">Data: X</router-link>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px 10px;
  position: relative;
}
#nav a:not(:last-child)::after {
  content: '|';
  display: inline-block;
  position: absolute;
  right: -3px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
