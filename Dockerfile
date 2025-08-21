# Static file deployment
FROM nginx:alpine

# Copy pre-built static files
COPY dist/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]