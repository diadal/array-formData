function e(e,o,i){if(((o===null||o===void 0?void 0:o.lastModified)||(o===null||o===void 0?void 0:o.lastModifiedDate))&&(o===null||o===void 0?void 0:o.size)){e.append(i,o)}else{e.append(i,o)}}function o(o,n,t){if(typeof n=="object"){for(const e in n){const l=`${t}[${e}]`;i(o,n[e],l)}}else{e(o,n,t)}}function i(i,n,t){if(typeof n=="object"){for(const l in n){const s=`${t}[${l}]`;if(typeof n[l]=="object"){for(const e in n[l]){const t=`${s}[${e}]`;const d=n[l];o(i,d[e],t)}}else{e(i,n[l],s)}}}else{e(i,n,t)}}function n(t,l,s){if(typeof l=="object"){for(const d in l){const f=l[d];const c=s?s:d;if(typeof f=="object"){if(((f===null||f===void 0?void 0:f.lastModified)||(f===null||f===void 0?void 0:f.lastModifiedDate))&&(f===null||f===void 0?void 0:f.size)){t.append(c,f)}else{if(!c.includes("[")&&f[0]&&Object.keys(f[0]).length>0){o(t,f,c)}else{if(c.includes("[")&&f[0]&&Object.keys(f[0]).length>0){o(t,f,c)}else if(c.includes("[")&&!c.includes("][")&&Object.keys(f).length>0){i(t,f,c)}else{n(t,f,`${c}[]`)}}}}else{e(t,f,c)}}}else{t.append(s,l)}}export{n as useFormObjectLoader};
