window.openLoginWindow = function() {
var content = $('pushmenu');
size = content.getSize();
PushBoxWindow.open(content, {
    handler: "append",
    size: size,
    anchor: this,
    push: true,
    classWindow: 'pushmenu'
}).addEvent('close', function() {
    //content.parentNode.removeChild(content);
    window.setLoginWindowMessage('');
    $('pushmenu-parent').appendChild(content);
});

};


window.setLoginWindowMessage = function(message) {
if ((!message) || message == '') {

    $('pushmenu-message').setStyle('display', 'none');

} else {

    $('pushmenu-message').setStyle('display', 'block');

}

$('pushmenu-message').innerHTML = message;

};

window.addEvent("load", function() {
    $$('.item-113')[0].addEvent('click', function(e){
    	e.stop();
    	window.openLoginWindow();
    });
});