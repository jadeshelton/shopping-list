$(document).ready(function() {

//remove items from list 
//when the remove button is clicked


 $("ul").on("click", "button", function() {
	$(this).parent().remove();

});

//adding item to shopping list

$(".text-box button").click(function(){
	var input = $("input[name='ShoppingListItem']").val();
	$(".list-of-items").append('<li>' + '<input type="checkbox"/>' + 
		'<label>' + input + '</label>' + 
		'<button>' + 'Remove' + '</button>' + 
		'<hr>' + '</hr>' + 
		'</li>');
	$(".items")[0].reset();
	return false;
});

});

//try to make it not add blankness (and character>0 or something)
//get text box to clear after submitting