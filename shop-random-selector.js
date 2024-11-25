jQuery(document).ready(function($) {
    const currentURL = window.location.href;

    // Shop Page
    const baseShopURL = 'https://www.feldur.is/shop';
    if (currentURL === baseShopURL || currentURL === baseShopURL + '/') {
        updateSortDropdown('rand', 'Random');
    }

    // New Category Page
    const baseNewCategoryURL = 'https://www.feldur.is/product-category/new';
    if (currentURL === baseNewCategoryURL || currentURL === baseNewCategoryURL + '/') {
        updateSortDropdown('date', 'Date');
    }

    function updateSortDropdown(orderParam, labelText) {

        // Find the currently-selected span with the specific text "Sort by"
        const $currentlySelected = $('.currently-selected').filter(function () {
            return $(this).text().trim().startsWith('Sort by');
        }).find('strong');

        // Find the "target option" in the dropdown
        const $targetOption = $(`.sort-param-order ul li a[href*="product_order=${orderParam}"]`);

        if ($currentlySelected.length && $targetOption.length) {
            // Update the currently-selected text
            $currentlySelected.text(labelText);

            // Optionally, mark the item as selected
            $('.current-param').removeClass('current-param');
            $targetOption.parent().addClass('current-param');

        }
    }

});
