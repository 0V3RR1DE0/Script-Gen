// An object of your command options for each language
var commands = {
    "bash-linux": [
        "mkdir directory_name",
        "rmdir directory_name",
        "touch filename.txt",
        "rm filename.txt",
        "cp source_file destination_file",
        "mv old_filename new_filename",
        "cat filename.txt",
        "echo 'text to append' >> filename.txt",
        "grep 'pattern' filename.txt",
        "wc -l filename.txt",
        "sort filename.txt",
        "uniq filename.txt",
        "sed 's/find/replace/g' filename.txt",
        "awk '{print $1}' filename.txt",
        "split -l 100 filename.txt",
        "uname -a",
        "df -h",
        "free -h",
        "uptime",
        "ifconfig",
        "route -n",
        "ping google.com",
        "netstat -tuln",
        "ps aux",
        "kill -9 process_id",
        "command &",
        "kill %job_number",
        "who",
        "passwd username",
        "useradd username",
        "userdel username",
        "if [ condition ]; then\n    # commands\nfi",
        "if [ condition ]; then\n    # commands\nelse\n    # commands\nfi",
        "case $variable in\n    pattern1)\n        # commands\n        ;;\n    pattern2)\n        # commands\n        ;;\n    *)\n        # default commands\n        ;;\nesac",
        "for i in {1..10}; do\n    # commands\ndone",
        "while [ condition ]; do\n    # commands\ndone",
        "function_name() {\n    # commands\n}",
        "echo 'Hello, World!'",
        "sleep 5",
        "exit 0"
    ],
    "bash-windows": [
        "mkdir directory_name",
        "rmdir directory_name",
        "echo. > filename.txt",
        "del filename.txt",
        "copy source_file destination_file",
        "move old_filename new_filename",
        "type filename.txt",
        "echo text to append >> filename.txt",
        "findstr 'pattern' filename.txt",
        "find /c /v \"\" < filename.txt",
        "sort filename.txt",
        "sort /unique filename.txt",
        "sed 's/find/replace/g' filename.txt",
        "for /f \"tokens=1\" %i in (filename.txt) do echo %i",
        "split -l 100 filename.txt",
        "ver",
        "dir",
        "systeminfo",
        "netstat -an",
        "tasklist",
        "taskkill /f /pid process_id",
        "start command",
        "taskkill /f /pid job_number",
        "query user",
        "net user username *",
        "net user username /add",
        "net user username /delete",
        "if condition (\n    :: commands\n) else (\n    :: commands\n)",
        "for /l %i in (1,1,10) do (\n    :: commands\n)",
        "set /p variable=Enter variable: \nswitch %variable% (\n    case value1 (\n        :: commands\n        exit /b\n    )\n    case value2 (\n        :: commands\n        exit /b\n    )\n    default (\n        :: default commands\n        exit /b\n    )\n)",
        "echo Hello, World!",
        "timeout /t 5",
        "exit /b 0"
    ],
    "powershell": [
        "New-Item -ItemType Directory -Name directory_name",
        "Remove-Item directory_name",
        "New-Item -ItemType File -Name filename.txt",
        "Remove-Item filename.txt",
        "Copy-Item source_file destination_file",
        "Rename-Item old_filename new_filename",
        "Get-Content filename.txt",
        "Add-Content filename.txt 'text to append'",
        "Select-String -Pattern 'pattern' filename.txt",
        "(Get-Content filename.txt | Measure-Object -Line).Lines",
        "Sort-Object filename.txt",
        "Get-Unique filename.txt",
        "(Get-Content filename.txt) -replace 'find','replace' | Set-Content filename.txt",
        "Get-Content filename.txt | ForEach-Object { $_.Split(' ')[0] }",
        "Get-Content filename.txt | Out-File -Encoding ascii -LiteralPath filename.txt -MaxLines 100",
        "$PSVersionTable",
        "Get-Volume",
        "Get-Process",
        "Stop-Process -ID process_id -Force",
        "Start-Job -ScriptBlock { command }",
        "Stop-Job -ID job_number",
        "Get-WmiObject -Class Win32_ComputerSystem",
        "Set-LocalUser -Name username -Password (ConvertTo-SecureString 'password' -AsPlainText -Force)",
        "New-LocalUser -Name username -Password (ConvertTo-SecureString 'password' -AsPlainText -Force)",
        "Remove-LocalUser -Name username",
        "if (condition) {\n    # commands\n} else {\n    # commands\n}",
        "for ($i=1; $i -le 10; $i++) {\n    # commands\n}",
        "switch ($variable) {\n    value1 {\n        # commands\n        break\n    }\n    value2 {\n        # commands\n        break\n    }\n    default {\n        # default commands\n    }\n}",
        "Write-Host 'Hello, World!'",
        "Start-Sleep -Seconds 5",
        "exit 0"
    ]
};

// Populate the command options dropdown when a language is selected
document.getElementById('language-options').addEventListener('change', function() {
    var language = this.value;
    var select = document.getElementById('command-options');
    select.innerHTML = ""; // Clear the current options
    for(var i = 0; i < commands[language].length; i++) {
        var option = document.createElement('option');
        option.text = commands[language][i];
        select.add(option);
    }
});

// Add the selected command to the script preview
function addCommand() {
    var select = document.getElementById('command-options');
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
    var language = document.getElementById('language-options').value;
    var extension = language === 'powershell' ? '.ps1' : '.sh';
    // Check if the output to text file checkbox is checked
    var outputToTextFile = document.getElementById('output-to-text-file').checked;
    if (outputToTextFile) {
        extension = '.txt';
    }
    element.setAttribute('download', 'script' + extension);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
