module.exports = function parseStringArray(string){
    return string.split(',').map(x => x.trim())
}