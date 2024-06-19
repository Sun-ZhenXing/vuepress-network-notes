# HTTP 协议概述

## 1. HTTP 协议

HTTP（超文本传输协议）是基于 TCP/IP 协议的应用层协议，位于传输层之上，此处的传输层指的是 TCP。主要规定了客户端和服务器之间的通信格式，默认使用 80 端口。[^1]

[^1]: HTTP 协议入门，阮一峰的博客，<https://www.ruanyifeng.com/blog/2016/08/http.html>

最早版本是 1991 年发布的 0.9 版。该版本极其简单，只有一个命令 `GET`。

```log
GET /index.html
```

上面命令表示，TCP 连接建立后，客户端向服务器请求网页 `index.html`。

协议规定，服务器只能回应 HTML 格式的字符串，例如：

```html
<html>
  <body>Hello World</body>
</html>
```

服务器发送完毕，就关闭 TCP 连接。

## 2. HTTP/1.0

1996 年 5 月，HTTP/1.0 版本发布，内容大大增加。

## 3. HTTP/1.1

1997 年 1 月，HTTP/1.1 版本发布，只比 1.0 版本晚了半年。它进一步完善了 HTTP 协议。

## 4. HTTP/2

2015 年，HTTP/2 发布。

## 5. HTTP/3

2018 年 11 月正式承认了 HTTP/3 协议。2022 年 6 月 6 日，IETF 正式标准化 HTTP/3 为 [RFC9114](https://datatracker.ietf.org/doc/rfc9114/)。[^2]

[^2]: HTTP/3，维基百科，<https://zh.wikipedia.org/zh-cn/HTTP/3>

HTTP3 不再使用 TCP 协议，而是使用基于 UDP 的 QUIC 协议，HTTP3 在保持 QUIC 稳定性的同时使用 UDP 来实现高速度，同时又不会牺牲 TLS 的安全性。
