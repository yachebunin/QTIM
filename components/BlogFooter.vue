<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__left">
        <p class="footer__question">Is there a project?</p>
        <h1 class="footer__title">Let’s work<br />together</h1>
      </div>
      <div class="footer__right">
        <div class="footer__contact">
          <p>For all questions</p>
          <a class="footer__contact-link" href="tel:+79202780068">+7 (920) 278-00-68</a>
          <a class="footer__contact-link" href="mailto:qtim@agency.com">qtim@agency.com</a>
        </div>
        <div class="footer__office">
          <p>Office in Russia</p>
          <address>139 Ruben Station Lake<br />Drew, NM 52678</address>
          <img src="https://img.icons8.com/material-outlined/24/000000/telegram-app.png" alt="Telegram Icon" class="footer__icon" />
        </div>
        <div class="footer__office">
          <p>Office in Dubai</p>
          <address>139 Ruben Station Lake<br />Drew, NM 52678</address>
          <img src="https://img.icons8.com/material-outlined/24/000000/telegram-app.png" alt="Telegram Icon" class="footer__icon" />
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__socials">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Telegram</a>
      </div>
      <div class="footer__button">
        <button>Go</button>
      </div>
      <div class="footer__links">
        <a href="#">Behance</a>
        <a href="#">LinkedIn</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  background-color: #E0BBFF;
  color: #000;
  padding: 140px 112px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;

  &__content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 140px;
  }

  &__left {
    flex: 1;
    text-align: left;
    margin-right: 20px;
  }

  &__question {
    font-size: 16px;
    margin-bottom: 10px;
  }

  &__title {
    font-size: 64px;
    font-weight: bold;
    line-height: 1.2;
    margin: 0;
    text-decoration: underline;
    text-decoration-thickness: 0.05em;
  }

  &__right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  &__contact,
  &__office {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-align: left;

    p {
      margin-bottom: 12px;
    }
  }

  &__contact-link {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }

  &__office address {
    margin: 5px 0;
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin-top: 8px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 40px;
  }

  &__socials,
  &__links {
    display: flex;
    gap: 20px;
  }

  &__button {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%) translateY(70%);
      width: 358px;
      height: 358px;
      background-color: #000;
      border-radius: 50%;
    }

    button {
      position: absolute;
      left: 50%;
      bottom: 25px;
      transform: translateX(-50%);
      z-index: 2;
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
    }
  }

  a {
    text-decoration: underline;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
