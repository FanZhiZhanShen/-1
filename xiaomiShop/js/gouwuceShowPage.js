//分页显示购物车
function showPage(datas) {
	$.each(datas, function(i, e) {
		var tr = $("<tr></tr>")
		var td = $("<td>" + e.id + "</td> <td>" + e.productid + "</td> <td></td>")

		var td0 = $("<td></td>")
		var shuruk = $("<input  value=" + e.productNum + ">").css({
			"width": "100%",
			"heigth": "100%"
		})
		td0.append(shuruk)

		var td1 = $("<td></td>")
		var lianjiea1 = $("<a>删除</a>")
		td1.append(lianjiea1)
		//删除
		deleteById(lianjiea1, e)

		var td2 = $("<td></td>")
		var lianjiea2 = $("<a>修改</a>")
		td2.append(lianjiea2)
		//修改
		updateNum(lianjiea2, e, shuruk)

		var td3 = $("<td></td>")
		var lianjiea3 = $("<a>提交订单</a>")
		td3.append(lianjiea3)
		//购买
		gouMai(lianjiea3, e, shuruk)

		//将列加入行
		tr.append(td)
		tr.append(td0)
		tr.append(td1)
		tr.append(td2)
		tr.append(td3)
		$("#table1").append(tr)

	});
}

//显示购物车页数
function showPageNo(pageNo1) {
	for(var i = 1; i <= pageNo1.totalPage; i++) {
		var lianjiea = $("<a class=\"a12\">" + i + "</a>")
		$("#bottom-div1").append(lianjiea)
		lianjiea.click(function() {
			$(this).css("color", "red")
			$("a").not(this).css("color", "")
			$.ajax({
				url: "http://localhost:8080/BusinessWeb/view/cartView/CartController",
				type: "post",
				data: {
					operation: 6,
					pageNo: $(this).text()
				},
				dataType: "jsonp",
				success: function(datas) {
					$("tr").not("#tr1").remove()
					var datalist = datas.data;
					showPage(datalist)
				}
			})
		})

	}
}

//显示已买商品页数
function showmaiPageNo(pageNo1) {	
	for(var i = 1; i <= pageNo1.totalPage; i++) {
		var lianjiea = $("<a class=\"a11\">" + i + "</a>")
		$("#bottom-div1").append(lianjiea)
		lianjiea.click(function() {
			
			$(this).css("color", "red")
			$("a").not(this).css("color", "")
			$.ajax({
				url: "http://localhost:8080/BusinessWeb/view/userOrderView/OrderController",
				type: "post",
				data: {
					operation: 1,
					pageNo: $(this).text()
				},
				dataType: "jsonp",
				success: function(datas) {
					$("tr").not("#tr1").remove()
					var datalist = datas.data;
					showmaiPage(datalist)
				}
			})
		})

	}
}

//分页显示已买商品
function showmaiPage(datas) {
	$.each(datas, function(i, e) {
		var tr = $("<tr></tr>")
		var td = $("<td>" + e.order_no + "</td> <td>" + e.user_id + "</td><td>" +
			e.shipping_id + "</td><td>" + e.payment + "</td><td>" + e.payment_type + "</td><td>" +
			e.postage + "</td><td>" + e.status + "</td><td>" + e.payment_time +
			"</td><td>" + e.send_time + "</td><td>" + e.end_time + "</td><td>" +
			e.close_time + "</td><td>" + e.create_time + "</td><td>" + e.update_time + "</td>"
		)

		var td1 = $("<td></td>")
		var lianjiea1 = $("<a>删除</a>")
		td1.append(lianjiea1)
		//删除
		deleteMaiById(lianjiea1,e)
		
		tr.append(td)
		tr.append(td1)
		$("#table1").append(tr)
	})
}