
const productos = [

    {id: 1, marca:"samsung", modelo:"Samsung Galaxy a70",  memoria:"128gb" , precio: 60000 , imagen:"https://i.ibb.co/ZG7BQZ0/a70.jpg"  },

    {id: 2, marca:"samsung", modelo:"Samsung Galaxy s20 fe", memoria:"64gb", precio:65000, imagen: "https://i.ibb.co/tqMhQBW/s20fe.jpg" },

    {id: 3, marca:"samsung", modelo:"Samsung Galaxy a51", memoria:"64gb" ,   precio:46000 , imagen: "https://i.ibb.co/N7LKpNX/a51.jpg " },

    {id: 4, marca:"iphone", modelo: "Iphone XR",   memoria:"256gb" ,  precio:105000,    imagen: "https://i.ibb.co/zQqf7vC/iphonexr.jpg" },

    {id: 5, marca:"iphone", modelo:"Iphone 11 Pro Max", memoria:"128gb", precio:128000, imagen: "https://i.ibb.co/tw04zpd/11promax.jpg " },

    {id: 6, marca:"iphone", modelo: "Iphone 8 Plus",   memoria:"128gb" ,  precio: 92000 , imagen: "https://i.ibb.co/0DsRGfF/8plus.jpg" },

    {id: 7, marca:"motorola", modelo:"Motorola G8 Plus", memoria:"64gb", precio:50000, imagen:"https://i.ibb.co/p2rs1NY/motog8plus.jpg" },

    {id: 8, marca:"motorola", modelo: "Motorola G20",  memoria:"128gb" ,  precio: 54000 , imagen: "https://i.ibb.co/ys3btjF/motog20.jpg" },

    {id: 9, marca:"motorola", modelo:"Motorola X Play", memoria:"256gb", precio:43000 , imagen: "https://i.ibb.co/sRv4zPW/motoxplay.jpg" }
    
    ];

    export const getFetch = new Promise ((aceptar, rechazar)  => {
      const condition=true
      if (condition) {
        //aca simulo un retraso de la red
        setTimeout(() => {
          aceptar(productos)
          
        }, 2000);
      
    
      } else {       
          setTimeout(() => {      
              rechazar("404 not found") 
            
          }, 2000);
        
      } 
    })
    

 // console.log(getFetch)
  
  
