<?php

// Playmotiv blocks category

add_filter(
  'block_categories_all',
  function ($categories, $post) {

    return array_merge(
      $categories,
      array(
        array(
          'slug' => 'poeticsoft',
          'title' => __(
            'Poeticsoft',
            'poeticsoft' 
          ),
        ),
      )
    );
  },
  10,
  2
);

add_action(
  'enqueue_block_editor_assets',
  function () {   
    
    $blocks = [

    ];

    foreach($blocks as $blockname => $block) {

      wp_register_style(
        'poeticsoft_block_' . $blockname . '_style',
        get_template_directory_uri() . '/blocks/' . $blockname . '/main.css',
        array(
          'wp-edit-blocks',          
          'wp-components'
        ),
        filemtime(get_template_directory() . '/blocks/' . $blockname . '/main.css')
      );

      wp_register_script(
        'poeticsoft_block_' . $blockname . '_edit_script',
        get_template_directory_uri() . '/blocks/' . $blockname . '/main.js',
        array(
          'wp-blocks',
          'wp-block-editor',
          'wp-element',
          'wp-components',
          'wp-data',
          'wp-hooks',
          'lodash'
        ),
        filemtime(get_template_directory() . '/blocks/' . $blockname . '/main.js'),
        true
      );

      $scripts = array(
        'editor_script' => 'poeticsoft_block_' . $blockname . '_edit_script',
        'style' => 'poeticsoft_block_' . $blockname . '_style'
      );

      register_block_type(
        'poeticsoft/' . $blockname,
        $scripts
      );
    }
  }
);

add_filter(
  'render_block_playmotivcloud/reading',
  function(
    $block_content, 
    $block
  ) {

    $newblockcontent = $block_content;
    
    if(str_contains($block['attrs']['className'], 'dialog')) {

      $newblockcontent = preg_replace(
        '/wp-block-playmotivcloud-reading/i', 
        'wp-block-playmotivcloud-reading wp-block-playmotivcloud-reading-dialog', 
        $newblockcontent,
        1
      );
    }

    return $newblockcontent;
  },
  10,
  2
);

add_filter(
  'render_block_core/group',
  function(
    $block_content, 
    $block
  ) {

    $newblockcontent = $block_content;
    
    if(str_contains($block['attrs']['className'], 'dialogslide')) {

      $blockid = $block['attrs']['blockid'];
      $blockname = $block['attrs']['metadata']['name'];
      $slidekpis = htmlentities($block['attrs']['dialogslidekpis'], ENT_QUOTES, 'UTF-8');

      $newblockcontent = preg_replace(
        '/<div /i', 
        '<div data-slidename="' . 
          $blockname .
          '" data-slidekpis="' . 
          $slidekpis . 
          '"', 
        $newblockcontent,
        1
      );
    }

    return $newblockcontent;
  },
  10,
  2
);