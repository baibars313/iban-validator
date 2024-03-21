### IBAN Validator

This is a JavaScript function that validates International Bank Account Numbers (IBANs) according to the IBAN standard. It checks the syntax, length, and checksum of the provided IBAN.

#### Usage

To use the IBAN validator, follow these steps:

1. **Installation**

   Install the IBAN validator package using npm:

   ```
   npm install iban-validator
   ```

2. **Import**

   Import the IBAN validator function into your JavaScript code:

   ```javascript
   const { isValidIBANNumber } = require('iban-validator');
   ```

   If you're using ES6 modules:

   ```javascript
   import { isValidIBANNumber } from 'iban-validator';
   ```

3. **Validation**

   Use the `isValidIBANNumber` function to validate an IBAN:

   ```javascript
   const iban = 'GB82WEST12345698765432';
   const isValid = isValidIBANNumber(iban);
   console.log(`Is IBAN ${iban} valid? ${isValid}`);
   ```

#### Example

```javascript
const { isValidIBANNumber } = require('iban-validator');

function alertValidIBAN(iban) {
    alert(isValidIBANNumber(iban));
}

const iban = 'GB82WEST12345698765432';
alertValidIBAN(iban);
```

This will alert a message indicating whether the provided IBAN (`GB82WEST12345698765432` in this case) is valid or not.

#### Note

This package follows the IBAN standard and checks the syntax, length, and checksum of IBANs. However, it does not verify if the IBAN corresponds to a real bank account.