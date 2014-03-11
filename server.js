var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;

/*
Node.js 的原理正是如此，它使用了 Google 的 V8 虚拟机（Google 的
Chrome 浏览器使用的 JavaScript 执行环境），来解释和执行 JavaScript
代码。  
Node.js 事实上既是一个运行时环境，同时又是一个库。
*/
/*
流程：
1.服务启动
2.等待请求
3.当有request请求时触发时间，回调函数
4.response相应服务器
5.事件驱动的异步服务器端 JavaScript 和回调
*/