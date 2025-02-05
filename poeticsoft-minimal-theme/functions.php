<?php

add_filter('xmlrpc_enabled', '__return_false');
add_filter('login_display_language_dropdown', '__return_false');

function core_log($display) { 

  $text = is_string($display) ? $display : json_encode($display, JSON_PRETTY_PRINT);

  file_put_contents(
    WP_CONTENT_DIR . '/core_log.txt',
    $text . PHP_EOL,
    FILE_APPEND
  );
}

/**
 * Apps
 */

$pageapps = [
  'home' => 'clouds'
];

add_action( 
	'wp_enqueue_scripts', 
	function () use ($pageapps) {

    global $post;

    if(null != $post) {

      $post_slug = $post->post_name;
      $appname = $pageapps[$post_slug];

      // Apps

      wp_enqueue_script(
        'poeticsoft-theme-app', 
        get_stylesheet_directory_uri() . '/apps/' . $appname . '/main.js',
        [], 
        filemtime(get_stylesheet_directory() . '/apps/' . $appname . '/main.js'),
        true
      );
  
      wp_enqueue_style( 
        'poeticsoft-theme-app',
        get_stylesheet_directory_uri() . '/apps/' . $appname . '/main.css', 
        array(
          'astra-theme-css'
        ), 
        filemtime(get_stylesheet_directory() . '/apps/' . $appname . '/main.css'),
        'all' 
      );

      // Dialog

      wp_enqueue_script(
        'poeticsoft-theme-dialog', 
        get_stylesheet_directory_uri() . '/apps/dialog/main.js',
        ['jquery'], 
        filemtime(get_stylesheet_directory() . '/apps/dialog/main.js'),
        true
      );
  
      wp_enqueue_style( 
        'poeticsoft-theme-dialog',
        get_stylesheet_directory_uri() . '/apps/dialog/main.css', 
        array(
          'astra-theme-css'
        ), 
        filemtime(get_stylesheet_directory() . '/apps/dialog/main.css'),
        'all' 
      );
    }
	}, 
	999 
);