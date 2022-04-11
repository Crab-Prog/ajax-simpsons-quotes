// This function loads pokemon data from the Pokemon API
function fetchSimpsonQuotesJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(quotes) {
        console.log('data decoded from JSON:', quotes);
  
        // Build a block of HTML
        const quotesHtml = `
          <p><strong>"${quotes[0].character}"</strong></p>
          <img src="${quotes[0].image}" />
          <p>"${quotes[0].quote}"</p>
          <p>"${quotes[0].characterDirection}"</p>
        `;
        document.querySelector('#simpson-quote').innerHTML = quotesHtml;

        
      });
        const button = document.querySelector('.button')
        button.addEventListener("click", () => fetchSimpsonQuotesJSON())
  }
  
  fetchSimpsonQuotesJSON();
  