const Render = new RendererHTML()


function getDataFunction(){
    let value = $("input").val()
    $.get(`/recipes/${value}`,function(response){
         Render.renderData(response)
    })
}

$(document).on('click', '.img', function () {
    let imgURL = $(this).data().imgurl
    let value = $("input").val()
    $.get(`/recipes/${value}`,function(response){
         for(let elemnt of response)
            if(elemnt.thumbnail === imgURL)
              alert(elemnt.ingredients[0])
    })
});