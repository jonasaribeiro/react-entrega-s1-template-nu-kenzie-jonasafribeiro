export function removeHandler(prop) {
    prop.callback(current => current.filter(element => (element.name !== prop.name || element.type !== prop.type || element.value !== prop.value)));
    let data = JSON.parse(localStorage.getItem("@NuKenzie"));
    localStorage.setItem("@NuKenzie", JSON.stringify(data.filter(element => (element.name !== prop.name || element.type !== prop.type || element.value !== prop.value))))
}