const test = name => bool => {
    let str = name;
    if(bool){
        str += " passed";
    } else {
        str += " not passed";
    }
    document.writeln(str);
}