import { useFormObjectLoader } from "index";

declare global {
  interface FormData {
    entries(): any;
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

export { usePlayloadTester };
