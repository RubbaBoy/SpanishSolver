chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        file: 'show_icons.js'
    });
}, {
    url: [{
        hostContains: 'quizlet.com'
    }]
    }
);