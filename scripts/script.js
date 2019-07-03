
var flickrApiUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search";
var options = {
    api_key: "a2187900f346477d45d3299000a3d369",
    tags: "dogs",
    safe_search: "safe",
    media: "photos",
    per_page: 6,
    page: 1,
    format: "json",
    nojsoncallback: 1,
    extras:"url_o"
}

$(document).ready(() => {
    $.getJSON(flickrApiUrl, options).done(function (data) {

        $.each(data.photos.photo, function (i, photo) {
            //constructing url
            let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            let title = photo.title;
            let id=photo.id;
            if(title==""){
                title="Sem Título";
            }

            //div template
            let div = `        
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <a href=https://www.flickr.com/photo.gne?id=${id} target="_blank">
                    <img src=${url}class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><rect width="100%" height="100%" fill="#55595c"></rect></img>
                   </a>
                    <div class="card-body">
                    <p class="card-text">${title}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        </div>
                    </div>
                    </div>
                </div>
            </div>`
            $(".row").append(div);



        });

    }).fail(function () {
        console.log("Não foi possível completar a requisição");
    });

});


