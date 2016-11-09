<!-- matchHeight Custom-->

    (function() {

        $(function() {
            // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)

            // get test settings
            var byRow = $('body').hasClass('.container-fluid');

            // apply matchHeight to each item container's items
            $('.items-container').each(function() {
                $(this).find('.item').matchHeight({
                    byRow: byRow
                });
            });
        });
    })();
