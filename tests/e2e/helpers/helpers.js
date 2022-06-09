class Helpers {

    randomString(stringLength, radix = 36) 
    {
        return Math.random()
            .toString(radix)
            .replace(/[^a-z]+/g, '')
            .substr(0, stringLength);

    }

 randomNumber() {
     
    return Math.floor(Math.random() * (111111111111 - 1 + 1)) + 1;
 }

}


module.exports = new Helpers()
