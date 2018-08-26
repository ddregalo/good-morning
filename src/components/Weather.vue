<template>
  <div class="home">
    <h1>Rise and Shine</h1>
    <div class="main">
      <b-card-group deck>
          <b-card class="card-image"
                  img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Mars_sunset_PIA01547.jpg/800px-Mars_sunset_PIA01547.jpg"
                  img-alt="Clouds in a sunset"
                  img-top>
              <h3 class="weather-text">
                  The temperature in Brixton right now is {{ brixtonWeather }}
              </h3>
          </b-card>
      </b-card-group>
      <b-card-group deck>
        <div class="col-xs-12">
          <b-card
          v-for="news in todaysNews" :key="news.source.id"
          class="col-xs-12"
          v-bind:img-src="news.urlToImage"
          img-alt="Card image"
          img-top>
            <p>
              {{news.title}}
            </p>
          </b-card>
        </div>
        
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
  private todaysArticles: Array<{}> = []

  get todaysNews () {
 
    let newsUrl = 'https://newsapi.org/v2/top-headlines?' +
      'country=gb&' +
      'apiKey='+ process.env.VUE_APP_NEWS_API_KEY;
    
    var req = new Request(newsUrl);
    fetch(req)
      .then((response: Response) => {
          let data;
          data = response.json();
          data.then(response => {
            this.todaysArticles = response.articles
          })
      })
      return this.todaysArticles
  }

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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-image {
  width: 100%;
}
.main {
  margin: 150px;
  text-align: center;
}
</style>
