
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
// 获取对话框对象
var dialog = document.getElementById("dialog");


var currentDialogTextIndex = 0;	//记录当前显示的对话序号，开始播放前设置为0
// 测试数据
var dialogText=new Array()
	dialogText[0]='人族以及魔族,早在三百年前,就開始了戰爭。';
	dialogText[1]='戰爭帶來的損失以及災害,令百姓生活苦難,不論是魔族還是人族,都盼著和平。';
	dialogText[2]='後來,人族及魔族非常奇怪出现了同一个預言:';
	dialogText[3]='「在不久的將來,將會有一名結束戰爭的生命誕生。他擁有著紅藍異瞳,一頭紅色的頭髮。」';
	dialogText[4]='人類貴族以及魔族貴族得知此預言後,也開始準備計劃,希望能尋獲預言之子。';

// 程序入口 - 当页面加载完毕后即开始执行
$(function() {
	console.log("Game Start!");
	
	// 绘制基础界面	
	drawBaseUI();
	// 隐藏对话框
	hideDialog();

	//测试对话框显示台词,实际使用时应用单例模式控制
	showDialog();
	dialog.onclick=playDialog();

});

// 绘制基础界面
function drawBaseUI() {
	// 绘制装备栏标题左边线条
	equip.beginPath();
	equip.moveTo(0, 5);
	equip.lineTo(60, 5);
	equip.stroke();
	// 绘制装备栏标题文字
	equip.font="10px Arial";
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
	bag.font="10px Arial";
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

//显示对话框
function showDialog(){
	dialog.style.display="block";
}
//隐藏对话框
function hideDialog(){
	dialog.style.display="none";
}
//设置对话框文字
function setDialogText(text){
	dialog.innerHTML=text;
}
//播放对话框内容
function playDialog(){
	//每一次点击都会显示dialogText的下一句，直到显示完后隐藏对话框
	if (currentDialogTextIndex < dialogText.length){
		setDialogText(dialogText[currentDialogTextIndex++]);
	}
	else
	{
		hideDialog();
	}
}
