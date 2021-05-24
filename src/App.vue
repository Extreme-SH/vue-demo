<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  created () {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-z16/assets/',
        tagMode: false,
        debug: false,
        model: { jsonPath: '/static/live2dw/live2d-widget-model-z16/assets/z16.model.json' },
        display: { position: 'left', width: 350, height: 500},
        mobile: { show: true },
        log: false
      })
    }, 1000)
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
* {
  margin: 0px;
  padding: 0px;
}
html,body {
  width: 100%;
  height: 100%;
}
</style>
