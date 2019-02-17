var postdata = "Hello World, lorem ispu dolor sit amet\nHello people I exist."
var paragraphs = dividewords();
var paused = false;
var timer;
function dividewords()
{
	var paragraphs = postdata.split("\n");
	var realparagraphs = new Array(paragraphs.length);
	for (var i = 0; i <= paragraphs.length - 1; i++) {
		realparagraphs[i] = paragraphs[i].split(" ");
	};
	return realparagraphs;
}

function Timer(callback, delay) {
	var args = arguments,
		self = this,
		timer, start;

	this.clear = function () {
		clearTimeout(timer);
	};

	this.pause = function () {
		this.clear();
		delay -= new Date() - start;
	};

	this.resume = function () {
		start = new Date();
		timer = setTimeout(function () {
			callback.apply(self, Array.prototype.slice.call(args, 2, args.length));
		}, delay);
	};

	this.resume();
}

function callback(i, q, timeout) 
{
	document.getElementById("WORDS").innerHTML = paragraphs[i][q];
	if (q < paragraphs[i].length-2) {
		timer = new Timer(callback, timeout,i,q+1,timeout)
		if(paused)
		{
			timer.pause();
		}
	} 
	else if (q < paragraphs[i].length - 1)
	{
		timer = new Timer(callback,timeout*3,i,q+1,timeout*3)
		if(paused)
		{
			timer.pause();
		}
	}
	else if (i < paragraphs.length-1) 
	{
		timer = new Timer(callback,timeout,i + 1, 0,timeout/3)
		if(paused)
		{
			timer.pause();
		}
	}
}

function writewords()
{
	var num = parseInt(document.getElementById("timeout").value)+250
	callback(0,0, num);
}

function Pause()
{
	if(paused)
	{
		paused = false;
		//resume
		timer.resume();
	}
	else
	{
		paused = true;
		//pause
		timer.pause();
	}
}