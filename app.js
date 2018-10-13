

let txtTask = $("#txtTask");
let btnAdd = $("#btnAdd");
let ulListPending = $("#ulListPending");
let ulListComplete = $("#ulListComplete");



btnAdd.click(function(){
    let txtTaskValue = txtTask.val();

    let liItem = $(`<li><input type="checkbox" onchange="checkBoxChange(this)">${txtTaskValue}<button type="button" onclick="removeLiItem(this)">Remove</button></li>`);

    $("#ulListPending").append(liItem);

});


function checkBoxChange(sender) {
    if (sender.checked) {
        $("#ulListComplete").append(sender.parentNode);
    }
    else {
        $("#ulListPending").append(sender.parentNode);
    }
}


function removeLiItem(sender) {
    let senderObject = $(sender); 
    senderObject.parent().remove();
}


