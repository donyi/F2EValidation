<template>
  <div class="wrap">
        <div class="line"></div>

        <div class="line2"></div>
        <div class="now-box">
            <div class="now"></div>
            <div class="after">
                <i class="fas fa-check-circle check "></i>
            </div>
            <div class="after a"></div>
            <div class="after b"></div>
        </div>

        <h1>General Infomation</h1>
        <p>Tell us who you are!</p>

        <div class="general-box">
            <form action="http://localhost:8080/?#/Picture" @submit="form">
                <label for="">Name<p class="opt">(optional)</p></label>
                <label for="" class="f">Phone*</label>
                <br>
                <input type="text" class="inp" placeholder="Example Name">            
                <input type="number" class="inp c" placeholder="0912 345 678" v-model="phone">
                <p class="err">{{error.phone}}</p>
                <br>

                <label for="">Birth Date<p class="opt">(optional)</p></label>
                <br> 
                <input type="number" placeholder="YYYY" class="inp2">
                <input type="number" placeholder="MM" class="inp2 d">
                <input type="number" placeholder="DD" class="inp2 c">
                <br>
                
                <label for="">address*</label>
                <br>
                <input type="text" class="inp" placeholder="City">
                <input type="text" class="inp c" placeholder="Dist">
                <br>
                <input type="text" class="inp3" placeholder="Address Detail" v-model="detail"> 
                <p class="err">{{error.detail}}</p>
                <br>
                <input class="sub" type="submit" value="SUBMIT & NEXT">
                
            </form>
        </div>
    </div>
</template>

<script>
// import "@/assets/css/general.css"

export default {
  name: 'General',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      phone:null,
      detail:null,
      error:{},
    }
  },
  methods:{
      form:function(e){
        if(this.phone && this.detail)return true;
        this.error=[];
        if(!this.phone) this.error.phone="NUMBERS ONLY"
        if(!this.detail) this.error.detail="REQUIRED FILED"
        e.preventDefault();
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/assets/css/general.css"  >

</style>