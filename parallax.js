
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("mobile").style.display = "block";
	document.getElementById("desktop").style.display = "none";
	
	
	function mtcotc() {
		document.getElementById("mtcotc").style.display = "block";
		document.getElementById("medite").style.display = "none";
	}

	function medite() {
		document.getElementById("mtcotc").style.display = "none";
		document.getElementById("medite").style.display = "block";
	}

	
}

else {
	document.getElementById("desktop").style.display = "block";
	document.getElementById("mobile").style.display = "none";
	
	
	
	function dtcotc() {
		document.getElementById("dtcotc").style.display = "block";
		document.getElementById("dedite").style.display = "none";
	}

	function dedite() {
		document.getElementById("dtcotc").style.display = "none";
		document.getElementById("dedite").style.display = "block";
	}
}










