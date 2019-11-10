window.onload = function() {
	var showAll = $("#showAll");
	showAll.on("click",function() {
		$.ajax({url: "superheroes.php", success: function(result) {
			alert(result);
		}});
		});
}
 
