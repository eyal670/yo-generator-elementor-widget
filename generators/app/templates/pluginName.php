<?php
/**
 * Plugin Name: <%= plugin_name %>
 * Description: Basic Boilerplate for Custom widgets added to Elementor
 */
if ( ! defined( 'ABSPATH' ) ) exit;
define('<%= plugin_prefix %>_PLUGIN_PLUGIN_PATH', plugin_dir_path( __FILE__ ));
define( '<%= plugin_prefix %>_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );

// plug it in
add_action('plugins_loaded', '<%= plugin_prefix %>_require_files');
function ecw_require_files() {
    require_once <%= plugin_prefix %>_PLUGIN_PLUGIN_PATH.'modules.php';
}


// enqueue your custom style/script as your requirements
// add_action( 'wp_enqueue_scripts', '<%= plugin_prefix %>_enqueue_styles', 25);
function ecw_enqueue_styles() {
    wp_enqueue_style( 'elementor-custom-widget-editor', <%= plugin_prefix %>_PLUGIN_DIR_URL . 'assets/css/editor.css');
}
