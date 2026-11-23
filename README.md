---
redirect_to: https://croot.js.org/docs/url
---

> **JSCroot sekarang CrootJS.** Modul `url.js` sekarang ada di [croot.js.org/docs/url](https://croot.js.org/docs/url). Repo ini tidak diperbarui lagi; file lama tetap ada supaya situs yang masih memakainya tidak rusak.

# url
url engineering

https://css-tricks.com/example/index.html?s=flexbox

```js
var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
```

* window.location.protocol = “http:”
* window.location.host = “css-tricks.com”
* window.location.pathname = “/example/index.html”
* window.location.search = “?s=flexbox”


https://cdn.jsdelivr.net/gh/jscroot/url/ 

## Release

Tag version
```sh
git tag                                 	#check current version
git tag v0.0.3                          	#set tag version
git push origin --tags  
```