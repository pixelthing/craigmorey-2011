<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main and #page div elements.
 *
 * @package WordPress
 * @subpackage northwood
 * @since Northwood 1.0
 */
?>
	</div><!-- #main .wrapper -->
	<footer id="colophon" role="contentinfo">
		<div class="site-info">
			<?php do_action( 'northwood_credits' ); ?>
			<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'northwood' ) ); ?>" title="<?php esc_attr_e( 'Semantic Personal Publishing Platform', 'northwood' ); ?>"><?php printf( __( 'Proudly powered by %s', 'northwood' ), 'WordPress' ); ?></a>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>