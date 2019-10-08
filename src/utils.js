// delete space before or above string
export function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}