// fetch random dog image based on breed entered

function userSearch(){
    let breedEntered = $(".js-query").val()
    return breedEntered
}

function getImage() {
    fetch("https://dog.ceo/api/breed/"+ userSearch()+ "/images/random")
    .then(response => {console.log(response)
        if (response.ok === false){
            return alert('Breed not found. Please enter another breed.')
            }
        else {
            return response.json()}
            })
   .then(responseJson => displayResults(responseJson))
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

//    function listenToInput() {
//     $('.js-search-form').submit(event => {
//       event.preventDefault();
//       const queryTarget = $(event.currentTarget).find('.js-query');
//       const query = queryTarget.val();
//        queryTarget.val()
//       getImages(query, searchData);
//     });
//    }
   

   $(function() {
    console.log('App loaded! Waiting for submit!');
    listenToInput(); 
   }); 
   
   
