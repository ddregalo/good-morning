jest.mock('axios', () => ({
  get: jest.fn()
}))

import axios from 'axios'
import { shallowMount } from '@vue/test-utils'
import Weather from '@/components/Weather.vue'

describe("Weather Component Unit Tests", () => {
  
  it("Makes a http request to openweather api", () => {
    const wrapper = shallowMount(Weather)
    wrapper.vm
    expect(axios.get).toBeCalledWith(
      'http://api.openweathermap.org/' +
      'data/2.5/weather?q=Brixton,uk' + 
      '&units=metric&APPID=' + process.env.VUE_APP_OPEN_WEATHER_API_KEY);
  });
});
