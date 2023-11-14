chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  // console.log(tabId, changeInfo, tab);
  // let e = await chrome.tabs.query({active: true, lastFocusedWindow: true})
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(urlParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});