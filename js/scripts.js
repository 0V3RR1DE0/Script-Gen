// Add or customize JavaScript functions as needed

let activeTab = 'cmd';

function switchTab(tab) {
    if (tab === 'cmd') {
        document.getElementById('cmd-generator').style.display = 'block';
        document.getElementById('ps-generator').style.display = 'none';
        activeTab = 'cmd';
    } else if (tab === 'ps') {
        document.getElementById('cmd-generator').style.display = 'none';
        document.getElementById('ps-generator').style.display = 'block';
        activeTab = 'ps';
    }
}

function generateCMD() {
    // Add logic to generate CMD command here
    // Update the generated-cmd pre element with the result
}

function generatePowerShell() {
    // Add logic to generate PowerShell command here
    // Update the generated-ps pre element with the result
}

function copyToClipboard(elementId) {
    const textarea = document.getElementById(elementId);
    textarea.select();
    document.execCommand('copy');
}

function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.textContent);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const textarea = document.getElementById('script-textarea');
    textarea.value += data + '\n'; // Append the cube's text to the script
}
