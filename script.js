const productItems = document.querySelectorAll(".product-option-item");

const toggleHidden = (selectedItem) => {
    productItems.forEach((item) => {
        const customization = item.querySelector(".product-customization");
        const radio = item.querySelector("input[type='radio']");
        item.classList.toggle("active", item === selectedItem);
        radio.checked = item === selectedItem;
        customization.classList.toggle("hidden", item !== selectedItem);
    });
};

productItems.forEach((item) =>
    item.addEventListener("click", () => toggleHidden(item))
);
