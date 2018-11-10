<?php

/**
 * @file
 * template.php
 */

// Use custom template files for different view modes

function bootstrap_chiarugi_preprocess_node(&$vars) {
  // Custom display templates will be called node--[type]--[viewmode].tpl.php 
  $vars['theme_hook_suggestions'][] = 'node__' . $vars['type'] . '__' . $vars['view_mode']; 
}

// Remove Height and Width Inline Styles from Drupal Images 

function bootstrap_chiarugi_preprocess_image(&$variables) {
  $attributes = &$variables['attributes'];

  foreach (array('width', 'height') as $key) {
    unset($attributes[$key]);
    unset($variables[$key]);
  }
}

function bootstrap_chiarugi_facetapi_deactivate_widget($variables) {
  return ' <i class="glyphicon glyphicon-remove"></i>';
}

