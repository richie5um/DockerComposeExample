FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY tools /tmp/tools
COPY docker-startup.sh /tmp

RUN chmod +x /tmp/docker-startup.sh
RUN chmod +x /tmp/tools/wait-for-it.sh
ENTRYPOINT /tmp/docker-startup.sh

EXPOSE 8180