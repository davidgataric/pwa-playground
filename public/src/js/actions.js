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