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
            <div class="after b">
                <i class="fas fa-check-circle check "></i>
            </div>
        </div>

        <h1>Payment Method</h1>
        <p>Add your credit card infomation!</p>
        
        <div class="method-box">
            <form action="http://localhost:8080/?#/Congratulations" @submit="form">
                <label for="">Card Number</label>
                <br>
                <input type="number" placeholder="1234 5678 9012 3456" class="inp3" v-model="visa">
                <p class="err">{{error[0]}}</p>
                <br>

                <label for="">Cardholder Name</label>
                <label for="" class="e">Bank Name</label>
                <br>
                <input type="text" placeholder="EXAMPLE NAME" class="inp"> 
                <input type="text" placeholder="EXAMPLE BANK" class="inp c">
                <br>

                <label for="">CVV</label>
                <label for="" class="f">Expire Date</label>
                <br>
                <input type="number" placeholder="123" class="inp2">
                <input type="number" placeholder="MM" class="inp2 d">
                <input type="number" placeholder="DD" class="inp2 c">

                <input class="sub" type="submit" value="DONE">
            </form>
        </div>

    </div>
</template>

<script>
// import "@/assets/css/method.css"

export default {
  name: 'Method',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visa:null,
      error:[],
    }
  },
  methods:{
      form:function(e){
          if(this.visa)return true;
          this.error=[];
          if(!this.visa)this.error.push("INVALID NUMBER")
          e.preventDefault();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/assets/css/method.css">
</style>