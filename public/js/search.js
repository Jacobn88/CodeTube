const bodyEl = $("#searches");



async function generateSearch(search) {
    $.get("/api/search/" + search)
        .then(function (result) {
            console.log(result.items[0]);
            bodyEl.empty();

            result.items.forEach(video => { 
                const url = "https://www.youtube.com/embed/" + video.id.videoId

                const videoEmbed = `
            <div>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div class="row justify-content-center saveplaylist">
                    <button type="button" class="btn btn-default save-button" data-url="${url}">Save to Playlist</button>
                </div>
            </div>`

                bodyEl.append(videoEmbed);
            })
        })
}

//Event listener that calls generateSearch when a search is clicked

$(".search-button").on("click", function () {
    const query = $(this).text();
    generateSearch(query);
})

$(document).on("click", ".save-button", function() {
    const url = ($(this).attr("data-url"));
    $.get("/api/user_data").then(function(data){
        const newVideo = {
        url: url,
        user: data.id
    }
    return newVideo;
    }).then(function (newVideo){
        $.post("/api/videos", newVideo);
    })
})