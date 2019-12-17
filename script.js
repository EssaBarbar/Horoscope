window.onload = main


function main() {
    addEventListner();
    /* funktioernra som ska köras när sidan laddas */
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
        console.log(response)
        return response.json()
    }).then((body) => {
        console.log(body)
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
        console.log(response)
        return response.json()
    }).then((body) => {
        console.log(body)
        let horoscopeText = document.getElementById("horoscopeText");
        horoscopeText.innerText = body;
    }).catch((err) => {
        console.log("Error: ", err)
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