<?php

function poeticsoft_openai_data(WP_REST_Request $req) {

  $res = new WP_REST_Response();

  try { 

    $res->set_data('data');  
    
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
      'poeticsoft/openai',
      'data',
      array(
        array(
          'methods'  => 'GET',
          'callback' => 'poeticsoft_openai_data',
          'permission_callback' => '__return_true'
        )
      )
    );
  }
);
