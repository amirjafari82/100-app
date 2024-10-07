export async function login(phone) {
    const formdata = new FormData();
    formdata.append("username", phone);
    const res = await fetch("http://127.0.0.1:8000/accounts/login", {
        method: "POST",
        body: formdata,
    });
    
    return res.json();
}
