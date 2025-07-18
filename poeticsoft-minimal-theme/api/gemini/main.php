<?php

require_once(__DIR__ . '/keys.php');

function poeticsoft_gemini_models(WP_REST_Request $req) {

  $res = new WP_REST_Response();

  try {    

    $apikey = poeticsoft_gemini_get_key('geminikey');

    $url = 'https://generativelanguage.googleapis.com/v1beta/models?key=' . $apikey;

    $response = wp_remote_get($url);

    // if (is_wp_error($response)) {

    //   throw new Exception(
    //     $response->get_error_message(), 
    //     500
    //   ); 
    // }

    $res->set_data(json_decode($response['body']));
    
  } catch (Exception $e) {
    
    $res->set_status($e->getCode());
    $res->set_data($e->getMessage());
  }

  return $res;
}

function poeticsoft_gemini_test(WP_REST_Request $req) {

  $res = new WP_REST_Response();

  try {    

    $apikey = poeticsoft_gemini_get_key('geminikey');

    $url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-8b-latest:generateContent?key=' . $apikey;

    $contents = [
      [
        'role' => 'user',
        'parts' => [
          [
            'text' => 'Escribe un poema corto sobre el mar.'
          ]
        ]
      ]
    ];

    $requestBody = [
      'contents' => $contents,
      'generationConfig' => [
        'temperature' => 0.7,
        'topP' => 0.95,
        'topK' => 40,
      ]
    ]; 
    
    $args = array(
      'method'      => 'POST',
      'headers'     => [
        'Content-Type' => 'application/json',
      ],
      'body'        => json_encode($requestBody),
      'timeout'     => 45
    );

    $response = wp_remote_post($url, $args);

    if (is_wp_error($response)) {

      throw new Exception(
        $response->get_error_message(), 
        500
      ); 
    }

    $responsebody = json_decode($response['body']);

    $res->set_data($responsebody);
    
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
      'poeticsoft/gemini',
      'models',
      array(
        array(
          'methods'  => 'GET',
          'callback' => 'poeticsoft_gemini_models',
          'permission_callback' => '__return_true'
        )
      )
    );

    register_rest_route(
      'poeticsoft/gemini',
      'test',
      array(
        array(
          'methods'  => 'GET',
          'callback' => 'poeticsoft_gemini_test',
          'permission_callback' => '__return_true'
        )
      )
    );
  }
);