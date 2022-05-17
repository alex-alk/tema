FROM wordpress:apache
COPY tema/ ./wp-content/themes/tema/
COPY uploads/ ./wp-content/uploads/