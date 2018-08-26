<template>
    <div>
        <div class="main">
            <h3 id="news">NEWS</h3>
            <b-card-group deck>
                <div>
                    <b-card
                        v-for="news in todaysNews" :key="news.source.id"
                        class="col-xs-12"
                        v-bind:img-src="news.urlToImage"
                        img-fluid
                        img-alt="Card image"
                        img-bottom>
                        <p>
                            <a v-bind:href="news.url">{{news.title}}</a>
                        </p>
                    </b-card>
                    </div>
            </b-card-group>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

@Component({
  components: { },
  props: { },
})
export default class News extends Vue {
  
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
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  font-size: 2em;
}
a:hover {
  color: #42b983;
}
.col-xs-12 {
  padding: 20px 0 20px 0;
}
.main {
  margin: 50px;
  text-align: center;
}
#news {
  margin: 50px;
}
</style>
