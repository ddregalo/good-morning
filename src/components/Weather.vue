<template>
    <div>
        <div class="main">
            <h3>LOCAL WEATHER</h3>
            <b-card-group deck>
                <b-card
                    img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Mars_sunset_PIA01547.jpg/800px-Mars_sunset_PIA01547.jpg"
                    img-alt="Clouds in a sunset"
                    img-top>
                    <h3 class="weather-text">
                        The temperature in Brixton right now is {{ brixtonWeather }}
                    </h3>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

@Component({
  components: { },
  props: { },
})
export default class Weather extends Vue {
  
    private brixtonWeather: Number = 0

  async created() {
    let weatherUrl = 'http://api.openweathermap.org/' +
      'data/2.5/weather?q=Brixton,uk' + 
      '&units=metric&APPID=' + process.env.VUE_APP_OPEN_WEATHER_API_KEY;

    try {
      const response = axios.get(weatherUrl)
        .then(response => {
         this.brixtonWeather = response.data.main.temp
        })
    } catch (e) {
      console.log("There was an error with gettin the weather")
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  font-size: 2em;
}
.main {
  margin: 50px;
  text-align: center;
}
</style>
