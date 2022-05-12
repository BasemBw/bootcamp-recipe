const Render = new RendererHTML()


function getDataFunction(){
    let value = $("input").val()
    $.get(`/recipes/${value}`,function(response){
         Render.renderData(response)
    })
}

$(document).on('click', '.img', function () {
    alert($(this).closest("div").find("ul").children().first()[0].firstChild.data)
});