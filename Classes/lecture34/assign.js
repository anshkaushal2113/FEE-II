var a = document.querySelector("img");
isTrue = true;
// setInterval(() =>{
//     if(isTrue){
//     a.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwwfac3X0ux-Jfq2bdsIBI7Dcq0NqiCEArw&s");
//     }
//     else{
//         a.setAttribute("src","https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg");
//     }
//     isTrue = !isTrue;
// },1000);

for(let i = 0;i<3;i++){
    if(i == 0){
        setInterval(() =>{
        
            a.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnlgrf-aE_9dsRN1mJ4pa6Ko2DNfZq48C_Q&s")
            
            
        },1000);
        

    }
    if(i==1){
        setInterval(() =>{
        
            a.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRciUoMliDfhXocZmhJJEprbL1Ztqg4hulhisjW9FPO9hasMSYmHMXlsfd9SG8ghtXV6K4&usqp=CAU")
            
            
        },2000);

       

    }
    if(i ==2){
        setInterval(() =>{
        
            a.setAttribute("src","https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/A-Young-Sasuke.jpg")
            
            
        },3000);
        

    }
    if(i==3){
        setInterval(() =>{
        
            a.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkgtaWZtPrRAatxuURFReNixT1zG3uJcmEw&s")
            
            
        },4000);
        
    }
}