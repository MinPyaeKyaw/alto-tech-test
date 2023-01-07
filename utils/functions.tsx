export const langConvertor = (lang:any, langKey:string):string => {
    if(lang[langKey]) {
        return lang[langKey];
    }else {
        return lang.en;
    }
}