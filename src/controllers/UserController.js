class UserController{

    constructor(formId){

        this.form = document.getElementById(formId)
        //console.log(this.form);
        this.onSubmit();
}


onSubmit(){

   addEventListener("submit", (e)=>{

       e.preventDefault();
        this.getValues()
   })

    }


message(user){

   // console.log(user)
}

getValues(){

      let user = {};
    [...this.form.elements].forEach((element, index)=>{

      if (["nome", "email", "celular","password"].indexOf(element.name) > -1 && !element.value){

        element.classList.add("error")

        //console.log(element)
      }

          if(element.name){
        user[element.name] = element.value;

  }
        //console.log(element);
        let object = new User(user.nome, user.email, user.celular, user.password);
        this.message(object)
})

console.log(user);

}

}