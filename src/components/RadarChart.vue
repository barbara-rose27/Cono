<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  mounted() {
    this.renderChart(
        {
          labels: [
            "10代",
            "20代",
            "30代",
            "40代",
            "50代",
            "60代",
          
          ],
          datasets: [
            {
              label: "男性",
              backgroundColor: "rgba(94,101,182,0.2)",
              borderColor: "rgba(94,101,182,1)",
              pointBackgroundColor: "rgba(94,101,182,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(94,101,182,1)",
              data: [15, 19, 10, 11, 16, 15]
            },
            {
              label: "女性",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [18, 18, 5, 19, 16, 17]
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
      )
  },
  methods: {

    sendAPI(formtext){
    
      this.axios.post('http://localhost:8888/direct?text=' + formtext, 
              ).then(response => 
              
        this.renderChart(
          {
            labels: [
              "10代",
              "20代",
              "30代",
              "40代",
              "50代",
              "60代",
            
            ],
            datasets: [
              {
                label: "男性",
                backgroundColor: "rgba(94,101,182,0.2)",
                borderColor: "rgba(94,101,182,1)",
                pointBackgroundColor: "rgba(94,101,182,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(94,101,182,1)",
                data: [response.data.M10, response.data.M20, response.data.M30, 
                       response.data.M40, response.data.M50, response.data.M60]
              },
              {
                label: "女性",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [response.data.F10, response.data.F20, response.data.F30, 
                       response.data.F40, response.data.F50, response.data.F60]
              }
            ]
          },
          { responsive: true, maintainAspectRatio: false }
        )
      
      )
                .catch(error => console.log(error))
      }
      }
              
  };
</script>