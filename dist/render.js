class Renderer{
    constructor(){
        this.source = $('#template').html();
        this.FrindsTemplate = Handlebars.compile(this.source);
    }
    renderData(data){
        let obj = {
            dataArray:data
        }
        const newHTML = this.FrindsTemplate(obj);
        $('.recipes').html('')
        $('.recipes').append(newHTML)
}
}