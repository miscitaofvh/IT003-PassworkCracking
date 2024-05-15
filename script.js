document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return"), 
    crackButton = document.querySelector( ".crack-button" );
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    var filePath = this.value;
    var fileName = filePath.substring(12);
    
    the_return.innerHTML = fileName;
});  
crackButton.addEventListener("click", function(event) {
    var formData = new FormData();
    var file = fileInput.files[0];
    formData.append('file', file);

    var xhr = new XMLHttpRequest();

    xhr.open("POST", 'http://127.0.0.1:5000/crack', true);
    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        alert(response.message)
        //document.getElementById("output").innerHTML = response.message;
    };
    
    xhr.send(formData);
});