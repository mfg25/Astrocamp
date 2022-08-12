function isPalindrome(x) {
    let string = x.toString()
    let abc = string.split("")
    let letters = [...abc]
    console.log(abc.length)
    let aux
    for (let i = 0; i < abc.length / 2; i++) {
      aux = letters[i]
      letters[i] = letters[abc.length - i -1]
      letters[abc.length - i -1] = aux
    }
   
    for(let i = 0; i < abc.length; i++){
        if(letters[i] == abc[i]){
            continue
        }else{
            return false
        }
    }
    return true
  }
  console.log(isPalindrome('1221'))