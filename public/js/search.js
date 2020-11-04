// const env = require('dotenv').config(); COME BACK TO THIS!!!!!!!!

const bodyEl = $("#searches");

async function generateSearch(search) {
    const searchResults = $.ajax({
        method: "GET",
        url: "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + search + "&type=video&videoDefinition=high&key=" + "AIzaSyBOLEd4BA684o8JIFBgLks4HzKjLlRCh-U"
    })

    const result = await searchResults;
    bodyEl.clear;

    result.items.forEach(video => { 
        const url = "https://www.youtube.com/embed/" + video.id.videoID
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
}

//Event listener that calls generateSearch when a search is clicked

$(".search-button").on("click", function () {
    const query = $(this).text();
    generateSearch(query);
})