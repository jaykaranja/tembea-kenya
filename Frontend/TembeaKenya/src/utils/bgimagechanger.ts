const bgimagechanger = (url:string) => {
    try {
        const element = document.getElementById("home-bg");
        if (element && url) {
            element.style.backgroundImage = `url('${url}')`;
        }
        return true;
    } catch {
        return false;
    }
}

export default bgimagechanger;