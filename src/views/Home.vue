<template>
  <div id="app" class="ma-10">
  <div>
     
          <v-toolbar
          class="mb-3"
          color="white"
          height="40px"
          flat
        >
          <v-toolbar-title class=" text-title-1  ">Cono helps find words that carry emotion meaning in text, and also provides predictions of emotion for synonyms.<br>
          <font color=grey lighten-1>Click on these numbered buttons to try example sentences, or enter your own text:</font>
          
          </v-toolbar-title>

         
 

          
        </v-toolbar>

         </v-toolbar>
             
  
         <v-row
          class="ma-1">
          
          <v-btn depressed color="lime darken-2" class= "mt-1 mb-2 white--text" type="submit" @click="first_button" >
            1
          </v-btn>
          <v-btn depressed color="pink lighten-1" class= "ml-3  mt-1 white--text" type="submit" @click="second_button" >
            2
          </v-btn>
          <v-btn depressed color="cyan darken-2" class= "ml-3  mt-1 white--text" type="submit" @click="third_button">
            3
          </v-btn>
          <v-btn depressed color="deep-orange lighten-1" class= "ml-3  mt-1 white--text" type="submit" @click="fourth_button">
            4
          </v-btn>
          <v-btn depressed color="pink darken-2" class= "ml-3  mt-1 white--text" @click="fifth_button">
            5
          </v-btn>
          <v-btn depressed color="orange lighten-1" class= "ml-3 mt-1 white--text" @click="sixth_button">
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
          <v-btn depressed color="orange darken-2" class= "ml-3  mt-1 white--text" type="submit" @click="tenth_button">
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
    color="green"
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
          height="20px"
          flat>
    
           <v-toolbar-title  id="div_textarea2" class="font-weight-black">Analysis Result<br><font class="font-weight-thin"> Click on the highlighted words to learn more </font></v-toolbar-title>
        </v-toolbar>

    <v-banner two-line>
    <v-avatar
      slot="icon"
      color="orange"
      size="40">
      <v-icon
        color="white">
        mdi-message-text
      </v-icon>
    </v-avatar>
    <div v-html="input_sentence" @click="handleLineClick" ></div>
<v-row justify="end">


</v-row>



  </v-banner>
    <v-toolbar
          class="ma-1, mt-3"
          color="white"
          height="20px"
          flat>
  
        </v-toolbar>
   
   <card ref="card_component"/>

   
      <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text   
          color="orange"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Legend
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 orange lighten-2">
          Legend
        </v-card-title>

        <v-card-text class="text-h5"> 
          <p> </p>
          <p>Positive ???? </p>
          <p>Negative ???? </p>
          <p>Anger ???? </p>
          <p>Disgust ???? </p>
          <p>Fear ???? </p>
          <p>Joy ???? </p>
          <p>Sadness ???? </p>
          <p>Surprise ???? </p>
          <p>Neutral ???? </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Exit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
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
      // ????????????
      required: value => !!value || "Please input text", 
      success: false,
      dialog: false,}
          
    
  },
  
  

  methods: {
    handleLineClick(e) {
    let clickedElId = e.target.id
    if (clickedElId.match('word')) {
      
    
      //alert(e)
      //console.log(e)
      // console.log(e.path[0].innerHTML)
      //let text = e.path[0].innerHTML
      let text = e.target.innerHTML
      //console.log(text)

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
         console.log(dic_words)

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
    
      this.TextAreaVal??= "What a marvelous day!"
     },
     second_button(){
   
      this.TextAreaVal??= "Margaret is very slender and pretty, but Agnes is lanky and frail. Both girls are thin."
     },
     third_button(){
   
      this.TextAreaVal??= "Oh shit! Cool tricks, man."
     },
     fourth_button(){
     
      this.TextAreaVal??= "I despise eating broccoli."
     },
     fifth_button(){
    
      this.TextAreaVal??= "Merry Christmas! Enjoy the holidays."
     },
     sixth_button(){
   
      this.TextAreaVal??= "The project is in shambles, this is a disaster."
     },
     seventh_button(){
       
      this.TextAreaVal??= "The aggressive attack only led to more bloodshed."
     },
     eighth_button(){
      
      this.TextAreaVal??= "He told her that her perfume's scent was a terrible odor."
     },
     nineth_button(){
    
      this.TextAreaVal??= "What started as a shower of rain turned into a torrent. Finally, the storm turned into a drizzle."
     },
     tenth_button(){
     
      this.TextAreaVal??= "She was extremely disappointed when she saw her test results."
     },
        
        

    
      }
};
</script>
