<template>
    <div>
        <section id="aboutus">
            <div>
                <H2 style="margin:60px 10px 60px 10px" >This project is used to commemorate 5 members of AMA563 2022 class</H2>
                <div><img :src=team alt="" width="50%"></div>
            </div>
        </section>

        <section id="contact" style="margin:50px auto; text-align: center;">
            <h1>Contact Us</h1>
            <div>or by email: maojun.sun@connect.polyu.hk</div>
            <div style="text-align:center; margin:20px auto; width:700px">
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                    <el-form-item label="Your name" placeholder="Your organization name">
                        <el-input v-model="sizeForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Content" aria-placeholder="Content you want to sent">
                        <el-input type="textarea" :rows="8" v-model="sizeForm.content"></el-input>
                    </el-form-item>
                    <el-row style="margin-top: 20px">
                        <el-button type="primary" round >Submit</el-button>
                    </el-row>
                </el-form>

            </div>

        </section>
    </div>
</template>

<script>
    import team from "@/assets/picture/team.png"
    export default {
        name: 'help',
        data(){
            return{
                team,
                sizeForm: {
                    name: '',
                    content:'',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }

    }
</script>
