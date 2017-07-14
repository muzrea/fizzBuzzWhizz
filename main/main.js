/**
 * Created by muzrea on 17-7-14.
 */
/*let a=document.getElementById("text1").value;
let b=document.getElementById("text2").value;
let c=document.getElementById("text3").value;
alert(a);*/
let a=3;
let b=5;
let c=7;
function fizzBuzzWhizz(num,a,b,c){
    let result =  '';
    let s = num.toString();
    if(s.indexOf('3')==-1){
        if(num%a===0){
            result = 'fizz';
            if(num%b===0){
                result = 'fizzBuzz';
                if(num%c===0){
                    result = 'fizzBuzzWhizz';
                }
            }else if(num%c===0){
                result = 'fizzWhizz';
            }
        }else if(num%b===0){
            result = 'buzz';
            if(num%c===0){
                result = 'buzzWhizz';
            }
        }else if(num%c===0){
            result = 'whizz';
        }else {
            result = num;
        }
    }else{
        result = 'fizz';
    }
    return result;
}
