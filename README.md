[logo]: http://aping.io/logo/320/aping-plugin.png "apiNG Plugin"
![apiNG][logo]

**_apiNG-plugin-jsonloader_** is a [**apiNG**](https://github.com/JohnnyTheTank/apiNG) plugin for loading data from **JSON files** (local & via http) and any **restful JSON** and **JSONP** URLs

# Information
* **This plugin supports every apiNG model (no data transformation)**

# Documentation

1. [INSTALLATION](#1-installation)
    1. Get file
    2. Include file
    3. Add dependencies
    4. Add plugin
2. [USAGE](#2-usage)
    1. Models
    2. Requests

## 1. INSTALLATION

### I. Get file
Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:

* `bower install apiNG-plugin-jsonloader --save`
* `npm install aping-plugin-jsonloader --save`
* download [apiNG-plugin-jsonloader.zip](https://github.com/JohnnyTheTank/apiNG-plugin-jsonloader/zipball/master)

### II. Include file
Include `aping-plugin-jsonloader.min.js` in your apiNG application

```html
<!-- when using bower -->
<script src="bower_components/apiNG-plugin-jsonloader/dist/aping-plugin-jsonloader.min.js"></script>

<!-- when using npm -->
<script src="node_modules/aping-plugin-jsonloader/dist/aping-plugin-jsonloader.min.js"></script>

<!-- when using downloaded files -->
<script src="aping-plugin-jsonloader.min.js"></script>
```

### III. Add dependencies
Add the module `jtt_aping_jsonloader` as a dependency to your app module:
```js
var app = angular.module('app', ['jtt_aping', 'jtt_aping_jsonloader']);
```

### IV. Add the plugin
Add the plugin's directive `aping-jsonloader="[]"` to your apiNG directive and [configure your requests](#ii-requests)
```html
<aping
    template-url="templates/event.html"
    model="event"
    items="20"
    aping-jsonloader="[{'path':'events.json'}]">
</aping>
```

## 2. USAGE

### I. Models
This plugin supports **every apiNG model**

### II. Requests
Every **apiNG plugin** expects an array of **requests** as html attribute.

**Supported Sources**
* JSON files (local)
* JSON files (external)
* restful JSON urls
* restful JSONP urls

#### Requests by Path
|  parameter  | sample | default | description | optional |
|----------|---------|---------|---------|---------|
| **`path`** | `data.json` |  | **Valid values:** <br>* JSON files (local)<br>* JSON files (external)<br>* restful JSON urls<br>* restful JSONP urls  | no |
| **`format`**  | `jsonp` | `json` | Request format (`json` or `jsonp`) |  yes  |
| **`callback`**  | `JSON_CALLBACK` | `JSON_CALLBACK` | Callback name |  yes  |
| **`items`**  | `20` | | Items per request (`0`-`n`) |  yes  |

Sample requests:
* `[{'path':'data.json', 'items':5}]`
* `[{'path':'//rawgit.com/JohnnyTheTank/apiNG/master/bower.json'}]`
* `[{'path':'https://api.dailymotion.com/user/Bishop-live/videos'}]`
* `[{'path':'http://jsonplaceholder.typicode.com/posts/1', 'format':'jsonp'}]`


# Licence
MIT

