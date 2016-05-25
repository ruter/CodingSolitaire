# CodingSolitaire
一个以中世纪为背景，具有RPG元素的游戏编程接龙项目！

项目结构

`index.html`是游戏页面；`main.js`是主程序，`jquery-2.2.0.min.js`是`jQuery`；`style.css`是主样式，`normalize.css`是基础样式

其中只对`index.html`, `main.js`, `style.css`进行修改，请阅读这三个文件内的注释

每次对文件的修改只允许**1**个人进行，当合并到`master`后下一人需先`pull`后进行接龙

————————————————————————————————————————————————————————
2016/05：第三次接龙
接龙人：热心
修改：
1、装备和背包框的文字大小从5px改到10px。
2、重新整理了style.css样式

添加：
1、对话框Dialog，主要有一个变量和四个方法
	变量：
	currentDialogTextIndex：记录当前展示文字的序号
	方法：
	showDialog()：显示对话框
	hideDialog()：隐藏对话框
	setDialogText(text)：设置对话框内的文字
	playDialog()：展示下一句对话框文字，通常设置为dialog的onclick事件

	在main.js中，使用了dialogText数组储存文字并测试输出。
	PS：实际上我只成功测试了playDialog()的作用，在我浏览器中并没有成功激活onclick事件_(:3」∠)_