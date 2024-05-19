$(document).ready(function()
{
    $('form').on('submit',function(e)
    {
        e.preventDefault()
        let tarefasHtml = $('[type="text"]').val()
        let itemLista = $('<li>'+tarefasHtml+'</li>')
        $(tarefasHtml).appendTo(itemLista)
        $(itemLista).appendTo('ul')
        $('[type="text"]').val('')
    })
    
    $(itemLista).click(function()
    {
        $(itemLista).style.text-decoration(line-throug)
    })
})