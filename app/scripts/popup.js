chrome.tabs.query({
    currentWindow: true,
    active: true
}, function(tabs) {
    urlToDisplay = tabs[0].url;
    generateQRCode(tabs[0].url);
});

function generateQRCode(urlString) {
    $("#qrcodedemo").qrcode({
        "render": "div",
        "width": 100,
        "height": 100,
        "color": "#3a3",
        "text": urlString
    });
}