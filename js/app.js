$(document).ready(function() {

//remove items from list 
//when the remove button is clicked


 $("ul").on("click", "button", function() {
	$(this).closest(".added-item").remove();

});

//adding item to shopping list

$(".text-box button").click(function(){
	var input = $("input[name='ShoppingListItem']").val();
	$(".list-of-items").append('<div class="added-item"><li><input type="checkbox"/><label>' + input + '</label><div class="remove-button"><button>Remove</button></div><br></li></div>');
	$(".items")[0].reset();
	return false;
});

});
