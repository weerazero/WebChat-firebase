// Initialize Firebase

var config = {
  apiKey: "AIzaSyC6R_15NOuNnqiyyKWVuNprqjtYXqoOrqM",
  authDomain: "webchat-aac67.firebaseapp.com",
  databaseURL: "https://webchat-aac67.firebaseio.com",
  projectId: "webchat-aac67",
  storageBucket: "webchat-aac67.appspot.com",
  messagingSenderId: "999740329063"
};
firebase.initializeApp(config);

function writeUserData(name, massage, timestamp) {
  let firebaseRef = firebase.database().ref("User");
  firebaseRef.push({
    name: name,
    massage: massage,
    timestamp: timestamp



  });
}

function readData() {
  let obj = {}



  let dbRefObject = firebase.database().ref().child("User")


   dbRefObject.on('child_added', snap => {

    let text  = snap.child("massage").val()
    let name =  snap.child("name").val()
    let time =  snap.child("timestamp").val()
    $('.list-chat').append(`
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-start">
                <div >
                   <img src="image.png" width="80px" height="80px">

                </div>
                <div>
                    <p>${text}</p>
                    <small class="text-muted">${time}</small>
                </div>

            </div>

        </a>
    
    
    
    
    
    
    
    
    `)

    }




  )



}