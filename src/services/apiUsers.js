export async function getUsers() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:5173/");
    headers.append("Access-Control-Allow-Origin", "http://localhost:5173/");
    const res = await fetch("http://127.0.0.1:8000/", {
        method: "GET",
        mode: "cors",
        headers: headers,
    });
    const data = res.json();

    return data;
}
