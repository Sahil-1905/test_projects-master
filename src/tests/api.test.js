const fetchData = require('../functions/api.js');

//Test Suite
describe('fetchData', () =>{
//Mock this global fetch function
global.fetch =jest.fn();



    //Test cases
    it('fetches data from an API endpoint and returns it as JSON', () =>{

  //mock the functions response
  const mockResponse = {userID: 1, id: 1, title: 'delectus aut autem', completed: false}; 

  fetch.mockResolvedValueOnce({
    ok: true,
    json: jest.fn().mockResolvedValueOnce(mockResponse)
  });

    });

});

