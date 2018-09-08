<template>
<div class="login_container">
    <div class="login_box">
        <p>Pet System宠物店会员管理系统</p>
        <div>
            <div><input type="text"  placeholder="Username" v-model="uname"></div>
            <div><input type="password"  placeholder="Password" v-model="password"></div>
            <div>
                <span>Remember password</span>
                <input type="checkbox" >
            </div>
            <div>
                <button class="btn" @click.prevent="doLogin">Sign in</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import Golobal from '../assets/js/url.js'
import qs from 'qs'
    export default {
        data:function(){
            return{
                uname:"",
                password:""
            }
        },
        methods:{
            doLogin:function(){
                var url = Golobal.baseUrl + '/user/login.php';
                var obj = {uname:this.uname,upwd:this.password};
                axios.post(url,qs.stringify(obj)).then(res=>{
                    var data = res.data;
                    if(data.code!==200){
                        alert('请检查用户名和密码');
                        return;
                    }
                    sessionStorage.setItem('uid',data.data.uid);
                    sessionStorage.setItem('isLogin',true);
                    sessionStorage.setItem('uname',data.data.uname);
                    this.$router.push('/main');
                })
                // sessionStorage.setItem('isLogin',false);
                // this.$router.push('/main')
            }
        },
        mounted(){
            console.log(Golobal.baseUrl);
        }
    }
</script>
<style scoped>
.login_container{
    height: 100%;
    width: 100%;
    position: fixed;
    background:rgb(101, 178, 166);
}
.login_box{
    width: 500px;
    height: 300px;
    /* border: 1px solid red; */
    position: absolute;
    top:50%;
    left: 50%;
    margin: -200px 0 0 -250px;
    text-align: center;
    color: #fff;
}
.login_box>p{
    font-size: 30px;
}
.login_box>div{
    width: 400px;
    margin: 30px auto;
}
.login_box>div div{
    margin-top: 20px;
}
.login_box input:not([type="checkbox"]){
    padding-left: 40px;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    outline: 0;
    border: 0;
    background: #fff url('../assets/img/login/user_name.png') no-repeat 10px center;
    background-size:20px; 
}
.login_box>div>div:nth-child(2)>input{
    background-image: url('../assets/img/login/password.png')
} 
.login_box button{
    background:rgb(231, 180, 89);
    color: #fff;
    width: 300px;
    border-radius: 10px;
    height: 40px;
}
.login_box button:hover{
    background:#eda246;
}
.login_box>div>div:nth-child(3){
    text-align: right;
    padding-right: 4px;
}
.login_box input[type="checkbox"]{
    position: relative;
    bottom: 2px;
}
</style>

