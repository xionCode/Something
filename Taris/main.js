var row = 20,// 行
	column = 10,// 列
	cellLength = 40;// 长度
var cube = {};



window.onload = function() {
	init();
};

function init() {
	var container = $("#main");
console.log(container);
	container.style.height = row * cellLength + "px";
	container.style.width = column * cellLength + "px";
	for(var i = 0;i < row;i ++) {
		for(var j = 0;j < column;j ++) {
			var cell = document.createElement("div");
			cell.className = "grid-cell";
			cell.style.height = cellLength + "px";
			cell.style.width = cellLength + "px";
			cell.style.top = i * cellLength + "px";
			cell.style.left = j * cellLength + "px";
			cell.bac = 0;// 元素没有被方块覆盖。
			cell.id = "cell" + "-" + i + "-" + j;
			container.appendChild(cell);
		}
	}
}

function createCube() {
	cube.type = 0;// 方块的类型
	num = Math.round(Math.random() * 6);
	cub.draw = function(type, i, j, state) {
		switch(type) {
			case 0 : if(state === 0 || state === 2){
				cellArr = [[i, j - 1], [i, j], [i, j + 1], [i, j + 2]];
			}else if(state === 1 || state === 3) {
				cellArr = [[i - 1, j], [i, j], [i + 1, j], [i + 2, j]];
			}
			break;
			case 1 : if(state === 0) {
				cellArr = [[i - 1, j], [i, j], [i, j + 1], [i, j + 2]];
			}else if(state === 1) {
				cellArr = [[i, j], [i, j + 1], [i + 1, j], [i + 2, j]];
			}else if(state === 2) {
				cellArr = [[i, j], [i, j - 1], [i, j - 2], [i + 1, j]];
			}else if(state === 3) {
				cellArr = [[i, j - 1], [i, j], [i - 1, j], [i - 2, j]];
			}
			break;
			case 2 : if(state === 0) {
				cellArr = [[i, j - 2], [i, j - 1], [i, j], [i - 1, j]];
			}else if(state === 1) {
				cellArr = [[i - 2, j], [i - 1, j], [i, j], [i, j + 1]];
			}else if(state === 2) {
				cellArr = [[i, j + 2], [i, j + 1], [i, j], [i + 1, j]];
			}else if(state === 3) {
				cellArr = [[i + 2, j], [i + 1, j], [i, j], [i, j - 1]];
			}
			break;
			case 3 : cellArr = [[i, j], [i, j + 1], [i + 1, j], [i + 1, j + 1]];
			}
			break;
			case 4 : if(state === 0 || state === 2) {
				cellArr = [[i, j + 1], [i ,j], [i + 1, j], [i + 1, j - 1]];	
			}else if(state === 1 || state === 3) {
				cellArr = [[i - 1, j - 1], [i, j - 1], [i, j], [i + 1, j]];
			}
			break;
			case 5 : if(state === 0) {
				cellArr = [[i - 1, j], [i, j], [i, j - 1], [i, j + 1]];
			}else if(state === 1) {
				cellArr = [[i - 1, j], [i, j], [i, j + 1], [i + 1, j]];
			}else if(state === 2) {
				cellArr = [[i + 1, j], [i, j - 1], [i, j + 1], [i, j]];
			}else if(state === 3) {
				cellArr = [[i - 1, j], [i, j], [i + 1, j], [i, j - 1]];
			}
			break;
			case 6 : if(state === 0 || state === 2) {
				cellArr = [[i, j - 1], [i, j], [i + 1, j], [i + 1, j + 1]];
			}else if(state === 1 || state === 3) {
				cellArr = [[i - 1, j], [i, j], [i, j - 1], [i + 1, j - 1]];
			}
		}
	};
}


