const categoryButtons = document.querySelectorAll('.category-btn');
const foodItems = document.querySelectorAll('.food-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');


        categoryButtons.forEach(btn => {
            btn.classList.remove('border-orange-500', 'bg-orange-500', 'text-white');
            btn.classList.add('border-gray-400', 'text-gray-700', 'bg-transparent');
        });
        button.classList.add('border-orange-500', 'bg-orange-500', 'text-white');
        button.classList.remove('border-gray-400', 'text-gray-700', 'bg-transparent');


        foodItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (target === 'all' || target === itemCategory) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
