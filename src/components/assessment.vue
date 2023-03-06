<template>
    <div class="container">
        <section id="detect">
            <h1>Essay Assessment</h1>
            <div class="row" style="width: 85%; margin:20px auto; text-align: center;">
                <div style="font-size: 20px; margin: 10px">Please <el-button type="success" round style="font-size: 17px" @click="fill">input</el-button> your essay.</div>
                <div style="font-size: 18px; margin: 20px">Evaluate your essay in six dimension: Cohesion Syntax Vocabulary Phraseology Grammar Conventions</div>
                <div>
                    <el-input
                            type="textarea"
                            :rows="10"
                            placeholder="English only."
                            v-model="textarea">
                    </el-input>
                </div>
                <el-row style="margin-top: 20px">
                    <el-button type="primary" round @click="Classification(textarea)">Submit</el-button>
                </el-row>
            </div>

            <el-dialog
                    title="Result"
                    :visible.sync="cla_dialogVisible"
                    width="30%"
            >
                <div class="dialog">
                    <div style="font-weight: bolder; font-size: 18px">Your final result: {{this.final | percent}}</div>
                    <div style="text-align: left; margin-left: 110px; margin-top:20px; font-weight: bolder; font-size: 16px">For Details:</div>
                    <div>Cohesion Score: {{this.cohesion | percent}}</div>
                    <div>SyntaxL Score: {{this.syntaxL | percent}}</div>
                    <div>Vocabulary Score: {{this.vocabulary | percent}}</div>
                    <div>Phraseology Score: {{this.phraseology | percent}}</div>
                    <div>Grammar Score: {{this.grammar | percent}}</div>
                    <div>Conventions Score: {{this.conventions | percent}}</div>
                </div>
<!--                <span>Result：{{label}}<br>预测概率：{{probability | percent}}</span>-->
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cla_dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="cla_dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "detect",
        data(){
            return{
                cla_dialogVisible: false,
                det_dialogVisible: false,
                result:'',
                final : '',
                cohesion:'',
                syntaxL:'',
                vocabulary:'',
                phraseology:'',
                grammar:'',
                conventions:'',
                label:'',
                probability:'',
                traceSrc:'',
                textarea: '',
            }
        },
        filters: {
            percent: function (value) {
                var val = parseFloat(value).toFixed(2);
                return val
            }
        },
        methods:{
            Classification(text){
                let data_reader = new FormData();
                data_reader.append("text",text);
                console.log(data_reader)
                axios.post('https://pdf.xuyijie.icu/ell',data_reader).then((res)=>{
                    console.log("res:",res);
                    var data = res.data;
                    this.final = data["final"];
                    this.cohesion = data["score"][0];
                    this.syntaxL = data["score"][1];
                    this.vocabulary = data["score"][2];
                    this.phraseology = data["score"][3];
                    this.grammar = data["score"][4];
                    this.conventions = data["score"][5];
                    this.cla_dialogVisible = true
                });
            },
            fill(){
                this.textarea = 'Hello, my name is Sun Maojun, and I am a PolyU AMA student. Nice to meet you. ' +
                    'I learnt a lot from AMA563, such as the concepts of CDF, pdf and pmf. ' +
                    'Recognized a lot of discrete and continuous distributions. ' +
                    'Learned about great likelihood estimation. Learned about unbiased estimation, statistics, etc.' +
                    ' Wish I could get an A+ in the final!'
            }

        }
    }
</script>

<style scoped>
    .container{
        margin-top: 100px;
        margin-bottom: 120px;
    }
    .dialog div{
        margin: 10px;
        font-size: 15px;
             }
</style>