//Image Preview
const fileInput = document.getElementById("file1");
const picture = document.getElementById("imageM");

fileInput.addEventListener("change", preview);
function preview() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
        picture.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(file);
};
//**************/
//Random CaseID
window.addEventListener("load", caseID);
window.addEventListener("load", dateandtime);

function caseID() {
    var id
    id = Math.round(Math.random() * 100000);
    var caseid = document.getElementById("caseidinput");
    caseid.value = id;
    //caseid.setAttribute("placeholder", id);
    console.log(id);
};

//Date and time
function dateandtime() {
    var date = new Date();
    time1 = document.getElementById("time");
    time1.value = date.toLocaleString('en-US');
}



// const b = document.getElementById("file1");
// b.addEventListener("change", showMessage);
// function showMessage() {
//     const a = document.getElementById("imageM");
//     const c = this.files[0];
//     const reader = new FileReader();
//     reader.addEventListener("load", function () {
//         a.setAttribute("src", reader.result);
//     });
//     reader.readAsDataURL(c);

// }