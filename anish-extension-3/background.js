chrome.runtime.onInstalled.addListener(() => {
    console.log("extension is installed");
})

chrome.bookmarks.onCreated.addListener(() => {
    alert("Bookmark created");
})