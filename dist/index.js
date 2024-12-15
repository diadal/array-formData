'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function LoadWithIMage(formDatax, ojbval, finalKwy) {
    if (((ojbval === null || ojbval === void 0 ? void 0 : ojbval.lastModified) || (ojbval === null || ojbval === void 0 ? void 0 : ojbval.lastModifiedDate)) && (ojbval === null || ojbval === void 0 ? void 0 : ojbval.size)) {
        formDatax.append(finalKwy, ojbval);
    }
    else {
        formDatax.append(finalKwy, ojbval);
    }
}
function ReRun(formDatax, ojbval, finalKwy) {
    if (typeof ojbval == 'object') {
        for (const lastStage in ojbval) {
            const NewKey = `${finalKwy}[${lastStage}]`;
            ReRunB(formDatax, ojbval[lastStage], NewKey);
        }
    }
    else {
        LoadWithIMage(formDatax, ojbval, finalKwy);
    }
}
function ReRunB(formDatax, ojbval, finalKwy) {
    if (typeof ojbval == 'object') {
        for (const lastStage in ojbval) {
            const NewKey = `${finalKwy}[${lastStage}]`;
            if (typeof ojbval[lastStage] == 'object') {
                for (const nakay in ojbval[lastStage]) {
                    const KkNewKey = `${NewKey}[${nakay}]`;
                    const newsBoj = ojbval[lastStage];
                    ReRun(formDatax, newsBoj[nakay], KkNewKey);
                }
            }
            else {
                LoadWithIMage(formDatax, ojbval[lastStage], NewKey);
            }
        }
    }
    else {
        LoadWithIMage(formDatax, ojbval, finalKwy);
    }
}
function useFormObjectLoader(formDatax, payload, keyName) {
    if (typeof payload == 'object') {
        for (const key in payload) {
            const ojbval = payload[key];
            const finalKwy = keyName ? keyName : key;
            if (typeof ojbval == 'object') {
                if (((ojbval === null || ojbval === void 0 ? void 0 : ojbval.lastModified) || (ojbval === null || ojbval === void 0 ? void 0 : ojbval.lastModifiedDate)) &&
                    (ojbval === null || ojbval === void 0 ? void 0 : ojbval.size)) {
                    formDatax.append(finalKwy, ojbval);
                }
                else {
                    if (!finalKwy.includes('[') &&
                        ojbval[0] &&
                        Object.keys(ojbval[0]).length > 0) {
                        ReRun(formDatax, ojbval, finalKwy);
                    }
                    else {
                        if (finalKwy.includes('[') &&
                            ojbval[0] &&
                            Object.keys(ojbval[0]).length > 0) {
                            ReRun(formDatax, ojbval, finalKwy);
                        }
                        else if (finalKwy.includes('[') &&
                            !finalKwy.includes('][') &&
                            Object.keys(ojbval).length > 0) {
                            ReRunB(formDatax, ojbval, finalKwy);
                        }
                        else {
                            useFormObjectLoader(formDatax, ojbval, `${finalKwy}[]`);
                        }
                    }
                }
            }
            else {
                LoadWithIMage(formDatax, ojbval, finalKwy);
            }
        }
    }
    else {
        formDatax.append(keyName, payload);
    }
}
function usePlayloadTester() {
    return __awaiter(this, void 0, void 0, function* () {
        const formDatax = new FormData();
        useFormObjectLoader(formDatax, {
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
        }, '');
        for (const pair of formDatax === null || formDatax === void 0 ? void 0 : formDatax.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
    });
}

exports.useFormObjectLoader = useFormObjectLoader;
exports.usePlayloadTester = usePlayloadTester;
