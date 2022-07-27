<template>
  <v-container
    id="subscribe"
    tag="section"
    class = "mt-16 "
  >
    <base-card
       
      color="rgba(139, 141, 141, 0.3)"
      class="pa-1 mt-16"
    >
      <v-container>
        
        
          <v-col
            cols="20"
          
          >
            <base-subheading>Contact</base-subheading>

            <v-list class="transparent">
              <v-list-item>

                <v-list-item-title>こちらはNAIST 情報科学領域 ソーシャル・コンピューティング研究室の実証実験用サイトです．
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>お問い合わせは研究室オフィスメール (socialcomputing-office@is.naist.jp) までお願いいたします．</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>現在，当アプリでは自己署名証明書を用いています．ブラウザによっては通信を許可されない可能性があります．</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>当アプリを使用する場合は下記リンクを押して，通信を許可して頂くようお願いします．</v-list-item-title>
              </v-list-item>
              <a class="ml-10" href="https://aoi.naist.jp/transmission/">https://aoi.naist.jp/transmission/</a>

            </v-list>
          </v-col>
      
      </v-container>
    </base-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeSubscribe',
  }
</script>
