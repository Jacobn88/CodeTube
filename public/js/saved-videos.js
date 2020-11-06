const bodyEl = $(".user-videos")

$(document).ready(function() {
  $.get("/api/videos")
    .then(function(data) {
      bodyEl.empty();
      console.log(data);

      data.forEach(video => { 
          const url = video.url;
          const videoEmbed = `
          <div class="video">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br>
            </div>  
          </div>`
          bodyEl.append(videoEmbed);
      })
  });
});
