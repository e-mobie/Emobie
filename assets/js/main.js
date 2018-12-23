

// animate drop down content
// select elements
var $dropDownBtn = $('.dropdown-btn');
var $icon = $('i');
var $dropDownContent = $('.dropdown-content');

$dropDownBtn.on('click',function(){
	$dropDownContent.slideToggle(500,'swing');
	// Toggle class
	$icon.toggleClass('fa-bars fa-times');
})

// Screen Width
var $window = $(window);
if($window.width()>768){
	$dropDownContent.css({'display':'none'})
}

// // Slide Show
// //Automatic Slider
// var slideIndex =1;

// showImage(slideIndex);

// function plusIndex(n){
// 	slideIndex = slideIndex + n;
// 	showImage(slideIndex);
// }

// function currentSlide(n){
// 	showImage(slideIndex = n);
// }


// function showImage(n){
// 	var slide = $(".slide");
// 	var dots = document.getElementsByClassName("dots");

// 	if(n> slide.length){
// 		slideIndex=1
// 	}

// 	if(n<1){
// 		slideIndex = slide.length
// 	}

// 	for(var i= 0; i<slide.length; i++){
// 		slide[i].style.display = "none";
// 	};
// 	slide[slideIndex-1].style.display = "block";

// 	for(var i=0; i <dots.length; i++){
// 		dots[i].className = dots[i].className.replace(" active","");
// 	}

// 	dots[slideIndex-1].className += " active";
// }




// autoSlide();
// function autoSlide(){
// 	var slide = document.getElementsByClassName("slide");
// 	var dots = document.getElementsByClassName("dots");
// 	for(var i= 0; i<slide.length; i++){
// 		slide[i].style.display = "none";
// 	};


// 	if(slideIndex> slide.length){slideIndex=1};
// 	slide[slideIndex-1].style.display = "block";
// 	slideIndex++;
// 	setTimeout(autoSlide,9000);
//   for(var i=0; i <dots.length; i++){
//     dots[i].className = dots[i].className.replace(" active","");
//   }

//   dots[slideIndex-2].className += " active";


// }























// Hover over thumbnail and display item
// Selecting Image Div and img tag
// var imagesContainer = $('.thumb-container');
// var imgElement = $('.thumb-container img');

// // On hover display description of 
// imagesContainer.hover(
//       function(){$(this).find('p:first').slideToggle(800,'swing');},
//       function(){$(this).find('p:first').fadeOut(800);}
//       );



// // On hover display border around menu item.
// imgElement.hover(function(){
//   $(this).animate({borderTopColor:" rgba(255,124,124,1)",
//     borderBottomColor:"rgba(255,124,124,1)",
//     borderRightColor:'rgba(255,124,124,1)',
//     borderLeftColor:'rgba(255,124,124,1)'},
//     '5000');
// }, function(){
//   $(this).animate({borderTopColor:'none',
//     borderBottomColor:'none',
//     borderRightColor:'none',
//     borderLeftColor:'none'},
//     '5000');
// });