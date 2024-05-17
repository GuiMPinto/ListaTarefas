$(document).ready(function()
{
    $('form').on('submit',function(e)
    {
        e.preventDefault()
        let tarefasHtml = $('[type="text"]').val()
        let itemLista = $('<li></li>')
        $(tarefasHtml).appendTo(itemLista)
        $('[type="text"]').val('')
        $(itemLista)
    })

    $(itemLista).click(function()
    {
        $(itemLista).style.text-decoration(line-throug)
    })
})