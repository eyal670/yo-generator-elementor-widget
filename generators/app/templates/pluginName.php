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
