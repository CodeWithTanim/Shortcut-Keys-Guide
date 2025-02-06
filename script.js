document.getElementById("search").addEventListener("keyup", function() {
    let searchQuery = this.value.toLowerCase();
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        let found = false;
        let items = section.querySelectorAll("li");
        
        items.forEach(item => {
            if (item.innerText.toLowerCase().includes(searchQuery)) {
                item.style.display = "block";
                found = true;
            } else {
                item.style.display = "none";
            }
        });

        section.style.display = found ? "block" : "none";
    });
});
