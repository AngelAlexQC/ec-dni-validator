# EC DNI Validator

Validate DNI numbers of Ecuadorian citizens.

Validar cédulas de identidad o RUC de Ecuador

## Install:

```
npm i ec-dni-validator
```

## Usage:

Javascript:

```javascript
const validator = require("ec-dni-validator");
console.log(validator.isValidDNI("0904939055"));
// true or false
```

Typescript:

```typescript
import { isValidDNI } from "ec-dni-validator";
console.log(isValidDNI("0904939055"));
// true or false
```

## License

MIT
