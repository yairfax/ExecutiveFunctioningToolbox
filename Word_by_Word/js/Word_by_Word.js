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
		alert("Text could not be read");
	}
}

function BeginReadText()
{
	post("action_page.html",loadedtext,"post");
}

/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path: the path to send the post request to
 * @param {object} params: the parameters to add to the url
 * @param {string} [method=post]: the method to use on the form
 */

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}