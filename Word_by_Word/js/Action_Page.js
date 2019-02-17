var postdata = "Hello World, lorem ispu dolor sit amet\nHello people I exist. "
var paragraphs = dividewords();
function dividewords()
{
	var paragraphs = postdata.split("\n");
	var realparagraphs = new Array(paragraphs.length);
	for (var i = 0; i <= paragraphs.length - 1; i++) {
		realparagraphs[i] = paragraphs[i].split(" ");
	};
	return realparagraphs;
}
