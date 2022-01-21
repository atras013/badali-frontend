<template>
  <footer class="footer">
    <div class="container">
      <div class="items row">
        <div class="brand-slide">
          <div class="brand-info d-flex row gap-4">
            <div class="brand-log d-flex">
              <img class="logo-img" src="../assets/logo.png" alt="" />
              <p>بدلی</p>
            </div>
            <div class="about-brand">
              <p>
                محصولاتی خاص و متنوع باری تمامی سلیقه ها برند ما جز بهترین برند
                های حال حاضر مارکت است
              </p>
            </div>

            <div class="social-media">
              <a href=""> <ion-icon name="logo-instagram"></ion-icon></a>
              <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
              <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
            </div>
          </div>
        </div>
        <div class="menu-slide">
          <div class="footer-menu">
            <div class="header"><h3>منو</h3></div>
            <ul>
              <li><a href="#"> محصولات</a></li>
              <li><a href="#"> درباره ی ما</a></li>
              <li><a href="#"> تماس با ما</a></li>
              <li><a href="#"> وبلاگ</a></li>
            </ul>
          </div>
        </div>
        <div class="email-slide">
          <div class="contact-with-us d-flex row align-items-center">
            <div class="header">
              <h3>تماس باما</h3>
            </div>
            <div class="content">
              <div class="phone-info">
                <span> <ion-icon name="call-outline"></ion-icon></span>
                <div class="number">
                  <p class="mobile-number">091123423423</p>
                  <p>0133434345</p>
                </div>
              </div>
              <div class="email">
                <span> <ion-icon name="mail-outline"></ion-icon></span>
                <p class="email-address">badali@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
* {
  background: none;
  padding: 0;
  margin: 0;
}
.footer {
  height: auto;
  padding: 0;
  margin: 0 auto;
  margin-top: 100px;
  max-width: 1600px;
  background: rgb(24, 23, 23);
  overflow: hidden;
  overflow-x: hidden;
}
.footer .items {
  display: grid;
  grid-template-columns: 25% 50% 25%;
}
.container {
  max-width: 1600px;
  padding: 50px 20px;
  margin: 0;
  height: auto;
}
.items {
  margin: 0;
  width: 100%;
}
.logo-img {
  width: 80px;
  height: 50px;
}

.brand-info {
  font-size: 1.2rem;
  color: #bababa;
}
.brand-info .brand-log p {
  font-size: 1.6rem;
  color: #fff;
  margin-right: 8px;
}

.social-media {
  margin-top: 20px;
}
.social-media ion-icon {
  font-size: 1.8rem;
  color: #fff;
  margin-left: 14px;
}
.footer .menu-slide {
  display: flex;
  justify-content: center;
}
.social-media ion-icon:hover {
  color: #fa5252;
}
.footer-menu .header {
  margin-bottom: 45px;
  color: #fff;
}
.footer-menu ul {
  display: flex;
  gap: 30px;
  list-style: none;
}
.footer-menu li a {
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s;
}
.footer-menu li a:hover {
  color: #fa5252;
}
.contact-with-us {
  color: #fff;
}
.contact-with-us .content {
  display: flex;
  flex-direction: column;
}
.contact-with-us .phone-info {
  margin-bottom: 20px;
}
.contact-with-us .header h3 {
  margin-bottom: 40px;
}
.contact-with-us ion-icon {
  color: #fcd462;
  font-size: 2.6rem;
}
.contact-with-us .number {
  font-size: 1.2rem;
  margin-right: 0;
}

.contact-with-us .email-address {
  margin-right: 0;
}

.contact-with-us .email-address {
  font-size: 1.2rem;
}
.contact-with-us .phone-info,
.contact-with-us .email {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

/** media query */
@media only screen and (max-width: 1024px) {
  .brand-info {
    font-size: 1rem;
  }
  .contact-with-us .number,
  .contact-with-us .email-address {
    font-size: 1.1rem;
  }
  .logo-img {
    width: 60px;
    height: 40px;
  }
}
@media only screen and (max-width: 868px) {
  .footer .items {
    display: flex;
    row-gap: 50px;
  }
  .email-slide {
    grid-row: 1;
    grid-column: 2 / 3;
    justify-content: center;
  }
  .footer-menu .header {
    margin-bottom: 35px;
    color: #fff;
  }
  .footer .menu-slide {
    display: block;
  }
  .brand-slide {
    display: flex;
  }
  .social-media {
    margin-top: 0;
  }
}
@media only screen and (max-width: 440px) {
  .footer .container {
    padding-right: 10px;
  }
  .footer-menu ul {
    gap: 18px;
    font-size: 1rem;
  }
  .footer-menu ul li a {
    font-size: 1rem;
  }
  .phone-info .number {
    font-size: 1rem;
  }
}
</style>
