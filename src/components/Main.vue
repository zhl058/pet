<template>
<h1>欢迎回来{{uname}}</h1>
</template>
<script>
    export default {
        data:function(){
            return{
                uname:''
            }
        },
        mounted(){
            var isLogin = sessionStorage.getItem('isLogin');
            if(isLogin){
                var uname = sessionStorage.getItem('uname');
                var uid = sessionStorage.getItem('uid');
                this.uname = uname;
                this.uid = uid;
            }else{

            }
        }
    }
</script>
