```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<button id="cors">CORS</button>
<script>
  let json = [
    {
      "id": "585e979496d317249084ccba",
      "index": 0,
      "friends": {
        "id": 0,
        "name": "Jordan Osborne"
      }
    },
    {
      "id": "585e979482b51c3fa66f5c1f",
      "index": 1,
      "friends": {
        "id": 1,
        "name": "Deleon Osborn"
      }
    },
    {
      "id": "585e9794b0c33f5ef5cbf2c2",
      "index": 2,
      "friends": {
        "id": 2,
        "name": "Holman Casey"
      }
    },
    {
      "id": "585e9794b689fdefd104e220",
      "index": 3,
      "friends": {
        "id": 3,
        "name": "Callie Palmer"
      }
    },
    {
      "id": "585e97944234bee70de8b16f",
      "index": 4,
      "friends": {
        "id": 4,
        "name": "Cooper Rivers"
      }
    },
    {
      "id": "585e97949f3f19ff043002c4",
      "index": 5,
      "friends": {
        "id": 5,
        "name": "Vang Lowery"
      }
    }
  ];

  let cors = document.getElementById("cors");

  cors.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:7777/", true);
    xhr.responseType = "json";
    xhr.onloadend = function () {
      console.log(xhr.response)
    };

    xhr.send(JSON.stringify(json))
  });


</script>
</body>
</html>
```

```js
let http = require('http'),
    hostname = 'localhost',
    port = 7777;

http.createServer(function (req, res) {
  console.log("New request");

  let data = "";

  res.writeHead(200, {
    "Content-Type": "text/javascript",
    "Access-Control-Allow-Origin": "*"
  });

  req.setEncoding("utf-8");

  req.on("data", function (buf) {
    data = data.concat(buf);
  });
  
  req.on("error", function (buf) {
    res.end("{}")
  });

  req.on("end", function () {
    data = JSON.parse(data);
    
    res.end(JSON.stringify(data));
  });
  
}).listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`)
});
```
