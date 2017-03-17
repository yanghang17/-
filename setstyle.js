window.onload = function(){
	style(); 
}
function style() {
	if (!document.getElementsByTagName) {return false};
	var heades = document.getElementsByTagName("h1");
	//console.log(heades);//获取到 2个h1标签
	var elem;
	for (var i = 0; i<heades.length; i++) {
		elem = getNextElement(heades[i].nextSibling);
		//console.log(getNextElement(heades[i].nextSibling));
		console.log(heades[i].nextSibling);
		elem.style.fontWeight = "bold";
		elem.style.fontSiza = "1.2em";
	};
}
//递归选取元素而不是节点
function getNextElement(node) {
	if (node.nodeType == 1) {
		return node;
	};
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);
		console.log(getNextElement(node.nextSibling));
	}; 
	return null;
}
