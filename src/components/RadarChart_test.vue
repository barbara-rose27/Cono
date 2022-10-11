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
            },
            {
              label: "女性",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
      )
  },
  methods: {

    sendAPI(formtext){
              
        this.renderChart(
          {
            labels: [
              "10s",
              "20s",
              "30s",
              "40s",
              "50s",
              "60s",
            
            ],
            datasets: [
              {
                label: "Male",
                backgroundColor: "rgba(94,101,182,0.2)",
                borderColor: "rgba(94,101,182,1)",
                pointBackgroundColor: "rgba(94,101,182,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(94,101,182,1)",
                data: [10, 3, 0, 0, 0, 0]

              },
              {
                label: "Female",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [5, 1, 0, 0, 0, 0]
              }
            ]
          },
          { responsive: true, maintainAspectRatio: false }
        )
    }
      }
              
  };
</script>