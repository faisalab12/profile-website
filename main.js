// function toggleDetail(e){
//     const target = $(e.target);

//     if($(target).hasClass("active")){
//         $(target).html("Info Selengkapnya").removeClass("active")
//     }else{
//         $(target).html("Tutup").addClass("active")
//     }


//     const item = $(target).parents(".about-exp-item");
//     const detail = $(item).children("about-exp-item-detail");

//     $(detail).slideToggle();

    
// }

function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html(" Info Selengkapnya").removeClass("active")
    } else {
        $(target).html("Sembunyikan").addClass("active")
    }
    
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

function onFormSubmit(e){
    e.preventDefault()
    const email = $("#InputEmail");
    const name = $("#InputText");
    const messages = $("#InputTextArea");

    if(!$(email).val()){
        alert("Email is empty");
    }else if(!$(name).val()){
        alert("Name is empty");
    }else if(!$(messages).val()){
        alert("Messages is empty");
    }else{
        alert("Successful,Thank You!")
        $(email).val("");
        $(name).val("");
        $(messages).val("");
    }

}