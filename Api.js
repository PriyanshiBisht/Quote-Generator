function getQuote() {
  fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: {
      'X-Api-Key':'J1DYbb+qrpUXNdB5wsoQYg==PpYdQX0d7oqEcnZy'
      
    }
  })
  .then(function(response) {
    return response.json(); 
  })
  .then(function(data) {
    
    document.getElementById('quote').textContent = '"' + data[0].quote + '"';
    document.getElementsByClassName('button')[0].textContent='New Quote';
  })
  .catch(function(error) {
  document.getElementById('quote').textContent = 'Failed to fetch quote.';
  });

}
