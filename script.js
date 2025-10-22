function switchTab(tabName) {
    // Sembunyikan semua bagian konten
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });

    // Non-aktifkan semua tombol tab
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Tampilkan bagian konten yang dipilih
    const selectedContent = document.getElementById(`content-${tabName}`);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }

    // Aktifkan tombol tab yang dipilih
    const selectedButton = document.getElementById(`tab-${tabName}`);
    if (selectedButton) {
        selectedButton.classList.add('active');
        // Gulir ke area konten (berguna di layar kecil)
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// Pastikan tab "home" aktif saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    switchTab('home');
});
