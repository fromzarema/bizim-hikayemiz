const photos = [
    "photos/01.jpg",
    "photos/02.jpg",
    "photos/03.jpg",
    "photos/04.jpg",
    "photos/05.jpg",
    "photos/06.jpg",
    "photos/07.jpg",
    "photos/08.jpg",
    "photos/09.jpg",
    "photos/10.jpg",
    "photos/11.jpg",
    "photos/12.jpg",
    "photos/13.jpg",
    "photos/14.jpg",
    "photos/15.jpg",
    "photos/16.jpg",
    "photos/17.jpg",
    "photos/18.jpg"
];


const intro = document.getElementById("intro");
const slideshow = document.getElementById("slideshow");
const startButton = document.getElementById("startButton");

const music = document.getElementById("music");
const photo = document.getElementById("photo");
const video = document.getElementById("video");
const finalImage = document.getElementById("finalImage");
const finalText = document.getElementById("finalText");
const hearts = document.getElementById("hearts");


let index = 0;



startButton.addEventListener("click", () => {

    intro.style.display = "none";
    slideshow.style.display = "flex";

    music.play();

    showPhoto();

});



function showPhoto(){

    if(index >= photos.length){

        showVideo();
        return;

    }


    photo.classList.remove("show");


    setTimeout(()=>{


        photo.src = photos[index];


        photo.onload = ()=>{

            photo.classList.add("show");

        };


        index++;


    },700);



    setTimeout(()=>{

        showPhoto();

    },5700);


}




function showVideo(){

    video.classList.add("show");

    video.play();


    video.onended = ()=>{

        video.classList.remove("show");

        setTimeout(showFinal,1000);

    };

}





function showFinal(){

    finalImage.classList.add("show");

    startHearts();


    setTimeout(()=>{

        finalText.classList.add("show");

    },1500);



    setTimeout(()=>{


        let volume = music.volume;


        const fade = setInterval(()=>{


            volume -=0.05;


            if(volume <=0){

                music.volume=0;

                clearInterval(fade);

                music.pause();


            }else{

                music.volume=volume;

            }


        },400);


    },21000);

}





function startHearts(){


    const interval=setInterval(()=>{


        const heart=document.createElement("div");


        heart.className="heart";


        heart.innerHTML="❤️";


        heart.style.left=Math.random()*100+"%";


        heart.style.fontSize=(18+Math.random()*18)+"px";


        heart.style.animationDuration=(5+Math.random()*3)+"s";


        hearts.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },8000);



    },500);



    setTimeout(()=>{

        clearInterval(interval);

    },20000);


}
