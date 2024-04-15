// An array of your command options
var commands = ["netsh wlan show profiles", "netsh wlan show profiles <all networks> key=clear", /* more commands */];

// Populate the command options dropdown
var select = document.getElementById('command-options');
for(var i = 0; i < commands.length; i++) {
    var option = document.createElement('option');
    option.text = commands[i];
    select.add(option);
}

// Add the selected command to the script preview
function addCommand() {
    var command = select.options[select.selectedIndex].text;
    document.getElementById('script-preview').value += command + "\n";
}

// Copy the code in the script preview
function copyCode() {
    var scriptPreview = document.getElementById('script-preview');
    scriptPreview.select();
    document.execCommand('copy');
}

// Generate and download a file with the code
function downloadFile() {
    var text = document.getElementById('script-preview').value;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'script.sh');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
