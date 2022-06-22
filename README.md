# vue2_antdv

## Project setup

```bash
npm run pre
```

### Compiles and hot-reloads for development

```bash
pnpm run serve
```

### Compiles and build for test

```bash
pnpm run build:test
```

### Compiles and build for production

```bash
pnpm run build:pro
```

### Start mock server

```bash
pnpm run mock
```

### Lints and fixes files

```bash
pnpm run lint
```

### Docs

[Guide](https://pages.github.boschdevcloud.com/ZDO5WX/Vue2-Antdv-Doc/).

[Demo](https://pages.github.boschdevcloud.com/ZDO5WX/Vue2-Antdv-Demo/).

[Ant Design Vue](https://1x.antdv.com/docs/vue/introduce-cn/).

[Vue Cli Configuration](https://cli.vuejs.org/config/).

## Deploy

### Nginx conf eg

```nginx
server {
    listen ****;
    server_name localhost;

    location / {
        if ($request_filename ~* .*\.(?:htm|html)$)  # 配置页面不缓存html和htm结尾的文件,解决版本更新浏览器缓存问题
        {
           add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
        }
        root /var/frontEnd/burnDown/dist;
        index index.html index.htm;
        try_files $uri $uri/ /index.html; #防止 history模式刷新404
    }
}
```

### Gzip compression

Gzip compression is turned on by default, and the packaging will generate the original file and the compressed gz file at the same time. If you need to turn off and comment the following code.

```js
// vue.config.js
...
      // gzip on
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css$/, // file tyle
        threshold: 10 * 1024, // Compression above 10K
        deleteOriginalAssets: false, // delete origin file
      }),
...

```

If enabled, nginx needs to configure the following, otherwise it will not take effect (Check whether the browser network Content-Encoding is gzip).

```nginx
http{
    #gzip
    gzip on;
    gzip_disable "msie6";
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/jpeg image/gif image/png image/jpg;
}
```

## FAQ

Q:Refresh 404 in History mode after deployment

A:[Common server configuration examples](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B).
