<template>
  <header>
    <div class="logo">
      <img src="@/assets/imgs/airbnb-seeklogo.com.svg" alt="" />
      <h1>trippo</h1>
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/stay">Explore</router-link> |
    </div>
    <div class="header-controls">
      <router-link to="/stay/edit">Become a host</router-link>
      <button class="i18n"><img src="../assets/imgs/globe.svg" /></button>
      <router-link to="/profile">Profile</router-link>
    </div>
  </header>
</template>
<script>
export default {};
</script>

<style></style>
