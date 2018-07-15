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
          <form action="http://localhost:8080/?#/General" @submit="form" >
            <label for="">Account</label>            
            <br>
            <input type="text" placeholder="example@email.com" v-model="account">
            <p class="err">{{error.account}}</p>
            <br>
            <label for="">Password</label>
            <br>
            <input type="text" placeholder="●●●●●●●●" v-model="password">
            <p class="err">{{error.password}}</p>
            <br>
            <label for="">Comfirm Password</label>
            <br>
            <input type="text" placeholder="●●●●●●●●" v-model="comfirm">
            <p class="err">{{error.Comfirm}}</p>
            <input class="sub" type="submit" value="SUBMIT & NEXT">
          </form>
        </div>  
        
        
    </div>
</template>

<script>
// import '@/assets/css/create.css';

export default {
  name: 'Create',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      account:null,
      password:null,
      comfirm: '',
      error:{}
      }
    },
    methods:{
        form:function(e){
          if(this.account && this.password && this.comfirm)
          if(this.password == this.comfirm)return true;
          this.error=[];
          if(!this.account) this.error.account = "Account required"
          if(!this.password) this.error.password = "Password required"
          if(!this.comfirm) this.error.Comfirm="Comfirm required"
          
          e.preventDefault();
        }    
      },
      mounted(){
        console.log(this.msg)
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/assets/css/create.css" >

</style>
