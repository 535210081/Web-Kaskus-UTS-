let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');


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
            } else {
                swal("Your imaginary file is safe!");
            }
            });
            kotak.style.display = "none";
            localStorage.setItem("role", "basic");
            member.style.display = "none";
            admin.style.display = "block";
            
        }
        else{
            swal({
            title: "Good job!",
            text: `Selamat datang ${usernameInput.value} >.<`,
            icon: "success",
            });
            kotak.style.display = "none";
            localStorage.setItem("role", "basic");
            
            member.style.display = "block";
        }
        
    }

//button serach
const icon_btn = document.querySelector('.icon');
const search = document.querySelector('.search');

icon_btn.addEventListener('click', function(){
    search.classList.toggle("active");
});

function signin(){
    
}
