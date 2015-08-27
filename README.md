# gc-auto
Triggers garbage collection task if --expose-gc provided to node process

# Usage

```javascript
require('gc-auto')

// your code that consumes memory here
```

then `$ node --expose-gc my-file.js`

You also can pass interval parameter to gc-auto like this

```javascript
require('gc-auto')(3000) // every 3 seconds
```
