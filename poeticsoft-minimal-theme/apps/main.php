<?php

/**
 * Apps
 */

$pageapps = [
  'home' => 'clouds',
  'wordpress' => 'rain2',
  'react' => 'fire',
  'gamificacion' => 'blur',
  'interaccion' => 'halo'
];

if(isset($_GET['app'])) { // ?app=local

  $url = 'http://localhost:8090'; 

} else {

  $url = get_stylesheet_directory_uri();
}

add_action( 
	'wp_enqueue_scripts', 
	function () use ($pageapps, $url) {

    global $post;

    if(null != $post) {

      $post_slug = $post->post_name;

      if(isset($pageapps[$post_slug])) {

        $appname = $pageapps[$post_slug];

        // Apps

        wp_enqueue_script(
          'poeticsoft-theme-app-' . $appname, 
          $url . '/apps/' . $appname . '/main.js',
          [], 
          filemtime(get_stylesheet_directory() . '/apps/' . $appname . '/main.js'),
          true
        );
    
        wp_enqueue_style( 
          'poeticsoft-theme-app-' . $appname,
          $url . '/apps/' . $appname . '/main.css', 
          [], 
          filemtime(get_stylesheet_directory() . '/apps/' . $appname . '/main.css'),
          'all' 
        );

        // Dialog

        wp_enqueue_script(
          'poeticsoft-theme-dialog', 
          $url . '/apps/dialog/main.js',
          ['jquery'], 
          filemtime(get_stylesheet_directory() . '/apps/dialog/main.js'),
          true
        );
    
        wp_enqueue_style( 
          'poeticsoft-theme-dialog',
          $url . '/apps/dialog/main.css', 
          [], 
          filemtime(get_stylesheet_directory() . '/apps/dialog/main.css'),
          'all' 
        );
      }
    } 

    // Portfolio

    wp_enqueue_script(
      'poeticsoft-theme-portfolio', 
      $url . '/apps/portfolio/main.js',
      [
        'jquery',
        'jquery-ui-core',
        'jquery-ui-widget',
        'jquery-ui-mouse'
      ], 
      filemtime(get_stylesheet_directory() . '/apps/portfolio/main.js'),
      true
    );

    wp_enqueue_style( 
      'poeticsoft-theme-portfolio',
      $url . '/apps/portfolio/main.css', 
      [], 
      filemtime(get_stylesheet_directory() . '/apps/portfolio/main.css'),
      'all' 
    );
	}, 
	999 
);