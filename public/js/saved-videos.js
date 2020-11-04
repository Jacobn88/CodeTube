const bodyEl = $(".user-videos")

$(document).ready(function() {
  $.get("/api/videos")
    .then(function(data) {
      bodyEl.clear;

      result.items.forEach(video => { // Add button to videoEmbed
          const url = video.url;
          const videoEmbed = `
          <div class="video">
              <iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
          </div>`
  
          bodyEl.append(videoEmbed);
      })
  });
});
