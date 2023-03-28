<?php
if (!function_exists('portfolio_theme_setup')) :
  function portfolio_theme_setup()
  {
    add_theme_support('post-thumbnails');
    add_theme_support('menus');

    register_nav_menu('site_nav', 'Site Nav');
  }
endif;
add_filter('after_setup_theme', 'portfolio_theme_setup');
