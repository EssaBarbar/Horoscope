window.onload = main


function main() {
    addEventListner();
};

function addEventListner() {
    const saveHoroscope = document.getElementById("saveButton");
    saveHoroscope.onclick = sendDate;
    const updateHoroscope = document.getElementById("updateButton");
    updateHoroscope.onclick = updateData;
    const deleteHoroscope = document.getElementById("deleteButton");
    deleteHoroscope.onclick = deleteData;


};

function deleteData() {

    let url = "./server/deleteHoroscope.php"
    let method = "DELETE"

    fetch(url, {
        method: method,
    }).then((response) => {
        return response.json()
    }).then((body) => {
        console.log(body)
        checkButtons("inline", "none", "none")
        let horoscopeText = document.getElementById("horoscopeText");
        horoscopeText.innerText = "";
    }).catch((err) => {
        console.log("Error: ", err)
    })
};


function showData() {

    let url = "./server/viewHoroscope.php"
    let method = "GET"

    fetch(url, {
        method: method,
    }).then((response) => {
        return response.json()
    }).then((body) => {
        if (body) {
            checkButtons("none", "inline", "inline")
        } else {
            checkButtons("inline", "none", "none")
        }
        let horoscopeText = document.getElementById("horoscopeText");
        horoscopeText.innerText = body;
    }).catch((err) => {
    })
};






function updateData() {
    let dateOfBirth = document.getElementById("date").value;
    let vals = dateOfBirth.split('-');
    let year = vals[0];
    let month = vals[1];
    let day = vals[2];


    let url = "./server/updateHoroscope.php"
    let method = "POST"

    let formData = new FormData()
    formData.append("month", month)
    formData.append("day", day)

    fetch(url, {
        method: method,
        body: formData
    }).then((response) => {
        return response.json()
    }).then((body) => {
        console.log(body)
    }).catch((err) => {
        console.log("Error: ", err)
    })
    showData()
};

function sendDate() {
    let dateOfBirth = document.getElementById("date").value;
    let vals = dateOfBirth.split('-');
    let year = vals[0];
    let month = vals[1];
    let day = vals[2];


    let url = "./server/addHoroscope.php"
    let method = "POST"

    let formData = new FormData()
    formData.append("month", month)
    formData.append("day", day)

    fetch(url, {
        method: method,
        body: formData
    }).then((response) => {
        return response.json()
    }).then((body) => {
        console.log(body)
    }).catch((err) => {
        console.log("Error: ", err)
    })
    showData()

};

function checkButtons(button1, button2, button3) {
    const saveButton = document.getElementById("saveButton");
    const updateButton = document.getElementById("updateButton");
    const deleteButton = document.getElementById("deleteButton");

    saveButton.style.display = button1;
    updateButton.style.display = button2;
    deleteButton.style.display = button3;
}