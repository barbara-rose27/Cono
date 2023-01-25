<template>
  <div id="app" class="ma-10">
  <div>
     
          <v-toolbar
          class="ma-2"
          color="white"
          height="30px"
          flat
        >
          <v-toolbar-title  class=" text-title-1 font-weight-bold">Cono!! helps to find emotional words in text     
          </v-toolbar-title>
          
        </v-toolbar>

         </v-toolbar>
             
  
         <v-row
          class="ma-1">
          
          <v-btn depressed color="blue darken-3" class= "mt-1 mb-2 white--text" type="submit" @click="first_button" >
            1
          </v-btn>
          <v-btn depressed color="pink" class= "ml-3  mt-1 white--text" type="submit" @click="second_button" >
            2
          </v-btn>
          <v-btn depressed color="indigo darken-3" class= "ml-3  mt-1 white--text" type="submit" @click="third_button">
            3
          </v-btn>
          <v-btn depressed color="pink darken-1" class= "ml-3  mt-1 white--text" type="submit" @click="fourth_button">
            4
          </v-btn>
          <v-btn depressed color="deep-purple darken-3" class= "ml-3  mt-1 white--text" @click="fifth_button">
            5
          </v-btn>
          <v-btn depressed color="pink accent-4" class= "ml-3 mt-1 white--text" @click="sixth_button">
            6
          </v-btn>
           <v-btn depressed color="lime darken-3" class= "ml-3 mt-1 white--text"  @click="seventh_button">
            7
          </v-btn>
           <v-btn depressed color="deep-orange darken-3" class= "ml-3  mt-1 white--text" type="submit" @click="eighth_button" >
            8
          </v-btn>
           <v-btn depressed color="cyan darken-4" class= "ml-3  mt-1 white--text" type="submit" @click="nineth_button">
            9
          </v-btn>
          <v-btn depressed color="blue-grey darken-1" class= "ml-3  mt-1 white--text" type="submit" @click="tenth_button">
            10
          </v-btn>
          
          </v-btn>
           </v-row>
        <v-form ref="whole_form">
     <v-textarea
          
            label="Enter text to be analyzed"
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
    class="ma-0.5">
    <v-btn 
    depresse 
    color="blue"
    class="ma-1 mr-3 white--text text--lighten-1"
    type="submit" @click="exec"
    >
      Start Analysis
    </v-btn>
    
    <v-btn
      depressed
      color="red lighten-1"
       class="ma-1 mr-5 white--text text--lighten-1"
       @click="reset"
    >
      Clear
    </v-btn>
   
  </v-row>

    <div >
    <v-toolbar
          class="ma-2"
          color="white"
          height="40px"
          flat>
    
           <v-toolbar-title  id="div_textarea2" class="font-weight-black">Analysis Result</v-toolbar-title>
        </v-toolbar>

    <v-banner two-line>
    <v-avatar
      slot="icon"
      color="deep-purple accent-4"
      size="40">
      <v-icon
        color="white">
        mdi-message-text
      </v-icon>
    </v-avatar>
    <div v-html="input_sentence" @click="handleLineClick" ></div>



    <template v-slot:actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Action
      </v-btn>
  
    </template>
  </v-banner>
    <v-toolbar
          class="ma-1, mt-3"
          color="white"
          height="80px"
          flat>
  
        </v-toolbar>
   
   <card ref="card_component"/>

   


    
    </div>
      
  </div>
</template>

<script>

import RadarChart from "../components/RadarChart.vue";
import card from "../components/ShowCard.vue";

export default {
  name: "Tool",
  components: {
    RadarChart,
    card,
    Social: () => import('@/components/home/Social'),
    
  
  
  },
  data:function() {
        
      return{
      TextAreaVal: '',
      input_sentence: '',
      // 入力規則
      required: value => !!value || "Please input text", 
      success: false,}
          
    
  },
  
  

  methods: {
      handleLineClick(e) {
    let clickedElId = e.target.id
    if (clickedElId.match('word')) {
      
    
     // alert(e)
      //console.log(e)
     // console.log(e.path[0].innerHTML)
      let text = e.path[0].innerHTML

      this.$refs.card_component.sendAPI(text);

  
    } else {
      console.log('another element was clicked')
    }
  },
    

      async exec(){
        if (this.$refs.whole_form.validate()) {
         this.success = true;
         var input_text = this.TextAreaVal

         let text_data = await this.$refs.card_component.apiSubmit(this.TextAreaVal);
        
         let dic_words = text_data[1]
         let new_input = input_text
         //console.log(dic_words)

         for (var key in dic_words) {
            //console.log(key + ': ' + dic_words[key])
            new_input = new_input.replaceAll(key, dic_words[key]);
            //var reg = new RegExp(key, 'g');
           // new_input = new_input.replaceAll(reg, dic_words[key]);
            

            }
          console.log(new_input)
         this.input_sentence = new_input
    
         //this.input_sentence = this.TextAreaVal
         //this.input_sentence = "Yo! what's up? <a id='word1'>Man</a> <a id='word2'>Fine</a>"
        // this.input_sentence = reformed_sentence
         
         
      } else {
        this.success = false;
      }
         
      },
      reset () {
        this.$refs.form.reset()
        this.$refs.card_component.clean();

      },
     first_button(){
    
      this.TextAreaVal = "What a marvelous day! If only it were not raining like hell."
     },
     second_button(){
   
      this.TextAreaVal = "Thanks for helping, even though it ended in failure, I learned a lot."
     },
     third_button(){
   
      this.TextAreaVal = "Oh shit! Cool tricks man."
     },
     fourth_button(){
     
      this.TextAreaVal = "I despise eating broccoli."
     },
     fifth_button(){
    
      this.TextAreaVal = "Merry Merry Christmas! Enjoy the holidays."
     },
     sixth_button(){
   
      this.TextAreaVal = "The project is in shambles, there is no way we can persevere through these challenges."
     },
     seventh_button(){
       
      this.TextAreaVal = "The aggressive attack only led to more bloodshed."
     },
     eighth_button(){
      
      this.TextAreaVal = "Fire!Thunder!Freeze!"
     },
     nineth_button(){
    
      this.TextAreaVal = "No! Way!"
     },
     tenth_button(){
     
      this.TextAreaVal = "MAYBE!"
     },
        
        

    
      }
};
</script>
