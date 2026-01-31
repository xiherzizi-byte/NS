// ==========================================
// MATERIAL MANAGEMENT (Admin Only)
// ==========================================
const materialModal = document.getElementById('materialModal');
const materialForm = document.getElementById('materialForm');
const btnCloseMaterialModal = document.getElementById('btnCloseMaterialModal');
const btnCancelMaterial = document.getElementById('btnCancelMaterial');

let currentMaterialMode = 'add'; // 'add' or 'edit'
let currentMaterialData = null;

// Open material modal
function openMaterialModal(mode, presenter, expertiseIndex, material = null, materialIndex = null) {
    if (!currentUser) {
        alert('❌ Anda harus login sebagai admin!');
        return;
    }

    currentMaterialMode = mode;
    currentMaterialData = { presenter, expertiseIndex, material, materialIndex };

    const expertise = presenter.expertises[expertiseIndex];
    const modalTitle = document.getElementById('materialModalTitle');
    const modalDescription = document.getElementById('materialModalDescription');

    if (mode === 'add') {
        modalTitle.textContent = 'Tambah Materi Baru';
        modalDescription.textContent = `Tambahkan materi untuk "${expertise.name}"`;
        materialForm.reset();
        document.getElementById('materialId').value = '';
    } else {
        modalTitle.textContent = 'Edit Materi';
        modalDescription.textContent = `Edit materi untuk "${expertise.name}"`;

        // Fill form with existing data
        document.getElementById('materialId').value = material.id || '';
        document.getElementById('materialTitle').value = material.title;
        document.getElementById('materialCategory').value = material.category;
        document.getElementById('materialDate').value = material.date;
        document.getElementById('materialContent').value = material.content || '';
    }

    // Store presenter and expertise info in hidden fields
    document.getElementById('materialPresenterId').value = presenter.id;
    document.getElementById('materialExpertiseIndex').value = expertiseIndex;

    // Show modal
    materialModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close material modal
function closeMaterialModal() {
    materialModal.classList.remove('active');
    document.body.style.overflow = '';
    materialForm.reset();
    currentMaterialData = null;
}

// Save material (add or edit)
function saveMaterial(e) {
    e.preventDefault();

    if (!currentUser) {
        alert('❌ Anda harus login sebagai admin!');
        return;
    }

    const { presenter, expertiseIndex, material, materialIndex } = currentMaterialData;
    const expertise = presenter.expertises[expertiseIndex];

    const formData = {
        id: document.getElementById('materialId').value || Date.now(),
        title: document.getElementById('materialTitle').value.trim(),
        category: document.getElementById('materialCategory').value.trim(),
        date: document.getElementById('materialDate').value,
        content: document.getElementById('materialContent').value.trim()
    };

    if (currentMaterialMode === 'add') {
        // Add new material
        expertise.materials.unshift(formData); // Add to beginning (latest first)
        alert('✅ Materi berhasil ditambahkan!');
    } else {
        // Edit existing material
        expertise.materials[materialIndex] = formData;
        alert('✅ Materi berhasil diperbarui!');
    }

    // Save to localStorage
    savePresentersData();

    // Close modal and refresh view
    closeMaterialModal();
    renderPresenterDetailContent(presenter, expertiseIndex);
}

// Delete material
function deleteMaterial(presenter, expertiseIndex, materialIndex, materialTitle) {
    if (!currentUser) {
        alert('❌ Anda harus login sebagai admin!');
        return;
    }

    const confirmDelete = confirm(`Hapus materi "${materialTitle}"?\n\nMateri akan dihapus permanen.`);
    if (!confirmDelete) return;

    const expertise = presenter.expertises[expertiseIndex];
    expertise.materials.splice(materialIndex, 1);

    // Save to localStorage
    savePresentersData();

    alert('✅ Materi berhasil dihapus!');

    // Refresh view
    renderPresenterDetailContent(presenter, expertiseIndex);
}

// Save presenters data to localStorage
function savePresentersData() {
    localStorage.setItem('nongkrong_sehat_presenters', JSON.stringify(presentersData));
}

// Modal event listeners
if (btnCloseMaterialModal) {
    btnCloseMaterialModal.addEventListener('click', closeMaterialModal);
}

if (btnCancelMaterial) {
    btnCancelMaterial.addEventListener('click', closeMaterialModal);
}

if (materialForm) {
    materialForm.addEventListener('submit', saveMaterial);
}

// Close modal on overlay click
if (materialModal) {
    materialModal.addEventListener('click', (e) => {
        if (e.target === materialModal) {
            closeMaterialModal();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && materialModal.classList.contains('active')) {
        closeMaterialModal();
    }
});
