function check() {
    //var check_event = document.getElementById(event_validate)
    var check_staff_name = document.getElementById("staff_namee")
   
    //if (check_event == null) {
       //alert("Enter the Event name")
    //}
   
    //if (check_staff_name == null) {
     //  alert("Enter the Staff Name")
    //}
   
    var regex = /^[A-Za-z]+$/
    if (!regex.test(check_staff_name.value)) {
       alert("Invalid Staff Name. Only letters and spaces are allowed.")
    }
   }
   
   ///document.getElementById('form_validate').addEventListener('submit', function (event) {
   // event.preventDefault()
   // check()
   //})