// https://developer.chrome.com/docs/extensions/mv2/messaging/
const button = document.querySelector("button");
button.onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "just do it."}, function(response) {
          console.log(response.farewell);
        });
    });
};