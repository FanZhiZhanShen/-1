//提交订单
function gouMai(mai, e1, shuruk) {
	mai.click(function() {
		$.ajax({
			url: "http://localhost:8080/BusinessWeb/view/userOrderView/OrderController",
			type: "post",
			data: {
				operation: 2,
				productid: e1.productid,
				productNum: shuruk.val()
			},
			dataType: "jsonp",
			success: function() {
				alert("购买成功")
			}
		})
	})
}

//修改
function updateNum(num, e2, shuruk) {
	num.click(function() {
		$.ajax({
			url: "http://localhost:8080/BusinessWeb/view/cartView/CartController",
			type: "post",
			data: {
				operation: 3,
				id: e2.id,
				productid: e2.productid,
				productnum: shuruk.val()
			},
			dataType: "jsonp",
			success: function(data2) {
				alert("修改成功")
				$("tr").not("#tr1").remove()
				var datalist = data2.data;
				showPage(datalist)
			}
		})
	})
}

//删除购物车商品
function deleteById(id1, e3) {
	id1.click(function() {
		$.ajax({
			url: "http://localhost:8080/BusinessWeb/view/cartView/CartController",
			type: "post",
			data: {
				operation: 5,
				id: e3.id
			},
			dataType: "jsonp",
			success: function(data1) {
				alert("删除成功")
				$("tr").not("#tr1").remove()
				$(".a12").remove()
				var datalist = data1.data;
				showPageNo(data1)
				showPage(datalist)
			}
		})
	})
}




