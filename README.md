# array-formData

## Install
```bash
yarn add @diadal/array-append-to-formdata
# or
npm install @diadal/array-append-to-formdata
```

append deep array object into 'formData'

ablitity to append deeper array object array along with file into 'formData'

## useage
```
import {
  useFormObjectLoader,
} from '@diadal/array-append-to-formdata';


async function usePlayload() {
  const payload = [];

  const formDatax = new FormData();

  await useFormObjectLoader(formDatax, payload, '');

  return await formDatax;
}

```

## testing
```
import {
  usePlayloadTester,
} from '@diadal/array-append-to-formdata/src/test';


usePlayloadTester() // check console log

```

