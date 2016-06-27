/tmp/tools/wait-for-it.sh test-interface:80 -t 0 -- echo "Interface is up"
/tmp/tools/wait-for-it.sh test-server:3001 -t 0 -- echo "Server is up"
echo "Interface and Server detected, starting proxy..."
nginx -g "daemon off;"