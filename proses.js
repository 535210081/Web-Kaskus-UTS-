let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
const body_blur = document.querySelector('body');

const user = usernameInput.value;
const close_signin = document.getElementById('close_signin');
const close_register = document.getElementById('close_register');
document.getElementById("mybtn").style.display = 'none';

function register2(){
    console.log('tombol register berhasil di klik');
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
            $('#myModal2').on('shown', function() {
                // remove previous timeouts if it's opened more than once.
                clearTimeout(myModalTimeout);
            
                // hide it after a minute
                myModalTimeout = setTimeout(function() {
                    $('#myModal2').modal('hide');
                }, 6e4);
            });
            $("#myModal2").css("display","none");
            body_blur.classList.remove('blur');
            document.getElementById("myBtn").innerHTML = `${usernameInput.value}`;
            
        } else {
            swal("Halaman kamu kembali semula");
            $("#myModal2").css("display","none");
            body_blur.classList.remove('blur');
        }
        });
        kotak.style.display = "none";
        localStorage.setItem("role", "basic");
        $("#myModal2").css("display","none");
        body_blur.classList.remove('blur');
    }
    else{
        swal({
        title: "Good job!",
        text: `Akun telah berhasil dibuat! ${usernameInput.value} >.<`,
        icon: "success",
        });
        // kotak.style.display = "none";
        $("#myModal2").css("display","none");
        //localStorage.setItem("role", "basic");
        // member.style.display = "block";
        body_blur.classList.remove('blur');
        document.getElementById("myBtn").style.display = 'none';
        document.getElementById("mybtn").style.display = 'block';
    }
    
}

console.log(user);
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
                document.getElementById("mybtn").innerHTML = `${usernameInput.value}`;
                
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
            document.getElementById("mybtn").innerHTML = `${usernameInput.value}`;
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


function register(){
    $("#myModal2").css("display","block");
    body_blur.classList.add('blur');
}

function signin(){
    console.log("hiiiii");
    $("#myModal").css("display","block");
    body_blur.classList.add('blur');
}

//Close icon
close_register.onclick = function() {
    $("#myModal2").css("display","none");
    
    body_blur.classList.remove('blur');
}

close_signin.onclick = function() {
    $("#myModal").css("display","none");
    
    body_blur.classList.remove('blur');
}

const pop_button = document.querySelector('.pop-button');
const creator_container_areabox = document.querySelector('.container-area-box');

pop_button.addEventListener('click', function(){
creator_container_areabox.classList.toggle('hide-pop');
pop_button.classList.toggle('rotate');
})



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

const content = document.getElementById("my-element3")

//Creator details

const full_name_area_a = document.querySelector('.full-name.a');
const full_name_area_b = document.querySelector('.full-name.b');
const full_name_area_c = document.querySelector('.full-name.c');
const full_name_area_d = document.querySelector('.full-name.d');
const info_area_a = document.querySelector('.creator-info.a');
const info_area_b = document.querySelector('.creator-info.b');
const info_area_c = document.querySelector('.creator-info.c');
const info_area_d = document.querySelector('.creator-info.d');

//close details
const close_button_a = document.querySelector('.close-btn.a');

close_button_a.addEventListener('click', function(){
    creator_detail_a.classList.remove('active');
    logo_details_a.classList.remove('active');
    full_name_area_a.remove('active');
    info_area_a.remove('active');
})

const close_button_b = document.querySelector('.close-btn.b');

close_button_b.addEventListener('click', function(){
    creator_detail_b.classList.remove('active');
    logo_details_b.classList.remove('active');
    full_name_area_b.remove('active');
    info_area_b.remove('active');
})

const close_button_c = document.querySelector('.close-btn.c');

close_button_c.addEventListener('click', function(){
    creator_detail_c.classList.remove('active');
    logo_details_c.classList.remove('active');
    full_name_area_c.remove('active');
    info_area_c.remove('active');
})

const close_button_d = document.querySelector('.close-btn.d');

close_button_d.addEventListener('click', function(){
    creator_detail_d.classList.remove('active');
    logo_details_d.classList.remove('active');
    full_name_area_d.remove('active');
    info_area_d.remove('active');
})

//open details

const logo_details_a = document.querySelector('.bi.bi-arrow-right-circle-a');
const logo_details_b = document.querySelector('.bi.bi-arrow-right-circle-b');
const logo_details_c = document.querySelector('.bi.bi-arrow-right-circle-c');
const logo_details_d = document.querySelector('.bi.bi-arrow-right-circle-d');

const detail_button_a = document.querySelector('.profile-detail.a');
const creator_detail_a = document.querySelector('.creator.a');

detail_button_a.addEventListener('click', function(){
    creator_detail_a.classList.toggle('active');
    logo_details_a.classList.toggle('active');
    creator_detail_b.classList.remove('active');
    creator_detail_c.classList.remove('active');
    creator_detail_d.classList.remove('active');
    logo_details_b.classList.remove('active');
    logo_details_c.classList.remove('active');
    logo_details_d.classList.remove('active');
    full_name_area_a.classList.toggle('active');
    full_name_area_b.classList.remove('active');
    full_name_area_c.classList.remove('active');
    full_name_area_d.classList.remove('active');
    info_area_a.classList.toggle('active');
    info_area_b.classList.remove('active');
    info_area_c.classList.remove('active');
    info_area_d.classList.remove('active');
})

const detail_button_b = document.querySelector('.profile-detail.b');
const creator_detail_b = document.querySelector('.creator.b');

detail_button_b.addEventListener('click', function(){
    creator_detail_b.classList.toggle('active');
    logo_details_b.classList.toggle('active');
    creator_detail_a.classList.remove('active');
    creator_detail_c.classList.remove('active');
    creator_detail_d.classList.remove('active');
    logo_details_a.classList.remove('active');
    logo_details_c.classList.remove('active');
    logo_details_d.classList.remove('active');
    full_name_area_b.classList.toggle('active');
    full_name_area_a.classList.remove('active');
    full_name_area_c.classList.remove('active');
    full_name_area_d.classList.remove('active');
    info_area_b.classList.toggle('active');
    info_area_a.classList.remove('active');
    info_area_c.classList.remove('active');
    info_area_d.classList.remove('active');
})

const detail_button_c = document.querySelector('.profile-detail.c');
const creator_detail_c = document.querySelector('.creator.c');

detail_button_c.addEventListener('click', function(){
    creator_detail_c.classList.toggle('active');
    logo_details_c.classList.toggle('active');
    creator_detail_a.classList.remove('active');
    creator_detail_b.classList.remove('active');
    creator_detail_d.classList.remove('active');
    logo_details_a.classList.remove('active');
    logo_details_b.classList.remove('active');
    logo_details_d.classList.remove('active');
    full_name_area_c.classList.toggle('active');
    full_name_area_b.classList.remove('active');
    full_name_area_a.classList.remove('active');
    full_name_area_d.classList.remove('active');
    info_area_c.classList.toggle('active');
    info_area_b.classList.remove('active');
    info_area_a.classList.remove('active');
    info_area_d.classList.remove('active');
})


const detail_button_d = document.querySelector('.profile-detail.d');
const creator_detail_d = document.querySelector('.creator.d');

detail_button_d.addEventListener('click', function(){
    creator_detail_d.classList.toggle('active');
    logo_details_d.classList.toggle('active');
    creator_detail_a.classList.remove('active');
    creator_detail_b.classList.remove('active');
    creator_detail_c.classList.remove('active');
    logo_details_a.classList.remove('active');
    logo_details_b.classList.remove('active');
    logo_details_c.classList.remove('active');
    full_name_area_d.classList.toggle('active');
    full_name_area_b.classList.remove('active');
    full_name_area_c.classList.remove('active');
    full_name_area_a.classList.remove('active');
    info_area_d.classList.toggle('active');
    info_area_b.classList.remove('active');
    info_area_c.classList.remove('active');
    info_area_a.classList.remove('active');
})





