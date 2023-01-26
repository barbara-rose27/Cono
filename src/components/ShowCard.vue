<template>
  <v-card
    class="mx-auto"
    max-width="800"
      elevation="2"
  shaped
  outlined
  >
    <v-card-text>
      <div >Word Emotion</div>
      <p class="text-h4 text--primary"　 v-model="word_name">
        {{word_name}}
      </p>
      <div>Synonyms</div>
        <p class="text-h5 text--primary" v-model="synonyms_name">
        {{synonyms_name}}
      </p>
      
      <!-- <p>adjective</p>  for now comment out this part
       <div class="text--primary">
        relating to or dependent on charity; charitable.<br>
        "an eleemosynary educational institution."
      </div>
        -->
    </v-card-text>
    <!--
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn> 
    </v-card-actions>
    -->
   

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      reveal: false,
      word_name:"",
    }),

      methods: {

       clean(){

        this.word_name = ""
      
  
      },

        // 非同期側
        async apiSubmit(formtext) {
            return await this.axios.post('http://cono.pythonanywhere.com/emotion_checker/?text=' + formtext,)
            //return await this.axios.post('https://localhost:5000/emotion_checker/?text=' + formtext,)
    .then(response => {
      // 成功時の処理etc
      console.log(response.data)
      return response.data
    })
    .catch(error => {
      // 失敗時の処理etc
      return error
    })
},

  sendAPI(formtext){
      
      var result;
        //this.axios.get('http://localhost:5000/emotion_checker/?text=' + formtext, 
        this.axios.get('https://cono.pythonanywhere.com/emotion_checker/?text=' + formtext, 
              ).then(response =>{
                //console.log(response.data)

                result = response.data
               // console.log(result)
                this.word_name = result[0]
                this.synonyms_name = result[1]
               
              })
                .catch(error => console.log(error))      
      }
       
      },


  }
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>