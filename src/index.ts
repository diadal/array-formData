/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface FormData {
    entries(): any;
  }
}

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

async function usePlayloadTester() {
  const formDatax = new FormData();
  useFormObjectLoader(
    formDatax,
    {
      other_charges: [
        {
          cap: '43',
          pre: '1',
          title: 's',
          another: ['s', 3, 5, 34],
        },
        {
          cap: '76',
          pre: '2',
          title: 'd',
          another: {
            djj: 1,
            ggd: 3,
          },
        },
        {
          cap: '2',
          pre: '1.5',
          title: 'b',
          another: [
            {
              djj: 1,
              ggd: 3,
              another: {
                djj: 5,
                ggd: 9,
              },
            },
            {
              djj: 5,
              ggd: 3,
            },
            {
              djj: 6,
              ggd: 2,
            },
          ],
        },
      ],
    },
    '',
  );

  for (const pair of formDatax?.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }
}

export { usePlayloadTester, useFormObjectLoader };
