export async function getImages() {
    const res = await fetch("http://127.0.0.1:8000/onboarding/images/", {
        method: "GET",
    });
    const data = res.json();

    return data;
}
