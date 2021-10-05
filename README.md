# EC DNI Validator

Validate DNI numbers of Ecuadorian citizens.

Validar cédulas de identidad de Ecuador

## Install:

```
npm i @angelalexqc/ec-dni-validator
```

## Usage:

Javascript:

```javascript
const validator = require('@angelalexqc/ec-dni-validator');
console.log(validator.isValidDNI('0904939055'));
// true or false
```

Typescript:

```typescript
// Require type:module in package.json
import { isValidDNI } from '@angelalexqc/ec-dni-validator';
console.log(isValidDNI('0904939055'));
// true or false
```

## License

MIT
