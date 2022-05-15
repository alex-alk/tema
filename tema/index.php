<?php get_header();?>
<main>
    <?php $i=0?>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div class='article<?php echo "$i"?>'>
           <div class="titles"><h2><a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2></div><div class="content-home"><?php the_content(); ?></div>
           <span class="postmetadata"><?php _e( '' ); ?>  <small class="text-secondary"><?php the_time('F j, Y'); ?> | </small><?php the_category( ', ' ); ?></span></div>
    <?php $i++;endwhile; ?>
    <?php endif; ?>
</main>
<?php get_footer();?>