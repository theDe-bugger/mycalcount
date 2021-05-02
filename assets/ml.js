//
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
    possibleFoods = ["Clementine","Orange","Apple","Kiwi","Bread","Cucumber","Tomato","Green bell pepper","Carrot","Broccoli","Avacado","Milk","Egg","Banana","Strawberry","Almond","Pear","Peach","Raspberry","Blackerry","Carrot","Potato","Burger","Pizza","Cookie","Pasta","Cake","Icecream","Bagel","Doughnut","Rice","Beans","Zucchini","Squash","Salad","Popcorn","Cheeseburger","Yogurt","Walnut","Beer","Cauliflower","Croissant","Radish","Omlette","Melon","Margarita","Guava","Dosa","Bacon","Salsa","Toast","Oatmeal","Meatball","Chocolate milk","Spinach","Pepperoni","Ginger ale","Pretzel","Pancake","Waffle","Sour cream","Milkshake","Oreo","Green tea","Cheese","Pie","Peanut butter","Marshmallow","Starfruit","Sausage","Chicken breast","Jackfruit","Coca-cola","Cereal","Swiss roll"]
    output = JSON.parse(localStorage.getItem("output"))
    check = false
    for (var i=0;i<output.responses[0].labelAnnotations.length;i++){
        food = output.responses[0].labelAnnotations[i].description
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

function reset(){
    document.getElementById("count").innerHTML = "0"
    localStorage.setItem("caloriecount","0")
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
    else if (food == "Sliced bread"){
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
    else if (food=="Chocolate chip cookie"){
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
        count += 515
    }
    else if (food=="Leek"){
        count += 54
    }
    else if (food=="Cheeseburger"){
        count += 300
    }
    else if (food=="Yogurt"){
        count += 61
    }
    else if (food=="Walnut"){
        count += 14
    }
    else if (food=="Beer"){
        count += 154
    }
    else if (food=="Cauliflower"){
        count += 145
    }
    else if (food=="Croissant"){
        count += 250
    }
    else if (food=="Radish"){
        count += 1
    }
    else if (food=="Omelette"){
        count += 94
    }
    else if (food=="Melon"){
        count += 23
    }
    else if (food=="Margarita"){
        count += 300
    }
    else if (food=="Guava"){
        count += 38
    }
    else if (food=="Dosa"){
        count += 165
    }
    else if (food=="Bacon"){
        count += 43
    }
    else if (food=="Salsa"){
        count += 38
    }
    else if (food=="Toast"){
        count += 75
    }
    else if (food=="Oatmeal"){
        count += 288
    }
    else if (food=="Meatball"){
        count += 135
    }
    else if (food=="Chocholate milk"){
        count += 210
    }
    else if (food=="Spinach"){
        count += 7
    }
    else if (food=="Pepperoni"){
        count += 10
    }
    else if (food=="Ginger ale"){
        count += 124
    }
    else if (food=="Pretzel"){
        count += 108
    }
    else if (food=="Pancake"){
        count += 175
    }
    else if (food=="Waffle"){
        count += 218
    }
    else if (food=="Sour cream"){
        count += 23
    }
    else if (food=="Milkshake"){
        count += 350
    }
    else if (food=="Oreo"){
        count += 53
    }
    else if (food=="Green tea"){
        count += 2.5
    }
    else if (food=="Cheese"){
        count += 83
    }
    else if (food=="Pie"){
        count += 277
    }
    else if (food=="Peanut butter"){
        count += 188
    }
    else if (food=="Marshmallow"){
        count += 23
    }
    else if (food=="Starfruit"){
        count += 28
    }
    else if (food=="Sausage"){
        count += 258
    }
    else if (food=="Chicken breast"){
        count += 92
    }
    else if (food=="Jackfruit"){
        count += 157
    }
    else if (food=="Coca-cola"){
        count += 140
    }
    else if (food=="Cereal"){
        count += 150
    }
    else if (food=="Swiss roll"){
        count += 270
    }
    
    document.getElementById("count").innerHTML = count
    localStorage.setItem("caloriecount",count)
}