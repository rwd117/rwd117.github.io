const main = document.getElementById("jsmain");
const mainSize = 1600;

main.style.height=1600+"px";

let lastScroll=0;
let CurrentSize = mainSize;
let count =0;


function handleScroll(){
   var CurrentScroll = document.body.scrollTop||document.documentElement.scrollTop ;
 
   console.log("current"+CurrentScroll);
   console.log("last" + lastScroll);

   if(CurrentScroll >800){
        
        if(CurrentScroll > lastScroll){
            CurrentSize = CurrentSize + 100;
            console.log("현재 사이즈"+CurrentSize);
            main.style.height = CurrentSize+"px";
            count=count+1;
            console.log("console"+count);

            if(count%1 === 0){
                const CreateContent = document.createElement('div');
                CreateContent.className='content';
                CreateContent.style.margin = 28.5+1.2+"px";
                for(let i=0; i< 3; i++){
                    main.appendChild(CreateContent);
                }
                console.log("새로운거 생김?");
            }
        }else {
            console.log("현재 사이"+CurrentSize);
            main.style.height = CurrentSize+"px";

        }


   }
   
   if(CurrentScroll > lastScroll) lastScroll = CurrentScroll;
   console.log("lastlast" + lastScroll);
}

//계속 변하는 길이 값을 줘야하고 그 값을 저장하는 값이 필요.

if(main){
    window.addEventListener("scroll", handleScroll);
}








