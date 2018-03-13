$(document).ready(function(){
$("body").html("<h3>Шахматна дошка")
.append("<div id='table'>");
$("<input>").attr({
	type:'button',
	value:'Add'
}).insertAfter("h3").click(function(){
	var black=$(".black");
	var circle=$("<div>").width(40).height(40).css({
		borderRadius:"40px",
		margin:"5px"
	})
	var orange=circle.addClass('orange');
	black.slice(0,12).append(orange);
	var white=orange.removeClass('orange').addClass('white');
	black.slice(20).append(white);

})	

for(var i=0;i<8;i++){
$("<div>").addClass("tr")
.appendTo("#table").css("clear","left");
for(var j=0;j<8;j++){
	var csl=null;
	if(i%2==0 && j%2==0||i%2!==0 && j%2!==0)
		csl="yellow"
	else
		csl="black";

$("<div>").addClass("td").appendTo(".tr:last")
.addClass(csl).css('float','left').width(50).height(50);

}

}

// var first=$(".list li:first");
// console.log(first);
// var firstChild=$(".list li:first-child")
// console.log(firstChild);
// $(".list li:eq(1)").parent();
// console.log(parent)
// var next=$(".list li:eq(1)").next();
// console.log(next)

// $("button").click(function(){
// $(".vis").width(500)
// .height(500).css('backgraund-color','red').toggle(2000,function(){
// 	alert('test');
// })

// })
 })