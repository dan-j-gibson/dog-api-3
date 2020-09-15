// fetch random dog image based on breed entered

function userSearch(){
    let breedEntered = $(".js-query").val()
    return breedEntered
}

function getImage() {
    fetch("https://dog.ceo/api/breed/"+ userSearch()+ "/images/random")
   .then(response => response.json())
   .then(responseJson => displayResults(responseJson))
   .catch(error => alert('Breed not found. Please enter another breed.'));
}

   
   function listenToInput() {
    $(".js-search-form").submit(e => {
      e.preventDefault();
      getImage();
    });
  }

  function displayResults(responseJson) {
    //replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    )
    //display the results section
    $('.results').removeClass('hidden');
  }

   $(function() {
    console.log('App loaded! Waiting for submit!');
    listenToInput();
   }); 
   
   