
// Welcome message appears when Navbar name is clicked
document.getElementById("name").onclick = function(){
    document.getElementById("welcome").style.display = 'flex';
    setTimeout(function(){
        document.getElementById("welcome").style.display = 'none';
    }, 1600);
}



