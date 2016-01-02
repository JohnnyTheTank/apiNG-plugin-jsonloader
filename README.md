[logo]: http://aping.io/logo/320/aping-plugin.png "apiNG Plugin"
![apiNG][logo]

**_apiNG-plugin-jsonloader_** is a [**apiNG**](https://github.com/JohnnyTheTank/apiNG) plugin for loading data from **JSON files** (local & via http) and any **restful JSON** and **JSONP** URLs

# Information
* **This plugin supports every apiNG model**

# Documentation
    I.  INSTALLATION
    II. USAGE

## I. INSTALLATION
    a) Get files
    b) Include files
    c) Add dependencies
    d) Add the plugin

### a) Get files
You can choose your preferred method of installation:

* Via bower: `bower install apiNG-plugin-jsonloader --save`
* Download from github: [apiNG-plugin-jsonloader.zip](https://github.com/JohnnyTheTank/apiNG-plugin-jsonloader/zipball/master)

### b) Include files
Include `apiNG-plugin-jsonloader.min.js` in your apiNG application
```html
<script src="bower_components/apiNG-plugin-jsonloader/dist/aping-plugin-jsonloader.min.js"></script>
```

### c) Add dependencies
Add the module `jtt_aping_jsonloader` as a dependency to your app module:
```js
var app = angular.module('app', ['jtt_aping', 'jtt_aping_jsonloader']);
```

### d) Add the plugin
Add the plugin's directive `aping-jsonloader="[]"` to your apiNG directive and configure your requests (_**II. USAGE**_)
```html
<aping
    template-url="templates/event.html"
    model="event"
    items="20"
    aping-jsonloader="[{'path':'events.json'}]">
</aping>
```

## II. USAGE
    a) Models
    b) Requests

### a) Models
This plugin supports **every apiNG model**

|  model   | content |
|----------|---------|
| `native` | **any kind of data** |


### b) Requests
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

