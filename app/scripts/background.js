chrome.contextMenus.create({
    "title": "Generate QR Code",
    "contexts": ["selection"],
    "onclick": genericOnClick
});

function genericOnClick(info, tab) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            method: "generateQR",
            selText: info.selectionText
        }, function(response) {
            alert(response.word);
        });
    });
}