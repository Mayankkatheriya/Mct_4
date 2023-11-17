(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  let currentVideoBookmarks = [];

  const fetchBookmarks = () => {
    return new Promise((resolve) => {
      chrome.storage.sync.get([currentVideo], (obj) => {
        resolve(obj[currentVideo] ? JSON.parse(obj[currentVideo]) : []);
      });
    });
  };

  const addNewBookmarkEventHandler = async () => {
    let details = window.prompt("Enter keyPoint")
    const currentTime = youtubePlayer.currentTime;
    const newBookmark = {
      time: currentTime,
      desc: "Bookmark at " + getTime(currentTime),
      dels: details
    };

    currentVideoBookmarks = await fetchBookmarks();

    chrome.storage.sync.set({
      [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time))
    });
  };

  const newVideoLoaded = async () => {
    const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];

    currentVideoBookmarks = await fetchBookmarks();

    if (!bookmarkBtnExists) {
      const bookmarkBtn = document.createElement("img");

      bookmarkBtn.src = chrome.runtime.getURL("Assets/bookmark.png");
      bookmarkBtn.className = "ytp-button " + "bookmark-btn";
      bookmarkBtn.title = "Click to bookmark current timestamp";
      bookmarkBtn.style.height = "20px";
      bookmarkBtn.style.width = "20px";
      bookmarkBtn.style.alignSelf = "center";

      youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
      youtubePlayer = document.getElementsByClassName('video-stream')[0];

      youtubeLeftControls.appendChild(bookmarkBtn);
      bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
    }
  };

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;

    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
    } else if (type === "PLAY") {
      youtubePlayer.currentTime = value;
    } else if ( type === "DELETE") {
      currentVideoBookmarks = currentVideoBookmarks.filter((b) => b.time != value);
      chrome.storage.sync.set({ [currentVideo]: JSON.stringify(currentVideoBookmarks) });

      response(currentVideoBookmarks);
    }
  });

  // newVideoLoaded();
})();

const getTime = t => {
  var date = new Date(0);
  date.setSeconds(t);

  return date.toISOString().substr(11, 8);
};


// let elementParent = document.querySelector(".ytp-time-display");
// elementParent.style.display = "flex";
// elementParent.style.alignItems = "center";
// let timeStamp = document.querySelector(".ytp-time-current");
// let referenceElement = document.querySelector(
//   ".ytp-clip-watch-full-video-button-separator"
// );

// let bookmarkIcon = document.createElement("img");
// bookmarkIcon.src =
//   "https://cdn.pixabay.com/photo/2012/04/02/16/07/plus-24844_1280.png";
// bookmarkIcon.id = "bookmarkIcon";
// bookmarkIcon.style.cssText =
//   "width: 1.5rem; height: 1.5rem; cursor: pointer; padding: 0 2rem";
// elementParent.insertBefore(bookmarkIcon, referenceElement);

// bookmarkIcon.addEventListener("click", () => {
//   let videoId = window.location.href.split("?")[1].substr(2);

//   // Retrieve existing timestamps from storage
//   chrome.storage.local.get({ bookmarks: {} }, function (result) {
//     let timeStampArray = result.bookmarks[videoId] || [];

//     // Add the current timestamp to the array
//     if(timeStampArray.indexOf(timeStamp.innerText) === -1){
//       timeStampArray.push(timeStamp.innerText);
//     }

//     // Save the updated array back to storage
//     chrome.storage.local.set(
//       { bookmarks: { ...result.bookmarks, [videoId]: timeStampArray } },
//       () => {
//         console.log("Data added to storage:", {
//           bookmarks: { ...result.bookmarks, [videoId]: timeStampArray },
//         });
//       }
//     );

//     console.log("Timestamp added:", timeStamp.innerText);
//     console.log("Video URL:", window.location.href);
//     console.log("Video ID:", videoId);
//   });
// });

// chrome.runtime.onMessage.addListener((data, sender, response)=>{
//   if(data.type === 'PLAY'){
//     let youtubePlayer = document.querySelector("video");
//     youtubePlayer.currentTime = data.timeStampValue;
//   }
// });