<template>
  <div id="app" class="ma-10">
  <div>
     
     <v-toolbar
          class="mb-1"
          color="white"
          height="40px"
          flat
        >
          <v-toolbar-title  class="font-weight-black font-size=100">指向性判定</v-toolbar-title>
        </v-toolbar>
         <v-row
          class="ma-3">
           <v-btn depressed color="blue darken-3" class= "mt-1 white--text" type="submit" @click="first_button" >
            若年層男性向け
          </v-btn>
          <v-btn depressed color="pink" class= "ml-3  mt-1 white--text"　type="submit" @click="second_button" >
            若年層女性向け
          </v-btn>
          <v-btn depressed color="indigo darken-3" class= "ml-3  mt-1 white--text" type="submit" @click="third_button">
            中年層男性向け
          </v-btn>
          <v-btn depressed color="pink darken-1" class= "ml-3  mt-1 white--text" type="submit" @click="fourth_button">
            中年層女性向け
          </v-btn>
          <v-btn depressed color="deep-purple darken-3" class= "ml-3  mt-1 white--text" @click="fifth_button">
            高年層男性向け
          </v-btn>
          <v-btn depressed color="pink accent-4" class= "ml-3 mt-1 white--text" @click="sixth_button">
            高年層女性向け
          </v-btn>
           <v-btn depressed color="lime darken-3" class= "ml-3 mt-1 white--text"  @click="seventh_button">
            ？向け
          </v-btn>　
           <v-btn depressed color="deep-orange darken-3" class= "ml-3  mt-1 white--text" type="submit" @click="eighth_button" >
            ？向け
          </v-btn>　
           <v-btn depressed color="cyan darken-4" class= "ml-3  mt-1 white--text"　type="submit" @click="nineth_button">
            ？向け
          </v-btn>　
           </v-row>
        <v-form ref="whole_form">
     <v-textarea
            label="分析対象テキスト"
            outlined
            ref="form"
            v-model="TextAreaVal"
             :rules="[required]"
          ></v-textarea>
          </v-form>
    </div>
    <v-row
    justify="end"
    align="center"
    class="ma-0.5"
  >
    <v-btn 
    depresse 
    color="blue"
    class="ma-1 mr-3 white--text text--lighten-1"
    type="submit" @click="exec"
    >
      分析開始
    </v-btn>
    
    <v-btn
      depressed
      color="red lighten-1"
       class="ma-1 mr-5 white--text text--lighten-1"
       @click="reset"
    >
      クリア
    </v-btn>
   
  </v-row>
    <div >
    <v-toolbar
          class="ma-1, mt-3"
          color="white"
          height="40px"
          flat>
    
           <v-toolbar-title  class="font-weight-black">分析結果</v-toolbar-title>
        </v-toolbar>
    <RadarChart ref="rader_component"/>
    </div>
  
  </div>
</template>

<script>


import RadarChart from "../components/RadarChart.vue";


export default {
  name: "Tool",
  components: {
    RadarChart,
  
  },
  data:function() {
        
      return{
      TextAreaVal: '',
      // 入力規則
      required: value => !!value || "必ず入力してください", 
      success: false,}
          
    
  },
  methods: {

      exec(){
        if (this.$refs.whole_form.validate()) {
         this.success = true;
        
         this.$refs.rader_component.sendAPI(this.TextAreaVal);
      } else {
        this.success = false;
      }
         
      },
    
      reset () {
        
        this.$refs.form.reset()
      },
     first_button(){
      // ルフィ
      this.TextAreaVal = 'おれは助けてもらわねェと生きていけねェ自信がある！！！！'
     },
     second_button(){
      // ローラ
      this.TextAreaVal = "努力しなかったら幸せはやってきてはくれないの。失敗して失敗して失敗するからこそ幸せになれる　何が大切なのか分かるんだよ。"
     },
     third_button(){
      // スティーブジョブス　
      this.TextAreaVal = "最も重要な決定とは、何をするかではなく、何をしないかを決めることだ。"
     },
     fourth_button(){
      // 母の日の言葉　
      this.TextAreaVal = "お母さんへ　いつもありがとうございます。日頃の感謝をこめてお花を送ります。 気に入ってくれると嬉しいです。これからも宜しくお願いします。"
     },
     fifth_button(){
      // 涙そうそうのお墓じまい
      this.TextAreaVal = "お客様より『お寺でお墓を購入したものの、誰も入らなくなったので処分したい』というお問合せを頂きました。このような場合、寺院によって弊社が対応できるか否か変わってきます。今回のお客様は、お寺から『ご自身で業者を探してほしい』と言われたため、弊社へのご依頼という流れになりました。"
     },
     sixth_button(){
      // 瀬戸内寂聴
      this.TextAreaVal = "一日に一回は鏡を見る方がいいです。できればにっこりと笑ってみてください。心にわだかまりがない時は、表情がいきいきしているはずですよ。"
     },
     seventh_button(){
       //  厚生労働省
      this.TextAreaVal = "これから三連休や夏休みで外出を予定されている方もいると思いますが、軽度の発熱、倦怠感など少しでも体調が悪ければ外出を控え、自治体等の方針に従って受診や検査をしましょう。"
     },
     eighth_button(){
       // みちょぱ　
      this.TextAreaVal = "ずっとやりたかった靴の衣替えがやっと終わった〜同時に冬物の履かなかった物たちの断捨離も！休みの日とかよりも仕事終わりの方が急に片付けスイッチ入るんだけど、これはあたしだけ？"
     },
     nineth_button(){
       // 松本人志
      this.TextAreaVal = "芸能人の巣ごもりでネタが無いのでしょう。ネットニュースは番組の感想文ばっかり。しかも変なキリトリだらけ…いやだ。いやだ。"
     },
        

    
      }
};
</script>
