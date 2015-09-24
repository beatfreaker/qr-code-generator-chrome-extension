var divContent = '<div class="qr-code-container" id="qrcodecontainer">';
divContent += '<div class="qr-code-wrapper" id="qrcodewrapper">';
divContent += '</div>';
divContent += '</div>';
document.body.innerHTML += divContent;

closeQRDiv();
function closeQRDiv(){
document.getElementById("qrcodecontainer").style.display = "none";
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.method == "generateQR") {
        document.getElementById("qrcodewrapper").innerHTML = '<div id="close" class="arrow-t-b" onclick="document.getElementById(\'qrcodecontainer\').style.display = \'none\';">Close<div class="arrow-l-r"> </div></div>';
        $(".qr-code-wrapper").qrcode({
            "render": "div",
            "width": 100,
            "height": 100,
            "color": "#3a3",
            "size": 150,
            "text": message.selText
        });
	document.getElementById("qrcodecontainer").style.display = "block";
    }
});