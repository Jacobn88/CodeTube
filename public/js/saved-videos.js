const bodyEl = $(".user-videos")

$(document).ready(function() {
  $.get("/api/videos")
    .then(function(data) {
      bodyEl.clear;

      result.items.forEach(video => { 
          const url = video.url;
          const videoEmbed = `
          <div class="video">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive" width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>  
            <div class="row justify-content-center saveplaylist">
              <button type="button" class="btn btn-default">Save to Playlist</button>
            </div>
          </div>`
  
          bodyEl.append(videoEmbed);
      })
  });
});
