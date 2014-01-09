(function () {
	$(document).ready(function(){

		$("#exec_regist").click(function(event) {
			if ($("#key_box").val() && $("#value_box").val()) {
				window.localStorage.setItem($("#key_box").val(), $("#value_box").val());
			}		
		});

		$("#exec_clear").click(function(event) {
			window.localStorage.clear();
		});

	});
})();
