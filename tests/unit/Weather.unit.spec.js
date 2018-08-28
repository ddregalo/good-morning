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

  it('Returns the temperature as 0 if api call not successful', () => {
    axios.get.mockClear();
    const wrapper = shallowMount(Weather)
    wrapper.vm
    const brixtonTemp = wrapper.find('.weather-text')
    expect(brixtonTemp.text()).toEqual('The temperature in Brixton right now is 0');
  });
});
