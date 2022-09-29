let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
const body_blur = document.querySelector('body');

    function login(){
        console.log('tombol login berhasil di klik');
        console.log(usernameInput.value);
        console.log(passwordInput.value);
        localStorage.setItem("username", usernameInput.value);
        
    
        if(usernameInput.value.trim() == "" || passwordInput.value.trim() == ""){
            swal({
            title: "Harus diisi keduanya ya.. :'",
            icon: "info",
            });
        }
        else if (usernameInput.value == "admin" && passwordInput.value == "admin"){
            swal({
            title: "Are you sure?",
            text: "Kamu akan masuk sebagai Admin",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            
            })
            .then((willDelete) => {
            if (willDelete) {
                swal(`Selamat datang ${usernameInput.value} >.<`, {
                icon: "success",
                
                });
                $('#myModal').on('shown', function() {
                    // remove previous timeouts if it's opened more than once.
                    clearTimeout(myModalTimeout);
                
                    // hide it after a minute
                    myModalTimeout = setTimeout(function() {
                        $('#myModal').modal('hide');
                    }, 6e4);
                });
                $("#myModal").css("display","none");
                body_blur.classList.remove('blur');
                
            } else {
                swal("Halaman kamu kembali semula");
                $("#myModal").css("display","none");
                body_blur.classList.remove('blur');
            }
            });
            kotak.style.display = "none";
            localStorage.setItem("role", "basic");
            $("#myModal").css("display","none");
            body_blur.classList.remove('blur');
        }
        else{
            swal({
            title: "Good job!",
            text: `Selamat datang ${usernameInput.value} >.<`,
            icon: "success",
            });
            // kotak.style.display = "none";
            $("#myModal").css("display","none");
            //localStorage.setItem("role", "basic");
            // member.style.display = "block";
            body_blur.classList.remove('blur');
            
        }
        
    }
    
//button serach
const icon_btn = document.querySelector('.icon');
const search = document.querySelector('.search');

icon_btn.addEventListener('click', function(){
    search.classList.toggle("active");
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



function signin(){
    $("#myModal").css("display","block");
    body_blur.classList.add('blur');
}

span.onclick = function() {
    $("#myModal").css("display","none");
    body_blur.classList.remove('blur');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        $("#myModal").css("display","none");
    }
}

function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}