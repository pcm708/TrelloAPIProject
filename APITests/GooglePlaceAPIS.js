import supertest from 'supertest';
const request = supertest('https://rahulshettyacademy.com/maps/api/place');
import pkg from 'chai';
const { expect } = pkg;

describe('Google Place API Test', ()=> {

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  let id;
  const _location={
    lat: "-38.382494",
    lng: "33.467362",
  }
  const _types=[];
    _types.push("shoe park");
    _types.push("shoe park");

  const postBody = {
    location: _location,
    accuracy: "20",
    name: "Abc",
    phone_number: "5678",
    address: "def",
    types: _types,
    website: "http://google.com",
    language: "English-IN"
  };

  // it('POST a new place in map', () => {
  //   return request
  //     .post('/add/json')
  //     .query("key","qaclick123")
  //     .send(postBody)
  //     .then((res) => {
  //       console.log(res.body);
  //       id=res.body.place_id;
  //       expect(res.body.status).to.include("OK");
  //       console.log("Place ID Fetched: "+ id);
  //     });
  // });

  it.only(`GET place from map database`, () => {
    return request
    .get(`/get/json`)
    .set("key","qaclick123")
    .set("place_id","999a17049c7b2a4511db050ded5a7bca")
    // `${id}`)
    .then((res) => {
      console.log("Get response: ");
      console.log(res.body);
      // expect(res.status).to.be.eq("200");
    });
});

  // it('DELETE /place', () => {
  //   const data2={
  //     place_id: `${id}`,
  //   };

  //   return request
  //     .delete(`/delete/json`)
  //     .query("key","qaclick123")
  //     .send(data2)
  //     .then((res) => {
  //       console.log(res.body);
  //       expect(res.body.status).to.be.eq("OK");
  //     });
  // });

  // it(`GET place from map database, (but it already deleted)`, () => {
  //     return request
  //     .get(`/get/json`)
  //     .query("key","qaclick123")
  //     .query("place_id",`${id}`)
  //     .then((res) => {
  //       expect(res.body.msg).to.include("Get operation failed, looks like place_id  doesn't exists");
  //     });
  // });
});