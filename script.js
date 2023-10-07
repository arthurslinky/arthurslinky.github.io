function showPic(){
    const img = document.getElementById("weedgirl").style;
    const fullimg = document.getElementById("weedgirlfull").style;
    const overlay = document.getElementById("overlay").style;

    img.border = '3px dashed grey';
    overlay.display = 'block';
    fullimg.display = 'block';
}

function reset(){
    const img = document.getElementById("weedgirl").style;
    const fullimg = document.getElementById("weedgirlfull").style;
    const overlay = document.getElementById("overlay").style;

    img.border = '3px dashed white';
    overlay.display = 'none';
    fullimg.display = 'none';
}