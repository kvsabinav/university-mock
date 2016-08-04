$(".menu").click(function(){
    $(".dropdown").slideToggle("slow");
	$(".menubutton").toggleClass("menuclose");
    $(".closebutton").toggleClass("closemenu");
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}