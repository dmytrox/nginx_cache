# Nginx proxy caching

To run app the app type this command in terminal:

```
docker-compose up --build
```

Then navigate to the http://localhost and refresh page two times to cache the images.

To drop cache  for specific img run this commend in your terminal:

```
curl -I http://localhost/img/2.jpg -H 'Cache-Purge: true'
```

Output should be something like that:

```
HTTP/1.1 200 OK
Server: nginx/1.23.0
Date: Thu, 30 Jun 2022 14:00:12 GMT
Content-Type: image/jpeg
Content-Length: 7188
Connection: keep-alive
X-Powered-By: Express
Cache-Control: public, max-age=0
Last-Modified: Wed, 29 Jun 2022 14:39:44 GMT
ETag: W/"1c14-181afe75b80"
X-Proxy-Cache: BYPASS
Accept-Ranges: bytes

```
