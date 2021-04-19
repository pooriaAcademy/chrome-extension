chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        if (request.greeting == "just do it."){
            document.body.style.background = "#f3f3f3 url('https://media.tenor.com/images/af0388c95262099b2ec37546616e52cb/tenor.gif') center";
        }
        if (request.greeting == "repeat"){
            document.body.style.background = "#f3f3f3 url('https://kindyou.com/wp-content/uploads/2018/01/funny-motivational-memes17856.jpg') center";
        }
        sendResponse({farewell: "goodbye"});
    }
);

console.log("started listening");
