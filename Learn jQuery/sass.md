```scss
.container{
  margin: auto;
  width: 1200px;
  background-color: #fff;
  height: 200px;

  @include desktop{
    background-color: #ccc011;
    width: 992px;
  }

  @include laptop{
    background-color: #2c3acc;
    width: 768px;
  }

  @include tablet{
    background-color: #cc130d;
    width: 480px;
  }

  @include phone{
    background-color: #1fcc0e;
    width: 320px;
  }
}
```

```js
.container {
  background: #fff;
  margin: auto;
  width: 75rem;
  height: 12.5rem;
}

@media screen and (max-width: 1200px) {
  .container {
    width: 62rem;
    background-color: #ccc011;
  }
}

@media screen and (max-width: 992px) {
  .container {
    width: 48rem;
    background-color: #2c3acc;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 30rem;
    background-color: #cc130d;
  }
}

@media screen and (max-width: 480px) {
  .container {
    width: 20rem;
    background-color: #1fcc0e;
  }
}
```
