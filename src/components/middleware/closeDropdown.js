const closeDropdown = () => {
    const x = document.getElementById("closeDropdownShow");
    x.classList.remove("show");
    const y = document.getElementById("menuDropdownShow");
    y.classList.remove("show");
    const z = document.getElementById("navbarDropdownMenuLink");
    console.log("z 2", z);
};

export default closeDropdown;