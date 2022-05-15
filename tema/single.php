<?php get_header();?>
<main>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
           <?php if ( in_category( '3' ) ) : ?>
           <div class="post-cat-three"></div>
           <?php else : ?>
           <?php endif; ?>
           <div class="article0"><h2><a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
           <?php $mainart= get_the_title();?>
           <div class="content"><?php the_content(); ?></div>
           <p class="postmetadata"><?php _e( '' ); ?>  <small class="text-secondary"><?php the_time('F j, Y'); ?> | </small><?php the_category( ', ' ); ?></p></div>
    <?php endwhile; ?>
    <?php endif; ?>
           <aside id="amain">
<?php
$category = get_the_category();
$firstCategory = $category[0]->cat_name;
$the_query = new WP_Query( array("category_name"=> "$firstCategory") );
if ( $the_query->have_posts() ) {
        $i=0;
	while ( $the_query->have_posts()&&$i<=3 ) {
		$the_query->the_post();$i++;?>
           <?php $arts= get_the_title();?>
    <div class="articles" id="<?php if($mainart==$arts){echo 'rep';}?>">
        <h2><a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
        <div class="content-home"><?php the_content(); ?></div>
        <span class="postmetadata"><?php _e( '' ); ?>  <small class="text-secondary"><?php the_time('F j, Y'); ?> | </small><?php the_category( ', ' ); ?></span></div>
                
	<?php }
} else {
}?>
           </aside>
</main>
    <?php
	while ( have_posts() ) : the_post();?>
	<?php endwhile; ?>
<?php get_footer();?>