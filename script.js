

function displayCurrentDate() {

    const currentDate = new Date();
    const currentDateDisplay = document.getElementById('current-date');
    currentDateDisplay.textContent = currentDate.toDateString();
}


function convertDate() { 

    const date = new Date();
    const seconds = currentDate.getSeconds(); 
    const minutes = currentDate.getMinutes();
    const hours = date.getHours();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

}