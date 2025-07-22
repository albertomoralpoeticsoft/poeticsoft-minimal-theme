<?php

if (!function_exists('poeticsoft_block_basegemini_render_callback')) {

  function poeticsoft_block_basegemini_render_callback(
    $attributes,
    $content
  ) { 
    
    $jsonattributes = json_encode($attributes);
    
    return "<div class='wp-block-poeticsoft-basegemini'>
      Bloque dinámico: $jsonattributes
    </div>";
  }
}

echo poeticsoft_block_basegemini_render_callback($attributes, $content);