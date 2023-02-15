<template>
    <div>
        <section id="banner">
            <div class="banner" style="text-align: left">
                <h1>2022-AMA563-Project</h1>
                <h2>Evaluating language knowledge of ELL students from grades 8-12</h2>
                <h3>Kaggle competition - Feedback Prize - English Language Learning</h3>
                <h3>Our score on Leaderboard: 0.43(public). same with top1 score | ranking 752 out of 2563</h3>
            </div>
        </section>
        <section id="p-words">
            <div class="container" style="width: 85%">
                <div>
                    <div style="text-align: center" class="row">
                        <h1 style="margin-top: 20px">Our Ranking in Public Leaderboard</h1>
                        <div>
                            <img style="margin: 0 auto; width: 90%" :src="ranking" alt="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 wow bounceInLeft">
                        <img :src=dataenhance style="width: 90%">
                    </div>
                    <div class="col-md-6">
                        <h3>Back Translation And Random Exchange</h3>
                        <h1>Data Augmentation</h1>
                        <p style="text-align: left; font-size: 17px">We use two augmentation methods for our data <br><br>
                            The first is random exchange. We randomly exchanged some words with it's synonyms<br><br>
                            The Second is back translation. We translated the sample to French and translated it back to English then.
                            We finally increased the sample from 3910 to 7980.
                        </p>
                        <el-button type="primary" round>read more</el-button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 wow bounceInLeft">
                        <h3>Pretrained Model</h3>
                        <h1>DeBERTaV3</h1>
                        <p style="text-align: left; font-size: 17px">
                            a new pre-trained language model, DeBERTaV3, which improves the original DeBERTa model by replacing mask language modeling (MLM)
                            with replaced token detection (RTD), a more sample-efficient pre-training task. <br><br>
                            We have pre-trained DeBERTaV3 using the same settings as DeBERTa to demonstrate its exceptional performance on
                            a wide range of downstream natural language understanding (NLU) tasks.
                        </p>
                        <el-button type="primary" round>read more</el-button>
                    </div>
                    <div class="col-md-6 wow bounceInRight">
                        <img :src=deberta style="width: 100%;">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 wow bounceInRight">
                        <img :src=mse style="width: 100%;">
                        <img :src=smooth style="width: 100%;">
                    </div>
                    <div class="col-md-6 wow bounceInLeft">
                        <h3>RMSE Loss => SmoothL1 Loss</h3>
                        <h1>SmoothL1 Loss</h1>
                        <p style="text-align: left; font-size: 17px">The function is actually a segmentation function. <br><br> between [-1,1] is the L2 loss, solving L1 is not derivable at 0, and outside the [-1,1] interval is the L1 loss,
                            solving the outlier gradient explosion problem, so it can limit the gradient from two aspects.
                            <br><br>
                            When the error between the predicted value and the true value is too large, the gradient value is not too large.
                            The gradient value is small enough when the error between the predicted and true values is small.
                        </p>
                        <el-button type="primary" round>read more</el-button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 wow bounceInLeft">
                        <h3>Adam + Weight Dacy</h3>
                        <h1>AdamW</h1>
                        <p style="text-align: left; font-size: 17px">L2 regularization and weight decay regularization are equivalent for standard
                            stochastic gradient descent (when rescaled by the learning rate), but as we demonstrate this is not the case for adaptive gradient algorithms, such as Adam. While
                            common implementations of these algorithms employ L2 regularization (often
                            calling it “weight decay” in what may be misleading due to the inequivalence we
                            expose), we propose a simple modification to recover the original formulation of
                            weight decay regularization by decoupling the weight decay from the optimization
                            steps taken w.r.t. the loss function.
                        </p>
                        <el-button type="primary" round>read more</el-button>
                    </div>
                    <div class="col-md-6 wow bounceInRight">
                        <img :src=adamw style="width: 80%;">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 wow bounceInLeft">
                        <img :src=COS style="width: 100%;">
                    </div>
                    <div class="col-md-6 wow bounceInRight">
                        <h3>Warm UP</h3>
                        <h1>Cosine Annealing</h1>
                        <p style="font-size: 17px; text-align: left">Cosine Annealing is a type of learning rate schedule that has the effect of starting with a large learning rate that is relatively rapidly decreased to a minimum value before being increased rapidly again.
                            <br><br>The resetting of the learning rate acts like a simulated restart of the learning process and the re-use of good weights as the starting point of the restart is referred to as a "warm restart" in contrast to a "cold restart" where a new set of small random numbers may be used as a starting point.
                            It has a benefit of escaping the local minimizer.
                        </p>
                        <el-button type="primary" round>read more</el-button>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import dataenhance from "@/assets/picture/data_augmentation.png"
    import deberta from "@/assets/picture/deberta.png"
    import detect from "@/assets/picture/train_batch0.jpg"
    import Loss from "@/assets/picture/FocalLoss.png"
    import COS from "@/assets/picture/cosine.png"
    import mse from "@/assets/picture/smoothl1.png"
    import smooth from '@/assets/picture/loss.jpg'
    import adamw from '@/assets/picture/adamw2.png'
    import ranking from '@/assets/picture/ranking.jpg'
    export default {
        name: 'index',
        data(){
            return{
                dataenhance,
                deberta,
                Loss,
                COS,
                detect,
                mse,
                smooth,
                adamw,
                ranking
            }
        }
    }

</script>

<style scoped>
    /*轮播图*/
    .banner {
        width: 100%;
        height: 380px;
        background: url("../../src/assets/picture/banner.png") rgba(33, 36, 43, 0.5);
        background-blend-mode: multiply;
    }
    .banner h1{
        padding-left: 100px;
        padding-top: 100px;
        color: white;
    }
    .banner h2{
        padding-left: 100px;
        padding-top: 10px;
        color: white;
    }
    .banner h3{
        padding-left: 100px;
        padding-top: 10px;
        color: white;
    }
    #banner .carousel-indicators li{
        cursor: copy;
        border-radius: 3px;
        opacity: 75%;
        margin: 5px;
    }
    /*box*/

    #box {
        padding: 80px 0;
        text-align: center;
        border-bottom:solid silver 1px ;
    }

    #box .col-md-3 {
        padding: 15px;
    }

    #box .col-md-3:hover {
        background: #f1f1f1;
        box-shadow: 1px 1px 4px #ccc;
    }

    #box a {
        color: #212121;
        text-decoration: none;
    }

    #box img {
        margin: 0 auto;
    }

    #box h3 {
        font-weight: bold;
    }
    /*sign-up*/
    #sign-up{
        padding: 40px 60px;
        background-color: #00796b;
        text-align: center;
    }
    #sign-up a{
        width: 160px;
        height: 50px;
        margin: 30px 20px ;
    }

    /*p-words*/
    #p-words{
        padding: 50px 0 40px 0;
    }
    #p-words .col-md-6{
        padding: 70px 50px 70px 50px;
    }
    #p-words h1{
        font-weight: bold;
    }
    #p-words p{
        font-size: 15px;
        margin: 20px auto;
    }



    /*页脚*/
    #contact {
        color: #ffffff;
    }

    .filter { /*页脚背景*/
        width: 100%;
        height: 100%;
        background: rgba(33, 33, 33, 1);
        padding: 90px 0 20px 0;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    #contact h2 {
        font-weight: bold;
        margin-bottom: 25px;
        margin-top: 0;
    }

    #contact p {
        line-height: 25px;
        margin-bottom: 20px;
    }

    #contact .form-control {
        border: none;
        border-radius: 25px;
        height: 30px;
        margin-bottom: 20px;
    }

    #contact .col-md-2 a {
        color: white;
    }

    #contact textarea.form-control {
        height: auto;
    }

    #contact input[type="submit"] {
        background: #40d2b1;
        color: #ffffff;
        font-weight: bold;
        transition: all 0.3s;
    }

    #contact input[type="submit"]:hover {
        background: rgb(44, 142, 120);
    }

    #contact .col-md-4 h2 {
        text-align: center;
    }

    .foot_info{
        padding: 0 0 0 0;
    }

    .foot_info .info {
        text-align: right;
    }

    .foot_info .info span {
        line-height: 50px;
        margin-right: 10px;
        color: white;
    }

    .foot_info span:hover {
        color: rgb(44, 142, 120);
    }

    .link_icon{
        padding: 0 0 0 0;
    }

    .link_icon span { /*四个图标*/
        font-size: 30px;
        margin-right: 15px;
        color: gray;
    }

    .link_icon span:hover {
        color: rgb(44, 142, 120);
    }

    /*最底部Copyright*/
    #footer {
        border-top: 2px solid gray;
        width: 100%;
        height: 50px;
        background: rgba(33, 33, 33, 1);
    }

    #footer span {
        font-size: 12px;
        color: white;
        text-align: center;
        line-height: 50px;
    }

    /*消除a标签下划线*/
    #contact a, .info a, .link_icon a {
        text-decoration: none;
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>