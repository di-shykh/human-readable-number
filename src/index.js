module.exports = function toReadable (number) {
  let numbers1Dict={
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };
  let numbers11Dict={
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13:  'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };
  let numbers2Dict ={
    2: 'twen',
    3: 'thir',
    4: 'for',
    5: 'fif',
    6: 'six',
    7: 'seven',
    8: 'eigh',
    9: 'nine'
  };
  let str=number.toString();
  if (str.length==1) return numbers1Dict[str[0]];
  else {
    let hundr=Math.floor(number/100);
    let num="";
    let hundred="";
    let dotents;
    let readableNum;
    if (str.length==3) {
      hundred=numbers1Dict[str[0]]+' '+'hundred'+ ' ';
      if (str[1]==0) {
        dotents='';
        if(str[2]!=0) num=numbers1Dict[str[2]];
      }
      if (str[1]==1) {
        dotents=numbers11Dict[str.slice(1)]+ ' ';
        num="";
      }
      if(str[1]!=0&&str[1]!=1){
        dotents=numbers2Dict[str[1]]+'ty'+' ';
        if(str[2]!=0) num=numbers1Dict[str[2]];
      }  
      return (hundred+dotents+num).trim();
    }
    if (str.length==2){
      if (str[0]==1) dotents=numbers11Dict[number]+ ' ';
      else {
        dotents=numbers2Dict[str[0]]+'ty'+' ';
        if(str[1]!=0) num=numbers1Dict[str[1]];
        if(str[1]==0) num="";
      }
      return (dotents+num).trim();
    }
  } 
}
