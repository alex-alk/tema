<!DOCTYPE html>
<html lang='ro'>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <header>
        <nav>
            <a href="/">
                <img width="40" src='<?php echo get_template_directory_uri();?>/logo.png' alt='logo' id="logo">
            </a>
            <label for="cmenu" id="meniul">MENIU</label>
            <input type="checkbox" id="cmenu">
            <?php wp_nav_menu( array( 'navmenu' => 'header-menu' ) ); ?>
       </nav>
    </header>