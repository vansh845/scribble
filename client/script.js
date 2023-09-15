const myCanvas = document.getElementById('myCanvas')
myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

const ctx = myCanvas.getContext('2d')

socket.on('pixel',(pxl)=>{
    console.log(pxl)
})

let drawing = false;

const draw = (event)=>{
    if(!drawing) return;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    
    const x = event.clientX - myCanvas.getBoundingClientRect().left;
    const y = event.clientY - myCanvas.getBoundingClientRect().top;
    socket.emit('pixles',[x,y]);


    ctx.lineTo(x,y);
    console.log(x,y)
    ctx.stroke();

}
myCanvas.addEventListener('mousedown',()=>{
    drawing = true;
    ctx.beginPath()
    console.log(drawing)

})

myCanvas.addEventListener('mousemove',draw);

myCanvas.addEventListener('mouseup',()=>{
    drawing = false;
    ctx.closePath();
    console.log(drawing)
})
