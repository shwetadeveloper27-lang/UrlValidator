const mockDatabase = {

    "https://www.microsoft.com": {
        exists: true,
        type: "folder"
    },

    "https://wwww.microsoft.com/about": {
        exists: true,
        type: "folder"
    },

    "https://www.microsoft.com/document.pdf": {
        exists: true,
        type: "file"
    },

    "http://www.microsoft.com/image.png": {
        exists: true,
        type: "file"
    },

    "https://wwww.microsoft.com/invalid": {
        exists: false,
        type: null
    },

    "https://www.google.com": {
        exists: true,
        type: "folder"
    }

};