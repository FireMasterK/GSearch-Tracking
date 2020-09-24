var elems = document.querySelectorAll("a[href][onmousedown]")

for (var i = 0; i < elems.length; i++) {
	elems[i].onmousedown = null
	if (elems[i].attributes.href.value.startsWith('/url')) {
		elems[i].href = new URL(elems[i].href).searchParams.get("url")
	}
}
