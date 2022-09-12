function palindrome(str) {
    const list_replace = [" ", '-', '_', '.', ',', ')','('];
    str = str.toLowerCase();
    for(let i = 0; i<list_replace.length; i++) {
        str = str.split(list_replace[i]).join('');
    } 
    let polyStr= str.split('').reverse().join('');
    console.log(str);
    console.log(polyStr);
    if (str == polyStr){
        console.log(true);
        return true;
    }else{
        console.log(false);
        return false;
    }
    
  }
  
  palindrome("0_0 (: /-\ :) 0-0");