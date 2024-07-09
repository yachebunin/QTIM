<template>
  <div class="header">
    <img src="@/assets/logo.svg" alt="QTIM" class="header__logo" />
    <div class="header__right">
      <ul class="header__menu">
        <li class="header__element">Works</li>
        <li class="header__element">About</li>
      </ul>
      <div class="header__lang">
        <img src="@/assets/lang.svg" alt="Language" />
      </div>
      <button class="header__btn">Let’s work</button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 40px;

  &__logo {
    max-height: 25px;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 58px;
    list-style: none;
    padding: 0;
    margin-right: 90px;
  }

  &__element {
    cursor: pointer;
  }

  &__lang {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    margin-right: 16px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  &__btn {
    height: 52px;
    padding: 0 32px;
    background: #101010;
    color: #fff;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    font: inherit;
  }

  &__btn:hover {
    background: #202020;
  }
}
</style>
