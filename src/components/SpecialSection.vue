<template>
  <section class="special-section">
    <div class="special-collection">
      <div class="watch-collection">
        <img
          src="../assets/img/lloyd-dirks-0vsk2_9dkqo-unsplash (1).jpg"
          alt=""
        />
        <div class="content">
          <p class="title">جدیدترین ساعت های هوشمند</p>
          <a href="" class="watch-link">بیشتر</a>
        </div>
      </div>
      <div class="jewelry-collection">
        <img
          src="../assets/img/kylefromthenorth-Dcw_Z5o7ovY-unsplash (1).jpg"
          alt=""
        />
        <div class="content">
          <p class="title">جدیدترین جواهرات لویس</p>
          <a href="" class="watch-link">بیشتر</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.special-section {
  max-width: 1560px;
  margin: 0 10px;
  margin-top: 100px;
  height: auto;
}

.special-collection {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}

.watch-collection,
.jewelry-collection {
  position: relative;
  width: 100%;
  height: 650px;
  overflow: hidden;
}
.watch-collection img,
.jewelry-collection img {
  height: 650px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.watch-collection .content,
.jewelry-collection .content {
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 10;
  background: transparent;
}
.watch-collection .content p,
.jewelry-collection .content p {
  background: transparent;
  font-size: 1.4rem;
  color: white;
  font-weight: 600;

  margin-bottom: 30px;
}
.watch-collection .content a,
.jewelry-collection .content a {
  font-size: 1.2rem;
  background: white;

  opacity: 1.7;
  padding: 8px 20px;
  border-radius: 20px;
  transition: all 0.3s;
}
.watch-collection .content a:hover,
.jewelry-collection .content a:hover {
  background: rgb(218, 216, 216);
  color: #333;
}

/** media query */

@media only screen and (max-width: 960px) {
  .watch-collection,
  .jewelry-collection {
    height: 500px;
  }
  .watch-collection img,
  .jewelry-collection img {
    height: 500px;
  }
}
@media only screen and (max-width: 768px) {
  .watch-collection .content,
  .jewelry-collection .content {
    right: 20px;
    bottom: 30px;
  }
  .watch-collection .content p,
  .jewelry-collection .content p {
    background: transparent;
    font-size: 1.3rem;

    margin-bottom: 24px;
  }
  .watch-collection .content a,
  .jewelry-collection .content a {
    font-size: 1.2rem;
    padding: 2px 14px;
  }
}
@media only screen and (max-width: 650px) {
  .container {
    padding-left: 10px;
  }
  .special-collection {
    display: flex;
    flex-direction: column;
  }
  .watch-collection {
    margin-bottom: 20px;
  }
  .watch-collection,
  .jewelry-collection {
    height: 500px;
    width: 100%;
  }
}
@media only screen and (max-width: 420px) {
  .container {
    padding-left: 10px;
  }
  .special-collection {
    flex-direction: column;
  }
  .watch-collection {
    margin-bottom: 20px;
  }
  .watch-collection,
  .jewelry-collection {
    height: 420px;
    width: 100%;
  }
  .watch-collection img,
  .jewelry-collection img {
    height: 100%;
  }
}
</style>
