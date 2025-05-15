
async function fetchData(url){

    
    const response = await fetch(url);

 if(!response.ok){
    throw new error('there was a networking error');
 }

const data = await response.json();
return data;
   }

   module.exports = fetchData;


