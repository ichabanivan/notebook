```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JSONP</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <style>
    .mt20{
      margin-top: 20px;
    }
    #dataField{
      width: 80%;
      float: left;
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    #getData{
      width: 20%;
      float: left;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  </style>
</head>
<body>
<div class="container mt20">
  <input type="text" id="dataField" class="form-control">
  <button id="getData" class="btn btn-default">JSONP</button>
</div>
<script>
  function updateData(data) {
    dataField.value = data.join(', ');
  }

  getData.addEventListener("click", function () {
    let jsonpScript = document.createElement('script');

    document.head.appendChild(jsonpScript);

    jsonpScript.onload = jsonpScript.onerror = function(){
      jsonpScript.parentNode.removeChild(jsonpScript);
    };
    jsonpScript.src = "http://localhost:7777/?method=updateData"
  });
</script>
</body>
</html>
```

```js
let http = require('http'),
    url = require('url'),
    hostname = 'localhost',
    port = 7777;

http.createServer(function (req, res) {
  let data = new Array(10);

  for(let i=0; i<data.length;i++){
    data[i]=Math.random().toPrecision(3);
  }

  res.writeHead(200, {
    "Content-Type": "text/javascript"
  });

  let urlData = url.parse(req.url, true),
      params = urlData.query,
      method = params.method && params.method.trim();

  if (method) {
    res.end(`${method}(${JSON.stringify(data)})`)
  } else {
    res.end("");
  }
  
}).listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`)
});

```

