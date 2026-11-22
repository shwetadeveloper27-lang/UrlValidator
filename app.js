
const input = document.getElementById("urlText");
let textMessage = document.getElementById("textMessage");
let loading = document.getElementById("loading");
let textAreaMessage = document.getElementById("urlTextArea");
let timeout;

input.addEventListener("input",function(event){
    clearTimeout(timeout);
    const url = event.target.value.trim();
    let sendReq = true;
    if(url !== ""){  
        timeout = setTimeout(() => {       
          if (validateUrl(url)) {
            textMessage.textContent = "Valid URL";
            textMessage.style.color = "green";
            if(sendReq){
                sendReq = false;
                getUrlDetails(url);
                setTimeout(()=> {sendReq = true;}, 2000);
            }
        } else {
            textMessage.textContent = "Invalid URL";
            textMessage.style.color = "red";
        }
        }, 1000);
    }
});

function validateUrl(strUrl){
    try{
        const url = new URL(strUrl);
        if( url.protocol !== "http:" && url.protocol !=="https:")
            return false;
        if (!url.hostname.includes(".")) 
            return false;
        const domainRegex = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
        if (!domainRegex.test(url.hostname)) 
            return false; 
        return true;
    }catch(error){
        return false;
    }
}

async function getUrlDetails(url) {
    loading.textContent = "Loading...";
    try{
        const response = await checkUrlOnServer(url);
        loading.textContent = "";
        textAreaMessage.textContent = "Url: "+ response.url
        +"\n"+"Url exists: "+response.exists
        +"\n"+"Url type: "+response.type;
    }catch(error){
        console.error("Server error");
        emtpyFields();
    }
}

function emtpyFields(){
    loading.textContent = "";
    textAreaMessage.textContent = "";
}