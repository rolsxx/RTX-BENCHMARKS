document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        const isExpanded = dropdownMenu.classList.toggle('show'); // Toggle the show class
        dropdownToggle.setAttribute('aria-expanded', isExpanded); // Update ARIA attribute
    });

    // Optional: Close the dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
            dropdownToggle.setAttribute('aria-expanded', 'false');
        }
    });
});