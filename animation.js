function rotation(el) {
    el.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 50% 50%, 0% 100%)";
    a1 = setInterval(() => {
        if (el.style.clipPath != "polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 50% 50%, 0% 100%)") {           
            el.style.clipPath = `polygon(0% 0%,100% 0%,100% 100%,${(el.style.clipPath.slice(35,(el.style.clipPath.slice(35,el.style.clipPath.length-1).indexOf("%")+35)))*1+1}% 100%, 50% 50%, 0% 100%)`;
        } else {
            el.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 50% 50%, 0% 100%)";
            clearInterval(a1);
        }
    }, 20)
    setTimeout(() => {
        a2 = setInterval(() => {
            if (el.style.clipPath != "polygon(0% 0%, 100% 0%, 100% 0%, 50% 50%, 0% 100%)") {
                el.style.clipPath = `polygon(0% 0%,100% 0%,100% ${(el.style.clipPath.slice(29,(el.style.clipPath.slice(29,el.style.clipPath.length-1).indexOf("%")+29)))*1-1}%, 50% 50%, 0% 100%)`;
            } else {
                el.style.clipPath = "polygon(0% 0%, 100% 0%, 50% 50%, 0% 100%)";
                clearInterval(a2);
            }
        }, 20)
    }, 2000);
    setTimeout(() => {
        a3 = setInterval(() => {
            if (el.style.clipPath != "polygon(0% 0%, 0% 0%, 50% 50%, 0% 100%)") {
                el.style.clipPath = `polygon(0% 0%,${(el.style.clipPath.slice(15,(el.style.clipPath.slice(15,el.style.clipPath.length-1).indexOf("%")+15)))*1-1}% 0%, 50% 50%, 0% 100%)`;
            } else {
                el.style.clipPath = "polygon(0% 0%, 50% 50%, 0% 100%)";
                clearInterval(a3);
            }
        }, 20)
    }, 4000);
    setTimeout(() => {
        a4 = setInterval(() => {
            if (el.style.clipPath != "polygon(0% 100%, 50% 50%, 0% 100%)") {
                el.style.clipPath = `polygon(0% ${(el.style.clipPath.slice(11,(el.style.clipPath.slice(11,el.style.clipPath.length-1).indexOf("%")+11)))*1+1}%, 50% 50%, 0% 100%)`;
            } else {
                el.style.clipPath = "polygon(50% 50%, 0% 100%)";
                document.body.removeChild(el);
                document.body.style.overflow = "auto";
                clearInterval(a4);
            }
        }, 20)
    }, 6000);
}

function fade(el) {
    el.style.opacity = "1";
    fade = setInterval(() => {
        if (el.style.opacity > 0) {
            el.style.opacity -= 0.02;
        }else {
            el.style.display = "none";
            document.body.style.overflow = "auto";
            clearInterval(fade);
        }
    }, 50);
}
