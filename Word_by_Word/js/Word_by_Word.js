var loadedtext = "";

function ReadTextBox()
{
	var text = "";
	text = document.getElementById('words').value
	loadedtext = text;
}

function startRead() {
	var file = document.getElementById('file').files[0];
	if(file){
		getAsText(file);
	}
	else
	{
		alert("Failure");
	}
}

function getAsText(readFile) {
	var reader = new FileReader();
	reader.readAsText(readFile, "UTF-8");
	reader.onload = loaded;
 	reader.onerror = errorHandler;
}

function loaded(evt)
{
	var fileString = evt.target.result;
	loadedtext = fileString;
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		// The file could not be read
	}
}

function BeginReadText()
{
	
}