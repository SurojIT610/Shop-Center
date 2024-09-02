// Navbar.js
export function initializeSearchModal() {
    const searchIcon = document.getElementById('searchIcon');
    const searchModal = document.getElementById('searchModal');
    const closeSearchModal = document.getElementById('closeSearchModal');

    if (searchIcon && searchModal && closeSearchModal) {
        searchIcon.addEventListener('click', () => {
            searchModal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });

        closeSearchModal.addEventListener('click', () => {
            searchModal.classList.remove('show');
            document.body.style.overflow = ''; // Allow scrolling when modal is closed
        });

        // Close modal if clicked outside of modal content
        window.addEventListener('click', (event) => {
            if (event.target === searchModal) {
                searchModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
}
