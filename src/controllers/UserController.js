class UserController{

    constructor(formId){

        this.form = document.getElementById(formId)
        //console.log(this.form);
        this.onSubmit();
}


onSubmit(){

    [...this.form.elements].forEach((element, index)=>{

   console.log(element.name);

    })


}
getValues(){


}
}