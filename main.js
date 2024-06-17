function generateTheme() {
    const backgroundColor = document.getElementById('backgroundColor').value;
    const foregroundColor = document.getElementById('foregroundColor').value;
    const cursorColor = document.getElementById('cursorColor').value;
    const fontFamily = document.getElementById('fontFamily').value;

    const themeData = {
        background: backgroundColor,
        foreground: foregroundColor,
        cursorColor: cursorColor,
        fontFamily: fontFamily
    };

    const themeElement = document.getElementById('generatedTheme');
    themeElement.innerHTML = `<pre>${JSON.stringify(themeData, null, 2)}</pre>`;
}

function exportTheme() {
    const themeElement = document.getElementById('generatedTheme');
    const themeData = JSON.parse(themeElement.innerText);

    const blob = new Blob([JSON.stringify(themeData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'theme.json';
    a.click();
    URL.revokeObjectURL(url);
}