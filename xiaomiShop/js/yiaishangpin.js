$(function() {
	$.ajax({
		url: "http://localhost:8080/BusinessWeb/view/userOrderView/OrderController",
		type: "post",
		data: {
			operation: 1,
			pageNo: 1
		},
		dataType: "jsonp",
		success: function(data) {
			var datalist = data.data;
			showmaiPageNo(data)
			showmaiPage(datalist)
		},
		beforeSend: function() {},
		error: function() {}
	});
	
	//删除所有订单
	emptyUserOrder();

})