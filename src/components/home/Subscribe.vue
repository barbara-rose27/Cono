<template>
  <v-container
    id="subscribe"
    tag="section"
    
  >
    <base-card
       
      color="rgba(139, 141, 141, 0.3)"
      class="pa-1"
    >
      <v-container>
        
          <v-col
            cols="20"
          >
            <base-subheading>Contact</base-subheading>

            <v-list class="transparent">
              <v-list-item>

                <v-list-item-title>こちらはNAIST 情報科学領域 <a href="https://sociocom.naist.jp"  target="_blank">ソーシャル・コンピューティング研究室</a>が実施している「ことばの伝え方」に関する実証実験用サイトです．
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>お問い合わせは研究室オフィスメール  ( socialcomputing-office@is.naist.jp )  までお願いいたします．</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>現在，当アプリでは自己署名証明書を用いています．ブラウザによっては通信を許可されない可能性があります．</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>当アプリを使用する場合は<a href="https://aoi.naist.jp/transmission/"  target="_blank">こちら</a>をクリックして頂き，通信を許可して頂くようお願いします．</v-list-item-title>
              </v-list-item>
              

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
