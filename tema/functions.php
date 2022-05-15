<?php
    /* css and js */

    function themeslug_enqueue_style() {
            wp_enqueue_style( 'bootstrap', get_template_directory_uri().'/css/bootstrap.css');
            wp_enqueue_style( 'style', get_stylesheet_uri() );
    }
    function themeslug_enqueue_script() {
            wp_enqueue_script( 'jq', get_template_directory_uri().'/js/jquery.js');
            wp_enqueue_script( 'popper', get_template_directory_uri().'/js/popper.js');
            wp_enqueue_script( 'bootstrap', get_template_directory_uri().'/js/bootstrap.js');
            wp_enqueue_script( 'script', get_template_directory_uri().'/js/script.js');
    }
    add_action( 'wp_enqueue_scripts', 'themeslug_enqueue_style');
    add_action( 'wp_enqueue_scripts', 'themeslug_enqueue_script');
    
    
    /*Register widget area*/
    function fnavmenu() {
            register_sidebar( array(
                    'name'          => 'Navmenu',
                    'id'            => 'navmenu',
                    'before_widget' => '<div>',
                    'after_widget'  => '</div>',
                'before_title'  => '<h2 class="rounded">',
		'after_title'   => '</h2>',
            ) );
    }
    add_action( 'widgets_init', 'fnavmenu' );