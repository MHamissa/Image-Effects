var color=document.getElementById('color');
color.addEventListener('change',function(){
document.getElementById('js').style.color=color.value;
});
document.getElementById('blurring').addEventListener('change',function(){
    let i=document.getElementById('blurring').value;
    
    document.getElementById('mainImage').style.filter=`blur(${i}px)`;
});
document.getElementById('transition').addEventListener('change',function(){
    let m=document.getElementById('transition').value;
    document.getElementById('mainImage').style.transform=`translate(${m}px,${m}px)`;
});