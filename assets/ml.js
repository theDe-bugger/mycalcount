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
  checkFood();
})
.catch((error) => {
  console.error('Error:', error);
  alert("There has been an error, please try taking another picture.")
});
}

function checkFood(){
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
            updateCount(food)
            break;
        } else {
            check = false;
        }
    }
    if (check == false){
    alert("This image does not contain any registered foods.")
    }
}

function updateCount(food){
    var count = parseInt(document.getElementById("count").innerHTML)
    if (food == "Clementine"){
        count += 35
    }
    else if (food == "Orange"){
        count += 62
    }
    else if (food == "Peach"){
        count += 67
    }
    else if (food == "Apple"){
        count += 52
    }
    else if (food == "Kiwi"){
        count += 42
    }
    else if (food == "Bread"){
        count += 82
    }
    else if (food == "Cucumber"){
        count += 31
    }
    else if (food == "Tomato"){
        count += 33
    }
    else if (food == "Pepper"){
        count += 30
    }
    else if (food == "Carrot"){
        count += 41
    }
    else if (food=="Broccoli"){
        count += 44
    }
    else if (food=="Avacado"){
        count += 227
    }
    else if (food=="Milk"){
        count += 125
    }
    else if (food=="Egg"){
        count += 72
    }
    else if (food=="Banana"){
        count += 105
    }
    else if (food=="Strawberry"){
        count += 5
    } 
    else if (food=="Almond"){
        count += 7
    }
    else if (food=="Pear"){
        count += 178
    }
    else if (food=="Raspberry"){
        count += 1
    }
    else if (food=="Blackberry"){
        count += 2
    }
    else if (food=="Potato"){
        count += 135
    }
    else if (food=="Burger"){
        count += 600
    }
    else if (food=="Pizza"){
       count += 300
    }
    else if (food=="Cookie"){
        count += 81
    }
    else if (food=="Pasta"){
       count += 330
    }
    else if (food=="Cake"){
        count += 355
    }
    else if (food=="Bagel"){
        count += 245
    }
    else if (food=="Doughnut"){
        count += 275
    }
    else if (food=="Rice"){
        count += 300
    }
    else if (food=="Beans"){
        count += 424
    }
    else if (food=="Zucchini"){
        count += 62
    }
    else if (food=="Squash"){
       count += 39
    }
    else if (food=="Salad"){
      count += 255
    }
    else if (food=="Popcorn"){
        count += 44
    }
    else if (food=="Leek"){
        count += 54
    }




    document.getElementById("count").innerHTML = count
}