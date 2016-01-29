
// Canvas的API参考手册
// http://www.runoob.com/tags/ref-canvas.html
// 请将需要实现的功能封装成函数
// 请做好代码的注释，且函数名以及变量名使用驼峰格式

// 创建装备栏的Context对象
var equipCanvas = document.getElementById("equipment");
equip = equipCanvas.getContext('2d');
// 创建背包栏的Context对象
var bagCanvas = document.getElementById("bag");
bag = bagCanvas.getContext('2d');

// 程序入口 - 当页面加载完毕后即开始执行
$(function() {
	console.log("Game Start!");
	
	// 绘制基础界面	
	drawBaseUI();
	
});

// 绘制基础界面
function drawBaseUI() {
	// 绘制装备栏标题左边线条
	equip.beginPath();
	equip.moveTo(0, 5);
	equip.lineTo(60, 5);
	equip.stroke();
	// 绘制装备栏标题文字
	equip.font="5px Arial";
	equip.textBaseline="middle";
	equip.fillText("EQUIPMENTS", 61, 5);
	// 绘制装备栏标题右边线条
	equip.beginPath();
	equip.moveTo(140, 5);
	equip.lineTo(200, 5);
	equip.stroke();

	// 绘制装备栏格子
	for (var i = 0; i < 2; i++) {
		var x = 0, y = 0, width = 50, height = 50;
		for (var j = 0; j < 4; j++) {
			equip.beginPath();
			equip.rect(x + j * 50, 10 + i * 50, width, height);
			equip.stroke();
		}
	}

	// 绘制背包栏标题左边线条
	bag.beginPath();
	bag.moveTo(0, 5);
	bag.lineTo(110, 5);
	bag.stroke();
	// 绘制背包栏标题文字
	bag.font="5px Arial";
	bag.textBaseline="middle";
	bag.fillText("BAG", 111, 5);
	// 绘制背包栏标题右边线条
	bag.beginPath();
	bag.moveTo(140, 5);
	bag.lineTo(250, 5);
	bag.stroke();

	// 绘制背包栏格子
	for (var i = 0; i < 2; i++) {
		var x = 0, y = 0, width = 50, height = 50;
		for (var j = 0; j < 5; j++) {
			bag.beginPath();
			bag.rect(x + j * 50, 10 + i * 50, width, height);
			bag.stroke();
		}
	}
}