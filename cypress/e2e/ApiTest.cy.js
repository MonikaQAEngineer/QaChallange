describe('Weather API Test Suite', () => {
  const apiKey = 'eb8a70f875f4e4baabc1399cec36e4b6';
  const cities = [
    { name: 'Berlin', lat: '', lon: '' },
    { name: 'New York', lat: '', lon: '' },
    { name: 'Delhi', lat: '', lon: '' },
    { name: 'London', lat: '', lon: ''} 
  ];

  it('validate weather data for four cities', () => {
    cy.wrap(cities).each((city) => {
      cy.request({
        method: 'GET',
        url: `https://api.openweathermap.org/geo/1.0/direct?q=${city.name}&units=metric&appid=${apiKey}`
      }).then((geoResponse) => {
        expect(geoResponse.status).to.eq(200);
        const [geoCity] = geoResponse.body;
        city.lat = geoCity.lat;
        city.lon = geoCity.lon;
        return cy.request({
          method: 'GET',
          url: `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`
        });
      }).then((weatherResponse) => {
        expect(weatherResponse.status).to.eq(200);
        const response = weatherResponse.body;
        expect(response.weather).to.be.an('array').that.is.not.empty;
        expect(response.main).to.have.property('temp');
        expect(response.sys).to.have.property('sunrise');
        expect(response.sys).to.have.property('sunset');
        expect(response.dt).to.be.a('number');
       });
    });
  });
});

