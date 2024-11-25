<?php
/*
Plugin Name: Shop Random Selector
Description: Automatically selects "Random" in the sort dropdown on the WooCommerce shop page.
Version: 1.0
Author: WooXperto
*/

// Enqueue custom JavaScript for the shop page only
function shop_random_selector_enqueue_scripts() {
    if (is_shop() || is_product_category()) {
        wp_enqueue_script(
            'shop-random-selector',
            plugin_dir_url(__FILE__) . 'shop-random-selector.js',
            array('jquery'),
            null,
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'shop_random_selector_enqueue_scripts');

add_filter('woocommerce_get_availability', 'custom_out_of_stock_message', 10, 2);

function custom_out_of_stock_message($availability, $product) {
    if (!$product->is_in_stock()) {
        $availability['availability'] = __('Not Available', 'woocommerce'); // Replace 'Not Available' with your desired text.
    }
    return $availability;
}