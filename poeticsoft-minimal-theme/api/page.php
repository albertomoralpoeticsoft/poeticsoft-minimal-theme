<?php

function poeticsoft_page(WP_REST_Request $req) {

  $res = new WP_REST_Response();

  try {  

    $url = $req->get_param('url');

    $postid = url_to_postid($url);
    $post = get_post($postid);
    $posthtml = preg_replace('/<!--(.|\s)*?-->/', '', $post->post_content);
    $posthtml = preg_replace('/\n/', '', $posthtml);
    $posthtml = do_shortcode($posthtml);

    $res->set_data([
      'title' => $post->post_title,
      'content' => $posthtml
    ]);
    
  } catch (Exception $e) {
    
    $res->set_status($e->getCode());
    $res->set_data($e->getMessage());
  }

  return $res;
}

add_action(
  'rest_api_init',
  function () {

    register_rest_route(
      'poeticsoft',
      'page',
      array(
        array(
          'methods'  => 'POST',
          'callback' => 'poeticsoft_page',
          'permission_callback' => '__return_true'
        )
      )
    );
  }
);