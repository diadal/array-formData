/* eslint-disable @typescript-eslint/no-explicit-any */

function LoadWithIMage(formDatax: FormData, ojbval: any, finalKwy: string) {
  if ((ojbval?.lastModified || ojbval?.lastModifiedDate) && ojbval?.size) {
    formDatax.append(finalKwy, ojbval);
  } else {
    formDatax.append(finalKwy, ojbval);
  }
}

function ReRun(formDatax: FormData, ojbval: any, finalKwy: string) {
  if (typeof ojbval == 'object') {
    for (const lastStage in ojbval) {
      const NewKey = `${finalKwy}[${lastStage}]`;
      ReRunB(formDatax, ojbval[lastStage], NewKey);
    }
  } else {
    LoadWithIMage(formDatax, ojbval, finalKwy);
  }
}

function ReRunB(formDatax: FormData, ojbval: any, finalKwy: string) {
  if (typeof ojbval == 'object') {
    for (const lastStage in ojbval) {
      const NewKey = `${finalKwy}[${lastStage}]`;
      if (typeof ojbval[lastStage] == 'object') {
        for (const nakay in ojbval[lastStage]) {
          const KkNewKey = `${NewKey}[${nakay}]`;
          const newsBoj = ojbval[lastStage];
          ReRun(formDatax, newsBoj[nakay], KkNewKey);
        }
      } else {
        LoadWithIMage(formDatax, ojbval[lastStage], NewKey);
      }
    }
  } else {
    LoadWithIMage(formDatax, ojbval, finalKwy);
  }
}

function useFormObjectLoader(
  formDatax: FormData,
  payload: any,
  keyName: string,
) {
  if (typeof payload == 'object') {
    for (const key in payload) {
      const ojbval = payload[key];
      const finalKwy = keyName ? keyName : key;
      if (typeof ojbval == 'object') {
        if (
          (ojbval?.lastModified || ojbval?.lastModifiedDate) &&
          ojbval?.size
        ) {
          formDatax.append(finalKwy, ojbval);
        } else {
          if (
            !finalKwy.includes('[') &&
            ojbval[0] &&
            Object.keys(ojbval[0]).length > 0
          ) {
            ReRun(formDatax, ojbval, finalKwy);
          } else {
            if (
              finalKwy.includes('[') &&
              ojbval[0] &&
              Object.keys(ojbval[0]).length > 0
            ) {
              ReRun(formDatax, ojbval, finalKwy);
            } else if (
              finalKwy.includes('[') &&
              !finalKwy.includes('][') &&
              Object.keys(ojbval).length > 0
            ) {
              ReRunB(formDatax, ojbval, finalKwy);
            } else {
              useFormObjectLoader(formDatax, ojbval, `${finalKwy}[]`);
            }
          }
        }
      } else {
        LoadWithIMage(formDatax, ojbval, finalKwy);
      }
    }
  } else {
    formDatax.append(keyName, payload);
  }
}


export { useFormObjectLoader };
