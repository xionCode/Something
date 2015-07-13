function $(select) {
	if(/^#\w+$/.test(select)) {
		var arr = select.split("");
		arr.shift();
		var str = arr.join("");
		return document.getElementById(str);
	}else if(/^\w+$/.test(select)) {
		return document.getElementsByTagName(select)[0];
	}else if(/^\.\w+[-*\w+]*$/.test(select)) {
		var arr = select.split("");
		arr.shift();
		var str = arr.join("");
		return document.getElementsByClassName(str)[0];
	}else if(/^\[\w+-?\w+\]$/.test(select)) {
		var arr = select.split("");
		arr.shift();
		arr.pop();
		var str = arr.join(""),
			objs = document.getElementsByTagName("*");
		for(var i = 0;i < objs.length;i++) {
			if(objs[i].attributes[str]) {
				return objs[i];
			}
		}
		return -1;
	}else if(/^\[\w+-?\w+\]=\w+$/.test(select)) {
		var arr = select.split("="),
			attrValue = arr[1],
			objs = document.getElementsByTagName("*");
		var attr0 = arr[0].split("");
		attr0.shift();
		attr0.pop();
		var attrName = attr0.join("");
		for( var i = 0;i < objs.length;i++) {
			if(objs[i].attributes[attrName]) {
				if(objs[i].attributes[attrName].value == attrValue) {
					return objs[i];
				}
			}
		}
		return -1;
	}else if(/^#\w+\s\.\w+$/.test(select)) {
		var arr = select.split(" ");
		var arr0=arr[0].split("");
		arr0.shift();
		var idStr = arr0.join("");
		var arr1 = arr[1].split("");
		arr1.shift();
		var classStr = arr1.join("");
		return document.getElementById(idStr).getElementsByClassName(classStr)[0];
	}else {
		return -1;
	}
}