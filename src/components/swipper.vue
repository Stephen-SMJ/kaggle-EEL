<template>
    <div class="container">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src='@/assets/picture/banner1.png'>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src='@/assets/picture/banner2.png'>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src='@/assets/picture/banner3.png'>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    // import banner1 from "@/assets/picture/banner1.png"
    // import banner2 from "@/assets/picture/banner2.png"
    // import banner3 from "@/assets/picture/banner3.png"
    export default {
        name: 'swipper',
        // data(){
        //     return{
        //         banner1,
        //         banner2,
        //         banner3
        //     }
        // }
    }
</script>

<style scoped>
    .container{
        margin: 0 18px;
    }
    .mint-swipe{height:110px;color:#fff;border-radius: 10px;}
    .mint-swipe-items-wrap{}
    .mint-swipe-item{
        text-align: center;
    }
    .mint-swipe  img{
        width:100%;
        height:100%;
    }
</style>