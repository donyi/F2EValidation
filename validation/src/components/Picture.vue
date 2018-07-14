<template>
  <div class="wrap">
        <div class="line"></div>

        <div class="line2"></div>
        <div class="now-box">
            <div class="now"></div>
            <div class="after">
                <i class="fas fa-check-circle check "></i>
            </div>
            <div class="after a">
                <i class="fas fa-check-circle check "></i>
            </div>
            <div class="after b"></div>
        </div>

        <h1>Update Profile Picture</h1>
        <p>We wanna know you more!</p>

        <div class="prcture-box">
            <input type="file" accept="image/gif, image/jpeg, image/png">
            <div class="prcture">
                <i class="fas fa-images"></i>
                <div>UPLOAD UP TO 3 PHOTOS
                    MAX SIZE: 150*150px</div>
            </div>
            <br>
            <button>SUBMIT & NEXT</button>
        </div>
    </div>
</template>

<script>
// import "@/assets/css/picture.css"

export default {
  name: 'Picture',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/assets/css/picture.css">
</style>