---
title: require와 import
description: require와 import의 차이
date: "2023-04-03"
category: javascript
published: true
tags: ["require", "import"]
---

# require와 import

JavaScript에서 require와 import는 모두 다른 파일에서 코드를 가져와서 사용할 수 있도록 도와주는 키워드이다. </br>

### require

require는 Node.js에서 사용되며, CommonJS스펙에 따라 모듈 시스템을 구현한다. require는 동적으로 코드를 로드하며 파일 경로를 지정해 다른 파일에서 해당 파일의 코드를 가져올 수 있다.

```javascript
const myModule = require("./myModule");
```

### import

반면 import는 ECMAScript 모듈 시스템(ESM)에서 사용된다. 이것은 Node.js 버전 13부터 기본으로 지원된다. import는 비동기적으로 코드를 로드하며, 파일 경로 외에도 모듈의 이름을 사용하여 다른 파일에서 해당 파일의 코드를 가져올 수 있다.

```javascript
import myModule from "./myModule.js";
```

import는 비동기적으로 로드되므로 대규모 애플리케이션에서 유리하다. 또한 import는 모듈의 이름으로 로드할 수 있기 때문에 파일 경로가 변경되어도 코드를 수정할 필요가 없다. 그러나 require는 Node.JS에서 사용되는 전통적인 방법이며, 많은 라이브러리와 프레임워크에서 이를 사용한다. </br>

### 결론

결론적으로 require와 import는 모두 코드를 가져오는 기능을 가지고 있지만 require는 Node.js에서 사용되고, import는 ECMAScript 모듈 시스템에서 사용된다. import는 비동기적으로 로드되므로 대규모 애플리케이션에서 유리하지만 require는 전통적인 방법이며 많은 라이브러리와 프레임워크에서 사용된다.
