// YouTube API Key
const apiKey = 'AIzaSyCijh2_WWaJzRZC2hfkJ5SjK93uCf1GWm0';

// Channel ID
const channelId = 'UC2FYOZ0SgILzjxKt98rwTfQ';

// Get the latest video
function getLatestVideo() {
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&type=video&key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const videoId = data.items[0].id.videoId;
      embedVideo(videoId);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Embed the video on the page
function embedVideo(videoId) {
  const videoContainer = document.getElementById('youtube-video');
  videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}

// Call the function to get the latest video
getLatestVideo();
