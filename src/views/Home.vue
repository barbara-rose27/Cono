<template>
  <div id="app" class="ma-10">
  <div>
     
     <v-toolbar
          class="mb-1"
          color="white"
          height="40px"
          flat
        >
          <v-toolbar-title  class="font-weight-black">指向性判定</v-toolbar-title>
        </v-toolbar>
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
          flat
        >
    
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
  data: function() {
          
        
          return{TextAreaVal: '',
          // 入力規則
          required: value => !!value || "必ず入力してください", 
          success: false,
          
          }
        
    
  },
  methods: {

      exec(){
        if (this.$refs.whole_form.validate()) {
         this.success = true;
         console.log(this.TextAreaVal)
         this.$refs.rader_component.sendAPI(this.TextAreaVal);
      } else {
        this.success = false;
      }
         
      },
    
      reset () {
        message: 'YOOO!!'
        this.$refs.form.reset()
      }
      }
};
</script>
