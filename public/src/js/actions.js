var installButton = document.querySelector('#install-button');

function downloadApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then(function (choiceResult) {
            if (choiceResult.outcome === 'dismissed') {
                console.log('User cancelled installation');
            } else {
                console.log('User added to homescreen');
            }
        });

        deferredPrompt = null;
    }
}

installButton.addEventListener('click', downloadApp);

// check if app is installed
function isRunningStandalone() {
    return (window.matchMedia('(display-mode: standalone)').matches);
}

// hide install button because app is installed
if (isRunningStandalone()) {
    installButton.style.visibility = 'hidden';
}