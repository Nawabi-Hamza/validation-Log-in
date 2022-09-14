
const inputs = document.querySelectorAll('input');
const patterns = {
    telephone: /^\d{10}$/,
    userName:  /^[a-zA-Z0-9]{4,12}$/,
    pass: /^[\w@-]{8,20}$/,
    slug:/^[a-z0-9-]{8,20}$/,
    email: /^([A-z0-9\.-_]+)@([a-z]{2,8})\.([a-z\d]{2,8})(\.[a-z\d]{2,8})?$/
}

function validate(field,regex){
    if(regex.test(field.value)){
        field.className = 'valid'
    }else{
        field.className='invalid'
    }
}
inputs.forEach(function(input){
   input.addEventListener('keyup', function(e){
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value])
   })
})

