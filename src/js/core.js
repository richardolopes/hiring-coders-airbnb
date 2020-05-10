function template(model) {
    return `
        <div class="card-item">
            <div class="card" style="width: 18rem;">
                <img src="${model.photo}" class="card-img-top" alt="${model.name}">
                <div class="card-body">
                    <h5 class="card-title">${model.property_type}</h5>
                    <p class="card-text">${model.name}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">R$ ${model.price},00/noite</li>
                </ul>
                <div class="card-body">
                    <a href="#" onclick="setLocation(${model.latitude}, ${model.longitude})" class="card-link">Ver no mapa</a>
                </div>
            </div>
        </div>
    `;
}
//onclick="setLocation(${model.latitude}, ${model.longitude})"
function getTemplate() {
    $.ajax({
        type: 'GET',
        url: "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72",
        dataType: 'json',
        success: function (data) {
            $("#loading").remove();

            for (i = 0; i <= data.length; i++) {
                data[i].longitude = maps[i].longitude;
                data[i].latitude = maps[i].latitude;

                $('#acres').append((template(data[i])));
            }
        }
    });
}

getTemplate()