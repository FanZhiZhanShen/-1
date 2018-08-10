//删除已买商品
function deleteMaiById(id1, e4) {
	id1.click(function() {
		$.ajax({
			url: "http://localhost:8080/BusinessWeb/view/userOrderView/OrderController",
			type: "post",
			data: {
				operation: 3,
				id: e4.id
			},
			dataType: "jsonp",
			success: function(data1) {
				alert("删除成功")
				$("tr").not("#tr1").remove()
				$(".a11").remove()
				var datalist = data1.data;
				showmaiPageNo(data1)
				showmaiPage(datalist)
			}
		})
	})
}

//删除所有订单：
function emptyUserOrder(){
	$("#sanchuSYDD").click(function() {
		$.ajax({
			url: "http://localhost:8080/BusinessWeb/view/userOrderView/OrderController",
			type: "post",
			data: {
				operation: 4,
			},
			dataType: "jsonp",
			success: function(data1) {
				alert("全部删除成功")
				$("tr").not("#tr1").remove()
				$(".a11").remove() //上一页移除已存在的a
				var datalist = data1.data;
				showmaiPageNo(data1)
				showmaiPage(datalist)
			}
		})
	})
}
