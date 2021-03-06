// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require bootstrap-sprockets
//= require activestorage
//= require turbolinks
//= require_tree .

/* val - input size
 changes size of all text based on value of val*/
function SetFontSize(val) {
  /* Loops through each html element, sets the font size of ever */
 	$("*").each(function(i,e){e.style.fontSize = val});
 }

 /* elem - input text id
  toggles text between on and off */
 function ToggleText(elem) {
   /* gets the element with an id of the same name + p and toggles it from on to off or vice versa */
   $('#'+elem.id+"p").toggle();
 }

 /* initially sets all p elements to hidden, these are descriptions of each page */
 $(document).ready(function() {

 	$('#contactp,#fixturesp,#teamsp,#unip,#accessibilityp').hide();
 })

 /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
 function openNav() {
   document.getElementById("mySidebar").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
   document.getElementById("main_content").style.marginLeft = "250px";
 }

 /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
 function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginLeft = "0";
   document.getElementById("main_content").style.marginLeft = "0";
 }
