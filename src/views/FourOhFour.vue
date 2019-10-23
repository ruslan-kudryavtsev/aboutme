<template>
  <div class="card">
    <div class="card-body">
      <h1>404</h1>
      <h3>You lost?</h3>
      <p>taking you home in {{timer}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  data(){
      return {
          timer: 5
      }
  },
  created(){
      setInterval(() => {
          this.timer--
      }, 1000);
    setTimeout(() => {
        this.$router.replace('/')
    }, 5000);
  }
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
