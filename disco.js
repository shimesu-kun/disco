const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
console.log(randomColor());
document.querySelector("#start").addEventListener("click",function(){
  interval=setInterval(function(){
    document.querySelector("body").style.backgroundColor=randomColor();
  },250);

});
document.getElementById("stop").addEventListener("click", function(){
  clearInterval(interval);
  interval=null;
  console.log("'ended");
})