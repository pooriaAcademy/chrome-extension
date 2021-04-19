setInterval(
    () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "repeat"}, function(response) {
            console.log(response.farewell);
            });
        });
    }
, 5000);