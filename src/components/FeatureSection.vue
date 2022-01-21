<template>
  <section class="feature">
    <div class="items">
      <div class="big-item">
        <img
          src="../assets/img/jeremy-beadle-qnU-UR0o5X8-unsplash.jpg"
          alt=""
        />
        <div class="content">
          <p class="title">لوکوس ترین ساعت ها</p>
          <a href="#">بیشتر</a>
        </div>
      </div>
      <div class="small-item">
        <img
          src="../assets/img/alex-chambers-TxCbfMc854c-unsplash.jpg"
          alt=""
        />
        <div class="content">
          <p class="title">برند رولکس</p>
          <a href="#">بیشتر</a>
        </div>
      </div>
      <div class="small-item">
        <img src="../assets/img/high_res-51.jpg" alt="" />
        <div class="content">
          <p class="title">انگشتر یاقوت</p>
          <a href="#">بیشتر</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature {
  max-width: 1560px;
  margin: 0 10px;
  margin-top: 100px;
  height: auto;
}

.items {
  display: grid;
  grid-template-columns: 59% 40%;
  grid-template-rows: 1fr 1fr;
  column-gap: 13px;
  row-gap: 13px;
}
.big-item {
  grid-row: span 2;
  width: 100%;
  height: 1015px;
}
.big-item,
.small-item {
  position: relative;
}
.big-item .content,
.small-item .content {
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 10;
  background: transparent;
}
.big-item .content p,
.small-item .content p {
  background: transparent;
  font-size: 1.6rem;
  color: white;
  font-weight: 600;

  margin-bottom: 30px;
}
.big-item .content a,
.small-item .content a {
  font-size: 1rem;
  background: white;
  padding: 8px 20px;
  border-radius: 20px;
  transition: all 0.3s;
}
.big-item .content a:hover,
.small-item .content a:hover {
  background: rgb(218, 216, 216);
  color: #333;
}
.big-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.small-item {
  height: 500px;
  width: 100%;
}
.small-item img,
.small-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/** media query */

@media only screen and (max-width: 960px) {
  .big-item {
    height: 816px;
  }
  .small-item {
    height: 400px;
  }
  .big-item .content p,
  .small-item .content p {
    font-size: 1.4rem;
    margin-bottom: 25px;
  }
  .big-item .content a,
  .small-item .content a {
    font-size: 1rem;
    padding: 5px 14px;
    border-radius: 20px;
  }
}
@media only screen and (max-width: 768px) {
  .items {
    grid-template-columns: 55% 45%;
  }
  .big-item .content,
  .small-item .content {
    right: 24px;
    bottom: 30px;
  }
}
@media only screen and (max-width: 630px) {
  .items {
    display: flex;
    flex-direction: column;
  }
  .big-item,
  .small-item {
    height: 500px;
  }
}
@media only screen and (max-width: 420px) {
  .big-item,
  .small-item {
    height: 400px;
  }
} ;
</style>
