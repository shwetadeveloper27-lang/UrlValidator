
function checkUrlOnServer(url){
    return new Promise((resolve, reject)=>{
        const delay = 2000;

        setTimeout(()=>{
            const response = mockDatabase[url];
        resolve({url : url,
            exists : response ? response.exists : false,
            type : response ? response.type : null
        })
        }, delay);

    });
}



