export async function ValidateLogin(email: string, password: string) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": email,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as RequestRedirect
    };

    try {
        const response = await fetch("http://127.0.0.1:5005/api/users/login", requestOptions);
        if (response.status === 200) {
            console.log("Inicio de sesión correcto");
            return true;
        } else {
            console.log("Error al iniciar sesión"); 
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}

export async function Register(email: string, password: string, name: string) {
    if (email === "" || password === "" || name === "") {
        console.log("error al validar datos de usuario");
        return false;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": name,
        "email": email,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        credentials: "include" as RequestCredentials,
        redirect: "follow" as RequestRedirect
    };

    try {
        const response = await fetch("http://127.0.0.1:5005/api/users/register", requestOptions);
        if (response.status === 200) {
            console.log("Registro correcto");
            return true;
        } else {
            console.log("Error al registrarse");
            return false;
        }
    } catch (error) {
        console.log("### ERROR EN EL REGISTRO ###");
        console.error(error);
        return false;
    }
}