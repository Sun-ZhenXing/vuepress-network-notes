# 跨域资源共享

<!-- [[TOC]] -->

## 1. 什么是 CORS

*@def* **跨源资源共享**（CORS）是一种基于 HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其它源。[^1]

[^1]: 跨源资源共享（CORS），MDN，<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS>

出于安全性，浏览器限制脚本内发起的跨源 HTTP 请求。例如，`XMLHttpRequest` 和 Fetch API 遵循同源策略。

## 2. HTTP 头部

### 2.1 `Access-Control-Allow-Origin`

```yaml
Access-Control-Allow-Origin: <origin> | *
```

其中，`origin` 参数的值指定了允许访问该资源的外域 URI。对于不需要携带身份凭证的请求，服务器可以指定该字段的值为通配符，表示允许来自所有域的请求。

例如，下面的字段值将允许来自 `https://mozilla.org` 的请求：

```yaml
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

如果服务端指定了具体的域名而非 `*`，那么响应首部中的 `Vary` 字段的值必须包含 `Origin`。这将告诉客户端：服务器对不同的源站返回不同的内容。

### 2.2 `Access-Control-Expose-Headers`

在跨源访问时，`XMLHttpRequest` 对象的 `getResponseHeader()` 方法只能拿到一些最基本的响应头，`Cache-Control`、`Content-Language`、`Content-Type`、`Expires`、`Last-Modified`、`Pragma`，如果要访问其他头，则需要服务器设置本响应头。

`Access-Control-Expose-Headers` 头让服务器把允许浏览器访问的头放入白名单，例如：

```yaml
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
```

这样浏览器就能够通过 `getResponseHeader()` 访问 `X-My-Custom-Header` 和 `X-Another-Custom-Header` 响应头了。

### 2.3 `Access-Control-Max-Age`

`Access-Control-Max-Age` 头指定了 Preflight（预检）请求的结果能够被缓存多久。

```yaml
Access-Control-Max-Age: <delta-seconds>
```

`delta-seconds` 参数表示 Preflight 请求的结果在多少秒内有效。

### 2.4 `Access-Control-Allow-Credentials`

`Access-Control-Allow-Credentials` 头指定了当浏览器的 `credentials` 设置为 `true` 时是否允许浏览器读取 `response` 的内容。当用在对 Preflight 请求的响应中时，它指定了实际的请求是否可以使用 `credentials`。

> 请注意：简单 `GET` 请求不会被预检；如果对此类请求的响应中不包含该字段，这个响应将被忽略掉，并且浏览器也不会将相应内容返回给网页。

```yaml
Access-Control-Allow-Credentials: true
```

### 2.5 `Access-Control-Allow-Methods`

`Access-Control-Allow-Methods` 首部字段用于预检请求的响应。其指明了实际请求所允许使用的 HTTP 方法。

```yaml
Access-Control-Allow-Methods: <method>[, <method>]*
```

有关 Preflight 请求的示例已在上方给出。

### 2.6 `Access-Control-Allow-Headers`

`Access-Control-Allow-Headers` 首部字段用于预检请求的响应。其指明了实际请求中允许携带的首部字段。

```yaml
Access-Control-Allow-Headers: <field-name>[, <field-name>]*
```
