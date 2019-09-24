const server_url = "http://节点IP:端口/"


count = new Vue({
	el: '#count',
	data: {
		count: "",
	},
	beforeCreate: function() {
		$.ajax({
			type: 'Get',
			url: server_url+"api/v2/wallets",
			success: function(data) {
				count.count = data.meta.totalCount;
				// console.log(count.count)
			}
		})
	}
});


vum1 = new Vue({
	el: '#height',
	data: {
		height: "",
	},
	beforeCreate: function() {
		//height=setInterval(function(){
		$.ajax({
			type: 'Get',
			url: server_url+"api/v2/blockchain",
			success: function(data) {
				// console.log(data)
				vum1.height = data.data.block.height;
			}
		})
		//},5000);
	}
});
height=setInterval(function(){
	$.ajax({
		type: 'Get',
		url: server_url+"api/v2/blockchain",
		success: function(data) {
			// console.log(data)
			vum1.height = data.data.block.height;
			// console.log(vum1.height)
		}
	})

},5000);
vum = new Vue({
	el: '#app',
	data: {
		supply: "",
	},
	beforeCreate: function() {
		//supply=setInterval(function(){
		$.ajax({
			type: 'Get',
			url: server_url+"api/v2/blockchain",
			success: function(data) {
				// console.log(data)
				vum.supply = data.data.supply;
			}
		})
		//},5000);
	}
});
supply=setInterval(function(){
	$.ajax({
		type: 'Get',
		url: server_url+"api/v2/blockchain",
		success: function(data) {
			// console.log(data)
			vum.supply = data.data.supply;
		}
	})

},5000);


//时间戳换
// function getLocalTime(nS) {     
//    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
// }
function getLocalTime(nS) {
    var date = new Date(parseInt(nS) * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = change(date.getDate()) + ' ';
    h = change(date.getHours()) + ':';
    m = change(date.getMinutes()) + ':';
    s = change(date.getSeconds());
    return Y + M + D + h + m + s;
}
function change(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}
//公钥换名字
function publickeyusername(publicKey) {
	
	$.ajax({
		url: server_url+"api/delegates/get?publicKey="+publicKey,
		success:function(res){
			
			if(res.success){
				//console.log(res.delegate.username)
				// $(obj).html(res.delegate.username)
				return res.delegate.username
			}else{
				return publicKey
				// $(obj).html(publicKey)
			}
			
		}
	})
}
$('#sousuoa').click(function(){
	var name = $('#sltnamea').val()
	 sltname(name)
})
$('#sousuob').click(function(){
	var name = $('#sltnameb').val()
	 sltname(name)
})







//获取url参数
function getParam(paramName) { 
    paramValue = "", isFound = !1; 
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) { 
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0; 
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
    } 
    return paramValue == "" && (paramValue = null), paramValue 
} 

function sltname(sltname){
	// var sltname = $('#sltname').val()
	//var error = false
	$.ajax({
		url: server_url+"api/transactions/get?id="+sltname,
		success:function(res){
			
			if(res.success){
				window.location.href='transaction.html?id='+sltname
			}else{
				//$('#error').html('没有找到相关内容')
				layer.msg('查找中'); 
			}
			
		}

	})
	$.ajax({
		url: server_url+"api/accounts?address="+sltname,
		success:function(res){
			
			if(res.success){
				window.location.href='wallets.html?id='+sltname
			}else{
				//$('#error').html('没有找到相关内容')
				layer.msg('查找中'); 
			}
			
		}

	})
	$.ajax({
		url: server_url+"api/blocks/get?id="+sltname,
		success:function(res){
			if(res.success){
				window.location.href='block.html?id='+sltname
			}else{
				// $('#error').html('没有找到相关内容')
				layer.msg('没有找到相关内容'); 
			}
			
		}

	})
}

function copyText() {
		var Url2 = document.getElementById("keydiv").innerText;
		var oInput = document.createElement('input');
		oInput.value = Url2;
		document.body.appendChild(oInput);
		oInput.select();
		document.execCommand("Copy"); 
		oInput.className = 'oInput';
		oInput.style.display = 'none';
		layer.msg('复制成功');
}

function copyText2() {
		var Url1 = document.getElementById("keydiv2").innerText;
		var oInput = document.createElement('input');
		oInput.value = Url1;
		document.body.appendChild(oInput);
		oInput.select();
		document.execCommand("Copy"); 
		oInput.className = 'oInput';
		oInput.style.display = 'none';
		layer.msg('复制成功');
}


