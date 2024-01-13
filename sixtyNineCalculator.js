

document.getElementById('oneButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 1;
}
document.getElementById('twoButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 2;
}
document.getElementById('threeButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 3;
}
document.getElementById('fourButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 4;
}
document.getElementById('fiveButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 5;
}
document.getElementById('sixButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 6;
}
document.getElementById('sevenButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 7;
}
document.getElementById('eightButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 8;
}
document.getElementById('nineButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 9;
}
document.getElementById('zeroButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 0;
}
document.getElementById('divideButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += '/';
}
document.getElementById('multiplyButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += 'x';
}
document.getElementById('addButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += '+';
}
document.getElementById('subtractButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += '-';
}
document.getElementById('pointButton').onclick= function () 
{
   document.getElementById('textBox').innerHTML += '.';
}
document.getElementById('clearButton').onclick= function () 
{
   document.getElementById('textBox2').innerHTML = document.getElementById('textBox').innerHTML;
   document.getElementById('textBox').innerHTML = ''
}
document.getElementById('equalButton').onclick= function () 
{
   document.getElementById('textBox2').innerHTML = document.getElementById('textBox').innerHTML;
   document.getElementById('textBox').innerHTML = document.getElementById('textBox').innerHTML.replaceAll('x', '*');
   document.getElementById('textBox').innerHTML = eval(document.getElementById('textBox').innerHTML);
   
   if (document.getElementById('textBox').innerHTML == '69') {
      document.getElementById('textBox').innerHTML += ' nice. 👍';
   }
}
const bodyBg = document.getElementById('bodyBg');
const changeBg = document.getElementById('changeBg');
const reader = new FileReader();
reader.addEventListener("load", function () {
  bodyBg.style.backgroundImage = `url(${ reader.result })`;
}, false);
changeBg.addEventListener('change',function() {
  const image = this.files[0];
  if(image) reader.readAsDataURL(image);
}, false)
