import { getActiveTabURL } from "./utlis.js";

const addNewBookmark = (bookmarks, bookmark) => {
  const bookmarkTitleElement = document.createElement("div");
  const bookmarkdels = document.createElement("div")
  const controlsElement = document.createElement("div");
  const newBookmarkElement = document.createElement("div");

  bookmarkTitleElement.textContent = bookmark.desc;
  bookmarkTitleElement.className = "bookmark-title";
  controlsElement.className = "bookmark-controls";

  bookmarkdels.textContent = bookmark.dels;
  bookmarkdels.className = "bookmark-dels";

  setBookmarkAttributes("play", onPlay, controlsElement);
  setBookmarkAttributes("delete", onDelete, controlsElement);

  newBookmarkElement.id = "bookmark-" + bookmark.time;
  newBookmarkElement.className = "bookmark";
  newBookmarkElement.setAttribute("timestamp", bookmark.time);

  newBookmarkElement.appendChild(bookmarkTitleElement);
  newBookmarkElement.appendChild(bookmarkdels);
  newBookmarkElement.appendChild(controlsElement);
  bookmarks.appendChild(newBookmarkElement);
};

const viewBookmarks = (currentBookmarks = []) => {
  const bookmarksElement = document.getElementById("bookmarks");
  bookmarksElement.innerHTML = "";

  if (currentBookmarks.length > 0) {
    for (let i = 0; i < currentBookmarks.length; i++) {
      const bookmark = currentBookmarks[i];
      addNewBookmark(bookmarksElement, bookmark);
    }
  } else {
    bookmarksElement.innerHTML = '<i class="row">No bookmarks to show</i>';
  }

  return;
};

const onPlay = async (e) => {
  const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
  const activeTab = await getActiveTabURL();

  chrome.tabs.sendMessage(activeTab.id, {
    type: "PLAY",
    value: bookmarkTime,
  });
};

const onDelete = async (e) => {
  const activeTab = await getActiveTabURL();
  const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
  const bookmarkElementToDelete = document.getElementById(
    "bookmark-" + bookmarkTime
  );

  bookmarkElementToDelete.parentNode.removeChild(bookmarkElementToDelete);

  chrome.tabs.sendMessage(
    activeTab.id,
    {
      type: "DELETE",
      value: bookmarkTime,
    },
    viewBookmarks
  );
};

const setBookmarkAttributes = (src, eventListener, controlParentElement) => {
  const controlElement = document.createElement("img");

  controlElement.src = "./Assets/" + src + ".png";
  controlElement.title = src;
  controlElement.addEventListener("click", eventListener);
  controlParentElement.appendChild(controlElement);
};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  const queryParameters = activeTab.url.split("?")[1];
  const urlParameters = new URLSearchParams(queryParameters);

  const currentVideo = urlParameters.get("v");

  if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
    chrome.storage.sync.get([currentVideo], (data) => {
      const currentVideoBookmarks = data[currentVideo]
        ? JSON.parse(data[currentVideo])
        : [];

      viewBookmarks(currentVideoBookmarks);
    });
  }
  else {
    const container = document.getElementsByClassName("container")[0];

    container.innerHTML =
      '<div class="title">This is not a youtube video page.</div>';
  }
});

// import { getCurrentTab } from "./utlis.js";

// console.log(getCurrentTab());

// let heading = document.querySelector(".title");
// let bookmarks = document.querySelector(".bookmarks");
// let tabUrl = "";

// getCurrentTab()
//   .then((res) => {
//     tabUrl = res.url;
//     if (tabUrl.includes("www.youtube.com/")) {
//       heading.innerText = "YouTube TimeStamps";
//     } else {
//       console.log(tabUrl);
//       heading.innerText = "This is not a Youtube Page";
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // to convert timestamp in seconds
// let splitTime = (time) => {
//   let timeArray = time.split(":");
//   let timeInSeconds =
//     timeArray.length > 2
//       ? parseInt(timeArray[0]) * 60 * 60 +
//         parseInt(timeArray[1]) * 60 +
//         parseInt(timeArray[2])
//       : parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
//   return timeInSeconds;
// };

// // Function to add a timestamp to the extension popup
// let addBookmarkElement = (time, url) => {
//   let timeInSeconds = splitTime(time);

//   let bookmarkElement = document.createElement("div");

//   bookmarkElement.className = "bookmark";
//   bookmarkElement.innerHTML = `<span class = "bookmark-title">Bookmark at </span><span class="time">${time}</span>
//     <div class = "bookmark-controls">
//         <img src="./Assets/play.png" title = "play" class="play" alt="${url}&t=${timeInSeconds}">
//         <img src="./Assets/delete.png" title = "delete bookmark" class="delete">
//     </div>`;

//   bookmarks.appendChild(bookmarkElement);
// };

// document.addEventListener("DOMContentLoaded", () => {
//   let body = document.querySelector("body");
//   body.style.background = `url(${tabUrl})`;

//   // Retrieve data from storage
//   chrome.storage.local.get({ bookmarks: {} }, function (result) {
//     console.log("Stored data in storage:", result);

//     // Extract the array of timestamps for the current videoId
//     const videoId = tabUrl.split("?")[1].substring(2);
//     const timeStampArray = result.bookmarks[videoId] || [];

//     console.log("Retrieved timestamps for videoId:", videoId, timeStampArray);

//     // sorting the timeStampArray to display in order
//     timeStampArray.sort((a, b) => {
//       return splitTime(a) - splitTime(b);
//     });

//     // Clear existing bookmarks
//     bookmarks.innerHTML = "";

//     // Display the data in the extension popup
//     timeStampArray.forEach((timestamp) => {
//       addBookmarkElement(timestamp, tabUrl);
//     });
//   });

//   // Event listener for playing and deleting the bookmarked stamps
//   bookmarks.addEventListener("click", (e) => {
//     if (e.target.className === "delete") {
//       let timeValue =
//         e.target.parentElement.parentElement.firstElementChild
//           .nextElementSibling.innerText;

//       let videoId = tabUrl.split("?")[1].substring(2);

//       // Retrieve existing timestamps from storage
//       chrome.storage.local.get({ bookmarks: {} }, function (result) {
//         let timeStampArray = result.bookmarks[videoId] || [];

//         // delete the current timestamp from the array
//         timeStampArray = result.bookmarks[videoId].filter(
//           (item) => item !== timeValue
//         );

//         // Save the updated array back to storage
//         chrome.storage.local.set(
//           { bookmarks: { ...result.bookmarks, [videoId]: timeStampArray } },
//           () => {
//             console.log("Data added to storage:", {
//               bookmarks: { ...result.bookmarks, [videoId]: timeStampArray },
//             });
//           }
//         );
//       });
//       // Remove the timestamp from the extension popup
//       e.target.parentElement.parentElement.remove();
//     } else if (e.target.className === "play") {
//       // Event listener for playing the video at the bookmarked timestamp
//       let timeValue = e.target.parentElement.previousElementSibling.innerText;
//         chrome.tabs.query(
//           { active: true, currentWindow: true },
//           function (tabs) {
//             const activeTab = tabs[0];
//             chrome.tabs.sendMessage(activeTab.id, {
//             type: "PLAY",
//             url: e.target.name,
//             timeStampValue: splitTime(timeValue),
//           });
//           });
//     }
//   });
// });