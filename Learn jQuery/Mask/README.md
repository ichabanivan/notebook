```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.js"></script>
<input id="phone" type="text" placeholder="+38(___)-___-__-__"/>
```

```js
$(function(){
  $('#phone').mask('+38(066)-000-00-00');
});
```