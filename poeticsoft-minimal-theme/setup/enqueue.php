<?php

add_action( 
	'wp_enqueue_scripts', 
	function () {

    if(isset($_GET['app'])) { // ?app=local

      $url = 'http://localhost:8090'; 

    } else {

      $url = get_stylesheet_directory_uri();
    }

    // Theme

    wp_enqueue_script(
      'poeticsoft-theme-theme', 
      $url . '/theme/main.js',
      [], 
      filemtime(get_stylesheet_directory() . '/theme/main.js'),
      true
    );

    wp_enqueue_style( 
      'poeticsoft-theme-theme',
      $url . '/theme/main.css', 
      [], 
      filemtime(get_stylesheet_directory() . '/theme/main.css'),
      'all' 
    );
	}, 
	15 
);