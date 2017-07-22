	function change() {
		var dom = document.getElementById('sgrop');
		var x = document.getElementById('x').value;
		var y = document.getElementById('y').value;
		var z = document.getElementById('z').value;
		dom.style.webkitTransform = "rotateX("+x+"deg) rotateY("+y+"deg) rotateZ("+z+"deg)"
	}