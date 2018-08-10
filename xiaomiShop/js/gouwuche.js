

$(function() {

	$.ajax({
		url: "http://localhost:8080/BusinessWeb/view/cartView/CartController",
		type: "post",
		data: {
			operation: 6,
			pageNo: 1
		},
		dataType: "jsonp",
		success: function(data) {
			var datalist = data.data;
			showPageNo(data);
			showPage(datalist)
		},
		beforeSend: function() {
			
		},
		error: function() {}
	});

})