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

function updateCount(){

}