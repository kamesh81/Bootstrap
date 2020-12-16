

// Example starter JavaScript for disabling form submissions if there are invalid fields
var validationSuccess = false;
(
function() {
  'use strict';
  window.addEventListener('load', function() {
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          console.log('Entered FALSE If Condition');
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
       if (form.checkValidity() === true) {
        console.log('Entered TRUE If Condition');
        document.getElementById("saveButton").style.backgroundColor = "#008000";
        document.getElementById("saveButton").innerHTML = "Success";
        console.log('success');
        document.getElementById("saveButton").disabled = true;
        document.getElementById("cancelButton").style.display = "none";
      }
    });
  }, false);
})();








// saveRecord function
	//function saveRecord(){
    //console.log('vs='+validationSuccess);
		//if (validationSuccess === true) {
      //validationSuccess === null;
      //console.log('vs='+validationSuccess);
			//document.getElementById("saveButton").style.backgroundColor = "#008000";
			//document.getElementById("saveButton").innerHTML = "Success";
      //console.log('success');
      //document.getElementById("saveButton").disabled = true;
			//document.getElementById("cancelButton").style.display = "none";
		//}
	//}

