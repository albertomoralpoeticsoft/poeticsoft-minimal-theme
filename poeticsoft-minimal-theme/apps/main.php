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

add_action( 
	'wp_enqueue_scripts', 
	function () use ($pageapps) {

    global $post;

    if(null != $post) {

      $post_slug = $post->post_name;

      if(isset($pageapps[$post_slug])) {

        $appname = $pageapps[$post_slug];

        // Apps

        wp_enqueue_script(
          'poeticsoft-theme-app-' . $appname, 
          get_stylesheet_directory_uri() . '/apps/' . $appname . '/main.js',
          [], 
          filemtime(get_stylesheet_directory() . '/apps/' . $appname . '/main.js'),
          true
        );
    
        wp_enqueue_style( 
          'poeticsoft-theme-app-' . $appname,
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
    } 

    // Portfolio

    wp_enqueue_script(
      'poeticsoft-theme-portfolio', 
      get_stylesheet_directory_uri() . '/apps/portfolio/main.js',
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
      get_stylesheet_directory_uri() . '/apps/portfolio/main.css', 
      array(
        'astra-theme-css'
      ), 
      filemtime(get_stylesheet_directory() . '/apps/portfolio/main.css'),
      'all' 
    );
	}, 
	999 
);