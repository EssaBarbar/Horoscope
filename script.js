window.onload = main


function main() {
    addEventListner();
    /* funktioernra som ska köras när sidan laddas */
};

function addEventListner() {
    const saveThisDate = document.getElementById("saveButton");
    saveThisDate.onclick = getDate;

};

function getDate() {
    let dateOfBirth = document.getElementById("date").value;
    let vals = dateOfBirth.split('-');
    let year = vals[0];
    let month = vals[1];
    let day = vals[2];
};