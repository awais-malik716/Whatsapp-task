// Make a request for a user with a given ID

let showData = function (response) {
    console.log(response);
    for (let i = 0; i < response.data.length; i++) {
        let list = response.data[i];
        document.querySelector("div").innerHTML += `
        <div class="profile" onclick="showMassages()">
        <div class="profile-div">
        <img src="${list.profilePic}" class="profile-pics">        
        </div>
        <div class="massages-div">
        <h2>${list.name}</h2>
        <p>${list.number}</p>
        <p>${list.firstLine}</p>
        </div>
        <div class="time-div">
        <p>${list.time}</p>        
        </div>
        </div>
        `;
    }
}

let error = function () {
    console.log("Error!")
}

let finishedUp = function () {
    console.log("Finished Up!")
}

axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(showData)
    .catch(error)
    .finally(finishedUp);

    
// let chat = document.querySelector(".profile");

// let showMassages = () => {
//     document.querySelector(".massage-section").style.visibility = "visible";
// }