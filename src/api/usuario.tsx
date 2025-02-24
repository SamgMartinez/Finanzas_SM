export function ValidateLogin (email: string, password: string){
    console.log("Validando datos de usuario...")
    if(email === "" || password === ""){
        console.log("error al validar datos de usuario");
        return false;
    }
    console.log("Datos de usuario validados correctamente");
}

export function ValidateRegister (email: string, password: string, name: string){
    console.log("Validando datos de usuario...")
    if(email === "" || password === "" || name === ""){
        console.log("error al validar datos de usuario");
        return false;
    }
    console.log("registrado correctamente");
}