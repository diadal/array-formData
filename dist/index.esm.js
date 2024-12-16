/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * Created by https://github.com/diadal
 * For any support reachout at https://github.com/diadal/array-formData/issues
 **/
function isFIle(ojbval) {
    return ((ojbval === null || ojbval === void 0 ? void 0 : ojbval.lastModified) || (ojbval === null || ojbval === void 0 ? void 0 : ojbval.lastModifiedDate)) && (ojbval === null || ojbval === void 0 ? void 0 : ojbval.size);
}
function LoadFormData(formDatax, ojbval, finalKwy) {
    if (isFIle(ojbval)) {
        formDatax.append(finalKwy, ojbval);
    }
    else {
        formDatax.append(finalKwy, ojbval);
    }
}
function ReRun(formDatax, ojbval, finalKwy) {
    if (typeof ojbval == 'object') {
        if (isFIle(ojbval)) {
            LoadFormData(formDatax, ojbval, finalKwy);
        }
        else {
            for (const lastStage in ojbval) {
                const NewKey = `${finalKwy}[${lastStage}]`;
                const FnextData = ojbval[lastStage];
                if (isFIle(FnextData)) {
                    LoadFormData(formDatax, FnextData, NewKey);
                }
                else {
                    ReRunB(formDatax, FnextData, NewKey);
                }
            }
        }
    }
    else {
        LoadFormData(formDatax, ojbval, finalKwy);
    }
}
function ReRunB(formDatax, ojbval, finalKwy) {
    if (typeof ojbval == 'object') {
        if (isFIle(ojbval)) {
            LoadFormData(formDatax, ojbval, finalKwy);
        }
        else {
            for (const lastStage in ojbval) {
                const NewKey = `${finalKwy}[${lastStage}]`;
                const FnextData = ojbval[lastStage];
                if (typeof FnextData == 'object') {
                    if (isFIle(FnextData)) {
                        LoadFormData(formDatax, FnextData, NewKey);
                    }
                    else {
                        for (const nakay in FnextData) {
                            const KkNewKey = `${NewKey}[${nakay}]`;
                            const newsBoj = FnextData;
                            const nexData = newsBoj[nakay];
                            if (isFIle(nexData)) {
                                LoadFormData(formDatax, nexData, KkNewKey);
                            }
                            else {
                                ReRun(formDatax, nexData, KkNewKey);
                            }
                        }
                    }
                }
                else {
                    LoadFormData(formDatax, FnextData, NewKey);
                }
            }
        }
    }
    else {
        LoadFormData(formDatax, ojbval, finalKwy);
    }
}
function useFormObjectLoader(formDatax, payload, keyName) {
    if (typeof payload == 'object') {
        for (const key in payload) {
            const ojbval = payload[key];
            const finalKwy = keyName ? keyName : key;
            if (typeof ojbval == 'object') {
                if (isFIle(ojbval)) {
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
                LoadFormData(formDatax, ojbval, finalKwy);
            }
        }
    }
    else {
        formDatax.append(keyName, payload);
    }
}

export { useFormObjectLoader };
