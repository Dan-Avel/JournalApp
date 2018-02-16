// Set Date
var todayDate = new Date();
var strMonth = todayDate.getMonth()<9?"0"+(todayDate.getMonth()+1):(todayDate.getMonth()+1);
var strDay = todayDate.getDate()<10?"0"+todayDate.getDate():todayDate.getDate();
var strToday = strMonth+"/"+strDay+"/"+todayDate.getFullYear();
$("#date").html(strToday);

// Set Quote
var quoteText = $("#quote-input").val();
var author = $("#author-input").val();
$('#save-quote').hide();
$('#quote-form').hide();

$('#save-quote').click(function () {
	$("#quote-text").html("\""+$("#quote-input").val()+"\"");
	$("#quote-author").html("- "+$("#author-input").val());
	$('#save-quote').hide();
	$('#quote-form').hide();
	$('#edit-quote').show();
	$('#display-quote').show();
});

$('#edit-quote').click(function () {
	$('#save-quote').show();
	$("#quote-form").show();
	$('#display-quote').hide();
	$('#edit-quote').hide();
});

// set Thoughts
$("#thought-form").hide();
$("#btn-thought-save").click(function () {
	$("#thought-text").html($("#thought-input").val());
	$("#display-thought").show();
	$("#thought-form").hide();
});

$("#btn-thought-edit").click(function () {
	$("#thought-form").show();
	$("#display-thought").hide();
});

// set Entry
var d = new Date(),        
	h = d.getHours(),
	m = d.getMinutes();
if(h < 10) h = '0' + h; 
if(m < 10) m = '0' + m; 
$("#entry-time").val(h + ':' + m);
console.log($("#entry-time"));
$("#btn-entry-save").click(function () {
	alert("test");
	$("#display-entry").append("<p>"+$("#entry-time").val()+"</p><p>"+$("#entry-text").val()+"</p>");
	$("#entry-time").val("");
	$("#entry-text").val("");
});

// save file
