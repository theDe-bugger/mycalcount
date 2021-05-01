/*var request = new XMLHttpRequest()

request.open('POST', 'https://vision.googleapis.com/v1/images:annotate', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}

request.send()
*/

function ml(data){
fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBkKPvGy2_fdq_GHe0uJmQVmJEs8ezNrPw', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '  
},
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  localStorage.setItem("output",JSON.stringify(data));
  updateCount();
})
.catch((error) => {
  console.error('Error:', error);
  alert("There has been an error, please try taking another picture.")
});
}

function test(){
    testData = {
        "requests": [
          {
            "features": [
              {
                "maxResults": 5,
                "type": "LABEL_DETECTION"
              }
            ],
            "image": {
              "source": {
                "imageUri": "gs://cloud-samples-data/vision/label/setagaya.jpeg"
              }
            }
          }
        ]
      }
    alert(JSON.stringify(testData.requests[0].features[0].type))
}

function updateCount(){
    possibleFoods = ["Clementine","Orange","Apple","Kiwi","Bread","Cucumber","Tomato","Pepper","Carrot","Broccoli","Avacado","Milk","Egg","Banana","Strawberry","Almond","Pear","Peach","Raspberry","Blackerry","Carrot","Potato","Burger","Pizza","Cookie","Pasta","Cake","Icecream","Bagel","Doughnut"]
    output = JSON.parse(localStorage.getItem("output"))
    alert(output)
    check = false
    for (var i=0;i<output.responses[0].labelAnnotations.length;i++){
        food = output.responses[0].labelAnnotations[i].description
        alert(JSON.stringify(food))
        if (possibleFoods.includes(food)){
            alert("Your food is: " + JSON.stringify(food))
            check = true;
            break;
        } else {
            check = false;
        }
    }
    if (check == false){
    alert("This image does not contain any registered foods.")
    }
}