var postdata = "Hello World, lorem ispu dolor sit amet\nHello people I exist."
var paragraphs = dividewords();
var paused = true;
function dividewords()
{
	var paragraphs = postdata.split("\n");
	var realparagraphs = new Array(paragraphs.length);
	for (var i = 0; i <= paragraphs.length - 1; i++) {
		realparagraphs[i] = paragraphs[i].split(" ");
	};
	return realparagraphs;
}

function writewords()
{
	writeindivdualword(0,0,1000)
}

function writeindivdualword(i,q,timeout)
{	
	paused = false;
	document.getElementById("WORDS").innerHTML = paragraphs[i][q];
	setTimeout(function() {
		if (q < paragraphs[i].length-2) {
			writeindivdualword(i,q+1,1000)
		} else if (q < paragraphs[i].length - 1)
		{
			writeindivdualword(i,q+1, 3000)
		}
		else if (i < paragraphs.length-1) {
			writeindivdualword(i + 1, 0, 1000)
		}
	}, timeout)
}

function Pause()
{
	if(paused)
	{
		//resume
	}
	else
	{
		//pause
	}
}