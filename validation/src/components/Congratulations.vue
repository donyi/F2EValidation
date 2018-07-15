<template>
  <div class="wrap">
        <div class="line"></div>

        <div class="line2"></div>
        <div class="now-box">
            <div class="now">
                <i class="fas fa-check-circle check "></i>
            </div>
            <div class="after">
                <i class="fas fa-check-circle check"></i>
            </div>
            <div class="after a">
                <i class="fas fa-check-circle check"></i>
            </div>
            <div class="after b">
                <i class="fas fa-check-circle check"></i>
            </div>
        </div>

        <h1>Congratulations</h1>
        <p>Now you’re one of us!</p>

        <i  class="fas fa-smile smile"></i>

        <p class="prompt">Redirected to homepage after {{t}} seconds…</p>
        
    </div>
</template>

<script>
//import "@/assets/css/congratulations.css"

export default {
  name: "Congratulations",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      t:5,
      a:null,
    };
  },
  methods: {
    //date() {
      //var t = 5;
      //var timer = setInterval(function() {
        //t--;
        //if(t=0) this.$router.push({path: '/'});
      //}, 1000);
    //   t=setTimeout("timedCount()",1000)
    //),
    myFunction() {
        
        var vm=this;
        setInterval(function(){        
        vm.t--  
        console.log('test')
                      
        if(vm.t<=0){
          clearTimeout(vm.a);
          vm.$router.push({path: '/'})
          
          }
            
         },1000);
    }
  },
  mounted() {
    this.a = setTimeout(this.myFunction(), 5000);
    //this.$router.push({path: '/'})
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/assets/css/congratulations.css">
</style>