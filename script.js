$("ol[data-color]").each(function() {
$(this).children('li').css('color', $(this).data('color'))
});
