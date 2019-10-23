<template>
  <div class="card">
    <div class="profile-content">
      <div class="head">
        <div class="image">
          <div class="headline">
            <section>
              <h1 class="name">Ruslan Kudryavtsev</h1>
            </section>
            <section>
              <h2 class="skills">Web Developer and Project Manager in Limassol, Cyprus</h2>
            </section>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="cbody">
          <section class="ins">
            <a
              href="https://drive.google.com/file/d/1T3g_kriAv5K3uibzuy2zgF1kfH5Zyeyb/view?usp=sharing"
              target="_blank"
              class="btn btn-custom btn-block mb-3"
            >
              <i class="far fa-hand-pointer mr-2"></i>
              <span>Hire me</span>
            </a>
          </section>
          <section class="ins">
            <div>
              <p>Hey there, I’m Ruslan. I’m a web developer living in Limassol, Cyprus. I am a fan of technology, web development, and travel. I’m also interested in food and dogs. You can hire me with a click on the button above.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped lang="scss">
.card {
  width: 620px;
  max-width: -webkit-calc(100vw - 10px);
  max-width: calc(100vw - 10px);
  text-align: center;
  border: none;
  box-shadow: 5px 5px 50px 10px #444444;
}
.cbody {
  padding: 30px 0 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.ins {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
  max-width: 440px;
  width: 100%;
  text-align: left;
}
.image {
  background-image: url('/img/photo.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 60%;
  box-shadow:inset 0 0 0 2000px rgba(77, 77, 77, 0.3);
}

.headline {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  text-shadow: 1px 1px rgb(43, 43, 43);
}
.name {
  font-size: 2em;
}
.skills {
  font-size: 1.4em;
}
.btn-custom {
  background: #383838 radial-gradient(circle, transparent 1%, #383838 50%) center/15000%;
  &:hover {
    background-color: #696363;
    color: #fff;
    background-size: 100%;
    transition: 0.1s;
  }
  color: #fff;
  transition: 0.5s
  
}
</style>
