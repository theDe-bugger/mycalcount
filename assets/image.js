function takePic(){
const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');

const constraints = {
  video: true,
};

captureButton.addEventListener('click', () => {
  context.drawImage(player, 0, 0, canvas.width, canvas.height);
  canvasHTML = document.getElementById("canvas")
  sessionStorage.setItem("link",canvasHTML.toDataURL("image/png"))
  uploadImage(sessionStorage.getItem("link"))
  
  // Stop all video streams.
  //player.srcObject.getVideoTracks().forEach(track => track.stop());
});

navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
  });
}
function uploadImage(message){
  const ref = firebase.storage().ref()
  const name = 'input-file'
          "features": [
            {
              "maxResults": 5,
              "type": "LABEL_DETECTION"
            }
          ],
          "image": {
            "source": {
              "imageUri": url
            }
          }
        }
      ]
    };
    ml(data)
	console.log(url);
  })
  
}
