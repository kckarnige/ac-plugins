    /// From StackOverflow: https://stackoverflow.com/questions/6390341/how-to-detect-if-url-has-changed-after-hash-in-javascript
    var oldURL = "";
    var currentURL = window.location.href;
    function checkURLchange(currentURL){
        if(currentURL != oldURL){
            oldURL = currentURL;
        }
    
        oldURL = window.location.href;
        setTimeout(function() {
            checkURLchange(window.location.href);
            document.getElementsByClassName("header-2V-4Sw")[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
        }, 1000);
    }
    
    checkURLchange();