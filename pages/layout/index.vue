<template>
  <div>
      <!-- 顶部导航栏开始 -->
      <nav class="navbar navbar-light">
      <div class="container">
          <nuxt-link class="nav-link" to='/'>conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
           <!-- exact 在'/'才显示高亮 -->
            <nuxt-link class="nav-link" to='/' exact>home</nuxt-link>
          </li>
          <li class="nav-item">
              <nuxt-link class="nav-link" to='/editor'><i class="ion-compose"></i>&nbsp;New Post</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to='/settings'> <i class="ion-gear-a"></i>&nbsp;Settings</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to='/login'>Sign up</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to='/profile/123'>
            <img class="nav-pic">123</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- 顶部导航栏结束 -->

    <!-- 子路由开始 -->
    <nuxt-child/>
    <!-- 子路由结束 -->

    <!-- 底部导航栏开始 -->
      <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
        <!-- 底部导航栏结束-->
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'LayoutIndexs',
    computed:{
      ...mapState(['user'])
    }



}
</script>

<style>

</style>