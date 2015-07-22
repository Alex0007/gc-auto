# gc-auto
Triggers garbage collection task every 30 seconds if --expose-gc provided to node process

# Usage

```javascript
require('gc-auto')

// your code that consumes memory here
```
then `$ node --expose-gc my-file.js`
