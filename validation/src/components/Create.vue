<template>
  <div class="wrap">
        <div class="line"></div>

        <div class="line2"></div>
        <div class="now-box">
            <div class="now"></div>
            <div class="after"></div>
            <div class="after a"></div>
            <div class="after b"></div>
        </div>

        <h1>Create Account</h1>
        <p>Glad to see you here!</p>
        
        <div class="create-box">
        <label for="">Account</label>
        <br>
        <input type="text" placeholder="example@email.com">
        <br>
        <label for="">Password</label>
        <br>
        <input type="text" placeholder="●●●●●●●●">
        <br>
        <label for="">Comfirm Password</label>
        <br>
        <input type="text" placeholder="●●●●●●●●">
        </div>  
        
        <div class="button-box">
            <button>SUBMIT & NEXT</button>            
        </div>
    </div>
</template>

<script>
import '@/assets/css/create.css';

export default {
  name: 'Create',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
