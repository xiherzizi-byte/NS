// ==========================================
// NONGKRONG SEHAT - JAVASCRIPT
// ==========================================

// ==========================================
// DATA - Organized by Presenters
// ==========================================

// Load presenters from localStorage if available
function loadPresentersData() {
    const saved = localStorage.getItem('nongkrong_sehat_presenters');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Merge saved data with default data
            parsed.forEach(savedPresenter => {
                const index = presentersData.findIndex(p => p.id === savedPresenter.id);
                if (index !== -1) {
                    // Restore avatar color
                    if (savedPresenter.avatarColor) {
                        presentersData[index].avatarColor = savedPresenter.avatarColor;
                    }

                    // Restore expertises (which include materials)
                    if (savedPresenter.expertises && Array.isArray(savedPresenter.expertises)) {
                        presentersData[index].expertises = savedPresenter.expertises;
                    }

                    // Compatibility check for old role format
                    if (savedPresenter.role && (!savedPresenter.expertises || savedPresenter.expertises.length === 0)) {
                        if (!presentersData[index].expertises) {
                            presentersData[index].expertises = [{ name: savedPresenter.role, materials: [] }];
                        } else if (presentersData[index].expertises.length > 0) {
                            presentersData[index].expertises[0].name = savedPresenter.role;
                        }
                    }
                }
            });
        } catch (e) {
            console.error('Error loading presenters data:', e);
        }
    }
}

const presentersData = [
    {
        id: 'fikri',
        name: 'Fikri',
        avatarColor: '#94a3b8', // Muted gray
        // Multiple expertises with their own materials
        expertises: [
            {
                name: 'Fiqih Dasar',
                materials: [
                    {
                        id: 1,
                        title: 'Manfaat Olahraga Rutin untuk Kesehatan Mental',
                        category: 'Kesehatan Mental',
                        date: '2026-01-25',
                        content: 'Olahraga rutin memiliki dampak positif yang luar biasa terhadap kesehatan mental kita. Aktivitas fisik secara teratur dapat meningkatkan produksi endorfin, hormon yang membuat kita merasa lebih bahagia dan rileks. Selain itu, olahraga juga membantu mengurangi stres, meningkatkan kualitas tidur, dan meningkatkan kepercayaan diri.'
                    },
                    {
                        id: 2,
                        title: 'Cara Mengelola Stres di Era Digital',
                        category: 'Kesehatan Mental',
                        date: '2026-01-18',
                        content: 'Di era digital saat ini, kita sering terbebani oleh notifikasi, informasi berlebihan, dan ekspektasi untuk selalu terhubung. Penting untuk menetapkan batasan digital, seperti waktu tanpa gadget, membatasi media sosial, dan fokus pada aktivitas yang menenangkan seperti meditasi atau membaca buku.'
                    }
                ]
            },
            {
                name: 'Psikologi',
                materials: [
                    {
                        id: 3,
                        title: 'Pentingnya Istirahat yang Cukup',
                        category: 'Kesehatan',
                        date: '2026-01-10',
                        content: 'Tidur yang cukup adalah fondasi kesehatan fisik dan mental. Kurang tidur dapat menyebabkan penurunan konsentrasi, mood yang buruk, dan melemahkan sistem kekebalan tubuh. Dewasa disarankan tidur 7-9 jam per malam untuk fungsi optimal.'
                    }
                ]
            }
        ]
    },
    {
        id: 'aam',
        name: 'Aam',
        avatarColor: '#94a3b8', // Muted gray
        expertises: [
            {
                name: 'Analisis Tafsir & Hadits',
                materials: [
                    { id: 4, title: 'Panduan Nutrisi Seimbang untuk Pemula', category: 'Nutrisi', date: '2026-01-22', content: 'Nutrisi seimbang adalah kunci untuk hidup sehat. Pastikan piring Anda mengandung karbohidrat kompleks, protein, lemak sehat, vitamin, dan mineral.' },
                    { id: 5, title: 'Superfood Lokal Indonesia', category: 'Nutrisi', date: '2026-01-15', content: 'Indonesia kaya akan superfood lokal seperti tempe, daun kelor, dan buah-buahan tropis yang kaya nutrisi.' },
                    { id: 6, title: 'Menu Diet Sehat Harian', category: 'Nutrisi', date: '2026-01-08', content: 'Rencana menu harian yang seimbang dengan fokus pada bahan-bahan segar dan minimally processed.' }
                ]
            }
        ]
    },
    {
        id: 'hafy',
        name: 'Hafy',
        avatarColor: '#94a3b8', // Muted gray
        expertises: [
            {
                name: 'Sejarah',
                materials: [
                    { id: 7, title: 'Teknik Pernapasan untuk Mengurangi Stres', category: 'Wellness', date: '2026-01-20', content: 'Pernapasan dalam dan mindful breathing terbukti efektif mengurangi tingkat stres dan kecemasan.' },
                    { id: 8, title: 'Yoga untuk Pemula', category: 'Wellness', date: '2026-01-12', content: 'Panduan memulai yoga untuk pemula dengan gerakan dasar yang mudah diikuti di rumah.' }
                ]
            }
        ]
    },
    {
        id: 'uween',
        name: 'Uween',
        avatarColor: '#94a3b8', // Muted gray
        expertises: [
            {
                name: 'Prompt Engineering',
                materials: [
                    { id: 9, title: 'Olahraga Ringan untuk Pekerja Kantor', category: 'Olahraga', date: '2026-01-24', content: 'Gerakan stretching dan olahraga ringan yang bisa dilakukan di kantor untuk mengurangi kekakuan otot.' },
                    { id: 10, title: 'Latihan Kardio 15 Menit', category: 'Olahraga', date: '2026-01-17', content: 'Latihan kardio singkat namun efektif yang bisa dilakukan tanpa alat khusus.' },
                    { id: 11, title: 'Stretching Rutin untuk Postur Tubuh', category: 'Olahraga', date: '2026-01-09', content: 'Panduan stretching untuk memperbaiki postur tubuh dan mengurangi nyeri punggung.' }
                ]
            }
        ]
    },
    {
        id: 'herzi',
        name: 'Herzi',
        avatarColor: '#94a3b8', // Muted gray
        expertises: [
            {
                name: 'Gaya Hidup Sehat',
                materials: [
                    { id: 12, title: 'Cara Membentuk Kebiasaan Sehat yang Bertahan', category: 'Gaya Hidup', date: '2026-01-23', content: 'Tips praktis untuk membangun kebiasaan sehat yang sustainable dan tidak mudah ditinggalkan.' },
                    { id: 13, title: 'Detoks Digital: Menjaga Keseimbangan', category: 'Gaya Hidup', date: '2026-01-16', content: 'Pentingnya digital detox dan cara menerapkannya dalam kehidupan sehari-hari.' }
                ]
            }
        ]
    }
];

// Get initial letter from name for avatar
function getInitial(name) {
    return name.charAt(0).toUpperCase();
}

// Get primary role (first expertise) from presenter
function getPrimaryRole(presenter) {
    return presenter.expertises && presenter.expertises.length > 0
        ? presenter.expertises[0].name
        : 'General';
}

// Get total materials count across all expertises
function getTotalMaterialsCount(presenter) {
    if (!presenter.expertises) return 0;
    return presenter.expertises.reduce((total, expertise) => total + expertise.materials.length, 0);
}

// Get latest material for each presenter
function getLatestMaterials() {
    return presentersData.map(presenter => {
        let latestMaterial = null;
        let latestDate = new Date(0);

        // Find latest material across all expertises
        presenter.expertises.forEach(expertise => {
            expertise.materials.forEach(material => {
                const matDate = new Date(material.date);
                if (matDate > latestDate) {
                    latestDate = matDate;
                    latestMaterial = material;
                }
            });
        });

        return {
            ...presenter,
            latestMaterial
        };
    });
}

const defaultScheduleData = [
    {
        id: "1",
        date: "05 Feb 2026",
        order: 1,
        title: "Presentasi: Fiqih Ibadah Kontemporer",
        presenter: "Fikri",
        type: "Presentasi",
        location: "Musholla Al-Ikhlas",
        status: "upcoming"
    },
    {
        id: "2",
        date: "12 Feb 2026",
        order: 2,
        title: "Jalsah Mudzakarah: Pembahasan Kitab Kuning",
        presenter: "Asatidz",
        type: "Jalsah Mudzakarah",
        location: "Teras Depan",
        status: "upcoming"
    },
    {
        id: "3",
        date: "18 Feb 2026",
        order: 3,
        title: "Mudzakarah Santri: Review Materi Pekanan",
        presenter: "Santri Senior",
        type: "Mudzakarah Santri",
        location: "Aula Utama",
        status: "upcoming"
    },
    {
        id: "4",
        date: "25 Feb 2026",
        order: 4,
        title: "Presentasi: Manajemen Kesehatan Mental Muslim",
        presenter: "Hafy",
        type: "Presentasi",
        location: "Musholla Al-Ikhlas",
        status: "upcoming"
    },
    {
        id: "5",
        date: "20 Jan 2026",
        order: 5,
        title: "Jalsah Mudzakarah: Adab Menuntut Ilmu",
        presenter: "Ustadz Husen",
        type: "Jalsah Mudzakarah",
        location: "Teras Depan",
        status: "completed"
    },
    {
        id: "6",
        date: "15 Jan 2026",
        order: 6,
        title: "Mudzakarah Santri: Hafalan Doa Harian",
        presenter: "Santri Senior",
        type: "Mudzakarah Santri",
        location: "Aula Utama",
        status: "completed"
    }
];

let scheduleData = JSON.parse(localStorage.getItem('nongkrong_sehat_schedule')) || defaultScheduleData;

// Initial sort: Upcoming first (by Order ASC), then Completed
scheduleData.sort((a, b) => {
    if (a.status === 'upcoming' && b.status === 'completed') return -1;
    if (a.status === 'completed' && b.status === 'upcoming') return 1;

    const orderA = parseInt(a.order, 10) || 1;
    const orderB = parseInt(b.order, 10) || 1;

    if (orderA !== orderB) return orderA - orderB;

    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (!isNaN(dateA) && !isNaN(dateB)) {
        return a.status === 'upcoming' ? dateA - dateB : dateB - dateA;
    }
    return 0;
});

// ==========================================
// DOM ELEMENTS
// ==========================================
const pages = document.querySelectorAll('.page');
const navItems = document.querySelectorAll('.nav-item');
const presentersList = document.getElementById('presentersList');
const materialsList = document.getElementById('materialsList');
const presenterHeader = document.getElementById('presenterHeader');
const btnBack = document.getElementById('btnBack');
const scheduleList = document.getElementById('scheduleList');
const btnLogin = document.getElementById('btnLogin');
const loginModal = document.getElementById('loginModal');
const modalOverlay = document.getElementById('modalOverlay');
const btnCloseModal = document.getElementById('btnCloseModal');
const loginForm = document.getElementById('loginForm');
const fabAddSchedule = document.getElementById('fabAddSchedule');
const scheduleModal = document.getElementById('scheduleModal');
const scheduleForm = document.getElementById('scheduleForm');
const btnCloseScheduleModal = document.getElementById('btnCloseScheduleModal');
const btnCancelSchedule = document.getElementById('btnCancelSchedule');

let currentPresenter = null;
let currentScheduleMode = 'add'; // 'add' or 'edit'

// ==========================================
// NAVIGATION
// ==========================================
function navigateToPage(pageId) {
    // Role protection for sensitive pages
    if (pageId === 'pageSettings' && currentUser?.role !== 'admin') {
        alert('❌ Akses ditolak! Anda harus login sebagai Admin.');
        // Redirect to safe page
        window.location.hash = '#pageMateri';
        return;
    }

    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update nav items (only if not going to detail page)
    if (pageId !== 'pagePresenterDetail') {
        navItems.forEach(item => {
            if (item.dataset.page === pageId) {
                item.classList.add('active');
                item.setAttribute('aria-current', 'page');
            } else {
                item.classList.remove('active');
                item.removeAttribute('aria-current');
            }
        });
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add click listeners to nav items
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const pageId = item.dataset.page;
        navigateToPage(pageId);

        // Ripple effect
        createRipple(item, event);
    });
});

// Back button
if (btnBack) {
    btnBack.addEventListener('click', () => {
        navigateToPage('pageMateri');
    });
}

// ==========================================
// RIPPLE EFFECT
// ==========================================
function createRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ==========================================
// RENDER PRESENTERS LIST
// ==========================================
function renderPresentersList() {
    presentersList.innerHTML = '';
    const presenters = getLatestMaterials();

    // Find the absolute latest material across all presenters
    let latestMaterial = null;
    let latestPresenter = null;
    let latestDate = new Date(0);

    presenters.forEach(presenter => {
        const mat = presenter.latestMaterial;
        const matDate = new Date(mat.date);
        if (matDate > latestDate) {
            latestDate = matDate;
            latestMaterial = mat;
            latestPresenter = presenter;
        }
    });

    // Render featured latest material
    if (latestMaterial && latestPresenter) {
        const featuredCard = document.createElement('div');
        featuredCard.className = 'featured-material';

        featuredCard.innerHTML = `
            <div class="featured-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="17" x2="12" y2="22"></line>
                    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
                </svg>
                TERBARU
            </div>
            <h3 class="featured-title">${latestMaterial.title}</h3>
            <div class="featured-meta">
                <span class="featured-presenter">oleh ${latestPresenter.name}</span>
                <span class="material-category">${latestMaterial.category}</span>
            </div>
        `;

        presentersList.appendChild(featuredCard);
    }

    // Section header for presenters
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';
    sectionHeader.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <h3>PENYAJI</h3>
    `;
    presentersList.appendChild(sectionHeader);

    // Render compact presenter list
    presenters.forEach(presenter => {
        const presenterItem = document.createElement('div');
        presenterItem.className = 'presenter-item';

        const totalMaterials = getTotalMaterialsCount(presenter);
        const primaryRole = getPrimaryRole(presenter);

        presenterItem.innerHTML = `
            <div class="presenter-item-avatar" style="background: ${presenter.avatarColor};">${getInitial(presenter.name)}</div>
            <div class="presenter-item-info">
                <h4 class="presenter-item-name">${presenter.name}</h4>
                <div class="presenter-meta-group">
                    <span class="presenter-role-tag">${primaryRole}</span>
                    <span class="presenter-material-badge">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                         </svg>
                         ${totalMaterials} Kajian
                    </span>
                </div>
            </div>
            <div class="presenter-item-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;

        presenterItem.addEventListener('click', () => {
            showPresenterDetail(presenter);
        });

        presentersList.appendChild(presenterItem);
    });
}

// ==========================================
// MATERIAL MANAGEMENT (CRUD Operations)
// ==========================================
let currentMaterialMode = 'add'; // 'add' or 'edit'
let currentMaterialData = null;

// Open material modal
function openMaterialModal(mode, presenter, expertiseIndex, material = null, materialIndex = null) {
    if (!currentUser) {
        alert('❌ Anda harus login untuk melakukan ini!');
        return;
    }

    currentMaterialMode = mode;
    currentMaterialData = { presenter, expertiseIndex, material, materialIndex };

    const expertise = presenter.expertises[expertiseIndex];
    const materialModal = document.getElementById('materialModal');
    const materialForm = document.getElementById('materialForm');
    const modalTitle = document.getElementById('materialModalTitle');
    const modalDescription = document.getElementById('materialModalDescription');

    if (mode === 'add') {
        modalTitle.textContent = 'Tambah Kajian Baru';
        modalDescription.textContent = `Bagikan kajian baru dalam bidang "${expertise.name}"`;
        materialForm.reset();
        document.getElementById('materialId').value = '';
    } else {
        modalTitle.textContent = 'Edit Kajian';
        modalDescription.textContent = `Perbarui kajian pengetahuan dalam bidang "${expertise.name}"`;

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
    const materialModal = document.getElementById('materialModal');
    const materialForm = document.getElementById('materialForm');
    materialModal.classList.remove('active');
    document.body.style.overflow = '';
    materialForm.reset();
    currentMaterialData = null;
}

// Save material (add or edit)
function saveMaterial(e) {
    e.preventDefault();

    if (!currentUser) {
        alert('❌ Anda harus login untuk melakukan ini!');
        return;
    }

    const { presenter, expertiseIndex, material, materialIndex } = currentMaterialData;
    const expertise = presenter.expertises[expertiseIndex];

    const formData = {
        id: document.getElementById('materialId').value || (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString()),
        title: document.getElementById('materialTitle').value.trim(),
        category: document.getElementById('materialCategory').value.trim(),
        date: document.getElementById('materialDate').value,
        content: document.getElementById('materialContent').value.trim()
    };

    if (currentMaterialMode === 'add') {
        // Add new material
        expertise.materials.unshift(formData); // Add to beginning (latest first)
        alert('✅ Kajian Pengetahuan berhasil ditambahkan!');
    } else {
        // Edit existing material
        expertise.materials[materialIndex] = formData;
        alert('✅ Kajian Pengetahuan berhasil diperbarui!');
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
        alert('❌ Anda harus login untuk melakukan ini!');
        return;
    }

    const confirmDelete = confirm(`Hapus pengetahuan "${materialTitle}"?\n\nPengetahuan ini akan dihapus permanen.`);
    if (!confirmDelete) return;

    const expertise = presenter.expertises[expertiseIndex];
    expertise.materials.splice(materialIndex, 1);

    // Save to localStorage
    savePresentersData();

    alert('✅ Kajian Pengetahuan berhasil dihapus!');

    // Refresh view
    renderPresenterDetailContent(presenter, expertiseIndex);
}

// Save presenters data to localStorage
function savePresentersData() {
    localStorage.setItem('nongkrong_sehat_presenters', JSON.stringify(presentersData));
}

// ==========================================
// PRESENTER DETAIL VIEW
// ==========================================

// ==========================================
// SHOW PRESENTER DETAIL
// ==========================================
let currentExpertiseIndex = 0; // Track currently selected expertise

function showPresenterDetail(presenter) {
    currentPresenter = presenter;
    currentExpertiseIndex = 0; // Reset to first expertise

    // Render detail with first expertise
    renderPresenterDetailContent(presenter, currentExpertiseIndex);

    // Navigate to detail page
    navigateToPage('pagePresenterDetail');
}

function renderPresenterDetailContent(presenter, expertiseIndex) {
    const currentExpertise = presenter.expertises[expertiseIndex];
    const totalMaterials = getTotalMaterialsCount(presenter);
    const hasMultipleExpertises = presenter.expertises.length > 1;

    const fabAddMaterial = document.getElementById('fabAddMaterial');
    const editModeToggleContainer = document.getElementById('editModeToggleContainer');
    const editModeToggle = document.getElementById('editModeToggle');

    // Show/hide admin controls
    if (currentUser) {
        if (editModeToggleContainer) editModeToggleContainer.style.display = 'flex';
        // FAB visibility is now controlled by CSS via .edit-mode-active
    } else {
        if (fabAddMaterial) fabAddMaterial.style.display = 'none';
        if (editModeToggleContainer) editModeToggleContainer.style.display = 'none';
        document.body.classList.remove('edit-mode-active');
    }

    // Initialize edit mode state
    if (currentUser && editModeToggle) {
        if (editModeToggle.checked) {
            document.body.classList.add('edit-mode-active');
        } else {
            document.body.classList.remove('edit-mode-active');
        }
    }

    // Edit mode toggle event
    if (editModeToggle) {
        editModeToggle.onchange = () => {
            if (editModeToggle.checked) {
                document.body.classList.add('edit-mode-active');
            } else {
                document.body.classList.remove('edit-mode-active');
            }
        };
    }

    // FAB click event
    if (fabAddMaterial) {
        fabAddMaterial.onclick = () => {
            if (!currentUser) {
                alert('❌ Anda harus login untuk melakukan ini!');
                return;
            }
            openMaterialModal('add', presenter, expertiseIndex);
        };
    }

    // Render header with expandable expertise pills
    presenterHeader.innerHTML = `
        <div class="presenter-header-content">
            <div class="presenter-avatar-large" style="background: ${presenter.avatarColor};">${getInitial(presenter.name)}</div>
            <div>
                <h2 class="presenter-name-large">${presenter.name}</h2>
                <p class="presenter-materials-count">${totalMaterials} Kajian</p>
            </div>
        </div>
        
        <div class="expertise-switcher">
            <div class="expertise-header">
                <div class="expertise-label">Bidang Keahlian:</div>
                ${hasMultipleExpertises ? `
                    <button class="btn-toggle-expertise" id="btnToggleExpertise">
                        <span class="toggle-text">Lihat Bidang Lain</span>
                        <svg class="toggle-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                ` : ''}
            </div>
            <div class="expertise-pills" id="expertisePills">
                ${presenter.expertises.map((exp, index) => `
                    <button 
                        class="expertise-pill ${index === expertiseIndex ? 'active' : (hasMultipleExpertises ? 'hidden' : '')}" 
                        data-expertise-index="${index}"
                    >
                        ${exp.name}
                    </button>
                `).join('')}
                
                ${currentUser ? `
                    <button class="btn-add-expertise" id="btnAddExpertise" title="Tambah Bidang Keahlian">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                ` : ''}
            </div>
        </div>
    `;

    // Add expertise logic
    const btnAddExpertise = document.getElementById('btnAddExpertise');
    if (btnAddExpertise) {
        btnAddExpertise.onclick = (e) => {
            e.stopPropagation();
            const newExpertiseName = prompt('Masukkan nama bidang keahlian baru (misal: Sosiologi, Sejarah, dsb):');

            if (newExpertiseName && newExpertiseName.trim()) {
                const name = newExpertiseName.trim();

                // Check if already exists
                const exists = presenter.expertises.some(exp => exp.name.toLowerCase() === name.toLowerCase());
                if (exists) {
                    alert('⚠️ Bidang keahlian ini sudah ada!');
                    return;
                }

                // Add to data
                presenter.expertises.push({
                    name: name,
                    materials: []
                });

                // Save and re-render
                savePresentersData();
                const newIdx = presenter.expertises.length - 1;
                renderPresenterDetailContent(presenter, newIdx);
                alert(`✅ Bidang "${name}" berhasil ditambahkan!`);
            }
        };
    }

    // Add toggle and pill click listeners
    if (hasMultipleExpertises) {
        const btnToggle = document.getElementById('btnToggleExpertise');
        const pills = document.querySelectorAll('.expertise-pill');

        // Toggle button to show/hide other pills
        if (btnToggle) {
            btnToggle.addEventListener('click', () => {
                const hiddenPills = document.querySelectorAll('.expertise-pill.hidden');
                const isExpanded = hiddenPills.length === 0;

                if (isExpanded) {
                    // Collapse: hide non-active pills
                    pills.forEach((pill, index) => {
                        if (index !== expertiseIndex) {
                            pill.classList.add('hidden');
                        }
                    });
                    btnToggle.querySelector('.toggle-text').textContent = 'Lihat Bidang Lain';
                    btnToggle.classList.remove('expanded');
                } else {
                    // Expand: show all pills
                    pills.forEach(pill => {
                        pill.classList.remove('hidden');
                    });
                    btnToggle.querySelector('.toggle-text').textContent = 'Sembunyikan';
                    btnToggle.classList.add('expanded');
                }
            });
        }

        // Click pill to switch expertise
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                const newIndex = parseInt(pill.dataset.expertiseIndex);
                if (newIndex !== expertiseIndex) {
                    currentExpertiseIndex = newIndex;
                    renderPresenterDetailContent(presenter, newIndex);
                }
            });
        });
    }

    // Render materials for current expertise
    if (currentExpertise.materials.length === 0) {
        materialsList.innerHTML = `<div class="empty-state" style="padding: 40px; text-align: center; color: var(--text-light);">Belum ada kajian pengetahuan di bidang ini.</div>`;
        return;
    }
    materialsList.innerHTML = '';
    currentExpertise.materials.forEach((material, materialIndex) => {
        const card = document.createElement('article');
        card.className = 'material-detail-card';
        card.style.cursor = 'pointer';

        const formattedDate = formatDate(material.date);

        card.innerHTML = `
            <h3 class="material-title-detail">${material.title}</h3>
            <div class="material-meta-detail">
                <span class="material-category">${material.category}</span>
            </div>
            ${currentUser ? `
                <div class="material-card-actions">
                    <button class="btn-edit-material" data-material-index="${materialIndex}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                        Edit
                    </button>
                    <button class="btn-delete-material" data-material-index="${materialIndex}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                        Hapus
                    </button>
                </div>
            ` : ''}
        `;

        // Click card to view material detail
        card.addEventListener('click', () => {
            showMaterialDetail(presenter, expertiseIndex, material);
        });

        materialsList.appendChild(card);
    });

    // Add event listeners for edit/delete buttons (admin only)
    if (currentUser) {
        document.querySelectorAll('.btn-edit-material').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card click
                const materialIndex = parseInt(btn.dataset.materialIndex);
                const material = currentExpertise.materials[materialIndex];
                openMaterialModal('edit', presenter, expertiseIndex, material, materialIndex);
            });
        });

        document.querySelectorAll('.btn-delete-material').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card click
                const materialIndex = parseInt(btn.dataset.materialIndex);
                const material = currentExpertise.materials[materialIndex];
                deleteMaterial(presenter, expertiseIndex, materialIndex, material.title);
            });
        });
    }

}

// ==========================================
// SHOW MATERIAL DETAIL
// ==========================================
function showMaterialDetail(presenter, expertiseIndex, material) {
    const materialDetailContent = document.getElementById('materialDetailContent');
    const expertise = presenter.expertises[expertiseIndex];
    const formattedDate = formatDate(material.date);

    // Find current material index and get prev/next
    const materials = expertise.materials;
    const currentIndex = materials.findIndex(m => m.id === material.id);
    const hasPrev = currentIndex < materials.length - 1;
    const hasNext = currentIndex > 0;
    const prevMaterial = hasPrev ? materials[currentIndex + 1] : null;
    const nextMaterial = hasNext ? materials[currentIndex - 1] : null;

    materialDetailContent.innerHTML = `
        <div class="material-detail-header">
            <h1 class="material-detail-title">${material.title}</h1>
            <div class="material-detail-meta">
                <span class="material-detail-date">${formattedDate}</span>
                <span class="material-detail-category">${material.category}</span>
            </div>
        </div>
        
        <div class="material-detail-content">
            <p>${material.content || 'Konten materi belum tersedia.'}</p>
        </div>
        
        <div class="material-navigation">
            ${hasPrev ? `
                <button class="material-nav-btn prev" data-material-id="${prevMaterial.id}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    <span>Pengetahuan Sebelumnya</span>
                </button>
            ` : '<div></div>'}
            
            ${hasNext ? `
                <button class="material-nav-btn next" data-material-id="${nextMaterial.id}">
                    <span>Pengetahuan Selanjutnya</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            ` : '<div></div>'}
        </div>
    `;

    // Navigate to material detail page
    navigateToPage('pageMaterialDetail');

    // Hide header and bottom nav for immersive reading
    document.body.classList.add('viewing-material');

    // Setup navigation buttons
    document.querySelectorAll('.material-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const materialId = parseInt(btn.dataset.materialId);
            const targetMaterial = materials.find(m => m.id === materialId);
            if (targetMaterial) {
                showMaterialDetail(presenter, expertiseIndex, targetMaterial);
            }
        });
    });

    // Setup back button
    const btnBackFromMaterial = document.getElementById('btnBackFromMaterial');
    if (btnBackFromMaterial) {
        btnBackFromMaterial.onclick = () => {
            // Show header and bottom nav again
            document.body.classList.remove('viewing-material');
            navigateToPage('pagePresenterDetail');
        };
    }
}


// ==========================================
// HELPER: FORMAT DATE
// ==========================================
function formatDate(dateString) {
    const date = new Date(dateString);
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// ==========================================
// RENDER SCHEDULE
// ==========================================
// Current filter for schedule
let currentScheduleFilter = 'Semua';

function renderSchedule() {
    scheduleList.innerHTML = '';

    // Add Filter Tabs
    const filterContainer = document.createElement('div');
    filterContainer.className = 'schedule-tabs';
    const filters = ['Semua', 'Presentasi', 'Jalsah Mudzakarah', 'Mudzakarah Santri'];

    filters.forEach(filter => {
        const btn = document.createElement('button');
        btn.className = `schedule-tab-btn ${currentScheduleFilter === filter ? 'active' : ''}`;
        btn.textContent = filter;
        btn.onclick = () => {
            currentScheduleFilter = filter;
            renderSchedule();
        };
        filterContainer.appendChild(btn);
    });

    scheduleList.appendChild(filterContainer);

    const filteredData = currentScheduleFilter === 'Semua'
        ? scheduleData
        : scheduleData.filter(item => item.type === currentScheduleFilter);

    if (filteredData.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `<p style="text-align: center; padding: 40px; color: var(--text-light);">Belum ada jadwal untuk kategori ini.</p>`;
        scheduleList.appendChild(emptyState);
        return;
    }

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'schedule-cards-grid';

    filteredData.forEach((item, index) => {
        const card = document.createElement('article');
        const isJalsah = item.type === 'Jalsah Mudzakarah';
        card.className = `schedule-item ${isJalsah ? 'type-jalsah' : ''}`;
        card.setAttribute('data-status', item.status);

        // Calculate if it's the first or last in its group for disabling reorder buttons
        const isFirst = index === 0;
        const isLast = index === filteredData.length - 1;

        card.innerHTML = `
            <div class="schedule-header">
                <div class="schedule-date-time">
                    <span class="s-date">${item.date}</span>
                    ${item.time ? `<span class="s-time">Pukul ${item.time}</span>` : ''}
                </div>
                <span class="schedule-status ${item.status}">
                    ${item.status === 'upcoming' ? 'Akan Datang' : 'Selesai'}
                </span>
            </div>
            <h3 class="schedule-title">${item.title}</h3>
            
            <div class="schedule-info-group">
                <div class="schedule-meta">
                    <span class="schedule-presenter">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        ${item.presenter}
                    </span>
                    <span class="schedule-type">${item.type}</span>
                </div>
                
                ${item.location ? `
                <div class="schedule-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${item.location}
                </div>` : ''}
            </div>
            <div class="schedule-footer">
                <div style="flex: 1;"></div>
                ${currentUser?.role === 'admin' ? `
                <div class="admin-controls-group admin-only-btn">
                    <div class="schedule-reorder">
                        <button class="btn-reorder btn-move-up" data-id="${item.id}" ${isFirst ? 'disabled' : ''} title="Geser Naik">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                        </button>
                        <button class="btn-reorder btn-move-down" data-id="${item.id}" ${isLast ? 'disabled' : ''} title="Geser Turun">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div class="schedule-actions">
                    <button class="btn-action-sm btn-edit-schedule" data-id="${item.id}" title="Edit">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button class="btn-action-sm btn-delete-schedule" data-id="${item.id}" title="Hapus">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
                ` : ''}
            </div>
        `;

        // Add event listeners for admin actions
        if (currentUser?.role === 'admin') {
            const btnEdit = card.querySelector('.btn-edit-schedule');
            const btnDelete = card.querySelector('.btn-delete-schedule');
            const btnUp = card.querySelector('.btn-move-up');
            const btnDown = card.querySelector('.btn-move-down');

            if (btnEdit) btnEdit.onclick = (e) => {
                e.stopPropagation();
                openScheduleModal('edit', item);
            };

            if (btnDelete) btnDelete.onclick = (e) => {
                e.stopPropagation();
                deleteSchedule(item.id);
            };

            if (btnUp) btnUp.onclick = (e) => {
                e.stopPropagation();
                moveSchedule(item.id, 'up');
            };

            if (btnDown) btnDown.onclick = (e) => {
                e.stopPropagation();
                moveSchedule(item.id, 'down');
            };
        }

        cardsContainer.appendChild(card);
    });

    scheduleList.appendChild(cardsContainer);
}

// ==========================================
// SCHEDULE MANAGEMENT
// ==========================================
function openScheduleModal(mode = 'add', schedule = null) {
    currentScheduleMode = mode;
    const titleEle = document.getElementById('scheduleModalTitle');

    if (mode === 'add') {
        titleEle.textContent = 'Tambah Jadwal Baru';
        scheduleForm.reset();
        document.getElementById('scheduleId').value = '';
        document.getElementById('scheduleLocation').value = '';
        document.getElementById('scheduleOrder').value = scheduleData.length + 1;
    } else {
        titleEle.textContent = 'Edit Jadwal';
        document.getElementById('scheduleId').value = schedule.id;
        document.getElementById('scheduleDate').value = schedule.date;
        document.getElementById('scheduleTime').value = schedule.time || '';
        document.getElementById('scheduleOrder').value = schedule.order || 1;
        document.getElementById('scheduleTitle').value = schedule.title;
        document.getElementById('schedulePresenter').value = schedule.presenter;
        document.getElementById('scheduleType').value = schedule.type;
        document.getElementById('scheduleLocation').value = schedule.location || '';
        document.getElementById('scheduleStatus').value = schedule.status;
    }

    scheduleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeScheduleModal() {
    scheduleModal.classList.remove('active');
    document.body.style.overflow = '';
}

async function saveSchedule(e) {
    if (e) e.preventDefault();

    if (currentUser?.role !== 'admin') {
        alert('❌ Akses ditolak! Hanya Admin yang bisa mengelola jadwal.');
        return;
    }

    try {
        const idVal = document.getElementById('scheduleId').value;
        const dateVal = document.getElementById('scheduleDate').value;
        const timeVal = document.getElementById('scheduleTime').value.trim();
        const orderVal = document.getElementById('scheduleOrder').value; // Get manual order
        const titleVal = document.getElementById('scheduleTitle').value.trim();
        const presenterVal = document.getElementById('schedulePresenter').value.trim();
        const typeVal = document.getElementById('scheduleType').value;
        const locationVal = document.getElementById('scheduleLocation').value.trim();
        const statusVal = document.getElementById('scheduleStatus').value;

        if (!dateVal || !titleVal || !presenterVal) {
            alert('⚠️ Mohon isi semua field yang wajib!');
            return;
        }

        const newSchedule = {
            id: idVal || (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString()),
            date: dateVal,
            time: timeVal,
            order: parseInt(orderVal, 10) || 1, // Store as number
            title: titleVal,
            presenter: presenterVal,
            type: typeVal,
            location: locationVal,
            status: statusVal
        };

        // Save to Supabase Database
        const supabase = window.supabaseClient?.get();
        if (supabase) {
            if (currentScheduleMode === 'add') {
                const { error } = await supabase
                    .from('schedules')
                    .insert([newSchedule]);

                if (error) {
                    console.error('Supabase insert error:', error);
                    alert('⚠️ Data tersimpan di browser, tapi gagal sync ke database: ' + error.message);
                } else {
                    console.log('✅ Schedule saved to database');
                }
            } else {
                const { error } = await supabase
                    .from('schedules')
                    .update(newSchedule)
                    .eq('id', newSchedule.id);

                if (error) {
                    console.error('Supabase update error:', error);
                    alert('⚠️ Data tersimpan di browser, tapi gagal sync ke database: ' + error.message);
                } else {
                    console.log('✅ Schedule updated in database');
                }
            }
        }

        // Update local data
        if (currentScheduleMode === 'add') {
            scheduleData.push(newSchedule);
        } else {
            const index = scheduleData.findIndex(s => Number(s.id) === Number(newSchedule.id));
            if (index !== -1) {
                scheduleData[index] = newSchedule;
            } else {
                // Fallback if index not found
                scheduleData.push(newSchedule);
            }
        }

        // Sort logic: Upcoming first (by Order ASC), then Completed (by Order ASC/Id DESC)
        scheduleData.sort((a, b) => {
            if (a.status === 'upcoming' && b.status === 'completed') return -1;
            if (a.status === 'completed' && b.status === 'upcoming') return 1;

            // Same status group: Sort by manual ORDER first
            const orderA = parseInt(a.order, 10) || 1;
            const orderB = parseInt(b.order, 10) || 1;

            if (orderA !== orderB) {
                return orderA - orderB; // Lower order number is shown first
            }

            // Fallback to date if orders are same (even if text, we try new Date)
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (!isNaN(dateA) && !isNaN(dateB)) {
                return a.status === 'upcoming' ? dateA - dateB : dateB - dateA;
            }

            return 0;
        });

        // Persistent save to localStorage (backup)
        localStorage.setItem('nongkrong_sehat_schedule', JSON.stringify(scheduleData));

        // Refresh UI
        renderSchedule();
        closeScheduleModal();

        alert(currentScheduleMode === 'add' ? '✅ Jadwal berhasil ditambahkan & tersimpan ke database!' : '✅ Jadwal berhasil diperbarui & tersimpan ke database!');
    } catch (err) {
        console.error('Save Schedule Error:', err);
        alert('❌ Terjadi kesalahan saat menyimpan jadwal. Mohon coba lagi.');
    }
}

function moveSchedule(id, direction) {
    const index = scheduleData.findIndex(s => Number(s.id) === Number(id));
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= scheduleData.length) return;

    // Swap items
    const temp = scheduleData[index];
    scheduleData[index] = scheduleData[newIndex];
    scheduleData[newIndex] = temp;

    // Update orders based on new array positions to persist the manual reorder
    scheduleData.forEach((item, i) => {
        item.order = i + 1;
    });

    localStorage.setItem('nongkrong_sehat_schedule', JSON.stringify(scheduleData));
    renderSchedule();
}

async function deleteSchedule(id) {
    if (currentUser?.role !== 'admin') {
        alert('❌ Akses ditolak! Hanya Admin yang bisa menghapus jadwal.');
        return;
    }

    if (confirm('Apakah Anda yakin ingin menghapus jadwal ini?')) {
        // Delete from Supabase Database
        const supabase = window.supabaseClient?.get();
        if (supabase) {
            const { error } = await supabase
                .from('schedules')
                .delete()
                .eq('id', id);

            if (error) {
                console.error('Supabase delete error:', error);
                alert('⚠️ Data terhapus dari browser, tapi gagal hapus dari database: ' + error.message);
            } else {
                console.log('✅ Schedule deleted from database');
            }
        }

        // Delete from local data
        scheduleData = scheduleData.filter(s => s.id !== id);
        localStorage.setItem('nongkrong_sehat_schedule', JSON.stringify(scheduleData));
        renderSchedule();
        alert('✅ Jadwal berhasil dihapus dari database!');
    }
}

// ==========================================
// MODAL CONTROLS
// ==========================================
function openModal() {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus on first input for accessibility
    setTimeout(() => {
        document.getElementById('username').focus();
    }, 100);
}

function closeModal() {
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
    loginForm.reset();
}

// Login button
// LOGIN SYSTEM
// ==========================================

// Multi-user credentials with roles
const USERS_CREDENTIALS = [
    {
        username: 'Herzi',
        password: 'HeeZee39',
        role: 'admin' // Full access
    },
    {
        username: 'fikri',
        password: 'fikri123',
        role: 'admin' // Also full access for testing
    },
    {
        username: 'Admin2',
        password: 'wkwk',
        role: 'admin'
    },
    {
        username: 'pengelola',
        password: 'materi123',
        role: 'pengelola' // Material management only
    }
];

// Current user state
let currentUser = null;

// Check if user is logged in (from localStorage)
function checkLoginState() {
    const savedUser = localStorage.getItem('nongkrong_sehat_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
    }
}

// Update UI for logged in user
function updateUIForLoggedInUser() {
    if (currentUser) {
        const isAdmin = currentUser.role === 'admin';
        const isPengelola = currentUser.role === 'pengelola';

        // Add body classes for role-based CSS
        document.body.classList.add('user-logged-in');
        if (isAdmin) document.body.classList.add('user-is-admin');
        if (isPengelola) document.body.classList.add('user-is-pengelola');

        // 1. Re-render current page lists FIRST to ensure DOM elements exist
        renderPresentersList();
        renderSchedule();
        if (isAdmin) renderExpertiseSettings();

        // 2. Change login button icon
        if (btnLogin) {
            btnLogin.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            `;
            btnLogin.title = `Logged in as ${currentUser.username} (${currentUser.role})`;
        }

        // 3. Show admin/pengelola navigation
        const adminNavItems = document.querySelectorAll('.nav-admin-only');
        adminNavItems.forEach(item => {
            if (item.getAttribute('href') === '#pageSettings') {
                item.style.display = isAdmin ? 'flex' : 'none';
            } else {
                item.style.display = 'flex';
            }
        });

        // 4. Show admin-only buttons (now that they exist in DOM)
        const adminButtons = document.querySelectorAll('.admin-only-btn');
        adminButtons.forEach(btn => {
            // Default visibility
            btn.style.display = 'flex';

            // Specifically restrict schedule actions for pengelola
            if (btn.classList.contains('schedule-actions') || btn.id === 'fabAddSchedule') {
                btn.style.display = isAdmin ? 'flex' : 'none';
            }
        });

        // 5. Show schedule FAB specifically if it exists and user is admin
        const fabAddSchedule = document.getElementById('fabAddSchedule');
        if (fabAddSchedule) {
            fabAddSchedule.style.display = isAdmin ? 'flex' : 'none';
        }
    }
}

// ==========================================
// EXPERTISE MANAGEMENT (Admin Only)
// ==========================================
function renderExpertiseSettings() {
    const expertiseList = document.getElementById('expertiseList');
    if (!expertiseList) return;

    expertiseList.innerHTML = '';

    presentersData.forEach(presenter => {
        const expertiseItem = document.createElement('div');
        expertiseItem.className = 'expertise-item';

        expertiseItem.innerHTML = `
            <div class="expertise-item-header">
                <div class="expertise-avatar" style="background: ${presenter.avatarColor};">${getInitial(presenter.name)}</div>
                <h4 class="expertise-name">${presenter.name}</h4>
            </div>
            <div class="expertise-input-group">
                <label for="role-${presenter.id}" class="expertise-label">Bidang Keahlian:</label>
                <input 
                    type="text" 
                    id="role-${presenter.id}" 
                    class="expertise-input" 
                    value="${getPrimaryRole(presenter)}"
                    data-presenter-id="${presenter.id}"
                    placeholder="Masukkan bidang keahlian..."
                />
            </div>
            <div class="expertise-input-group">
                <label for="color-${presenter.id}" class="expertise-label">Warna Icon:</label>
                <div class="color-picker-group">
                    <input 
                        type="color" 
                        id="color-${presenter.id}" 
                        class="expertise-color-input" 
                        value="${presenter.avatarColor}"
                        data-presenter-id="${presenter.id}"
                    />
                    <input 
                        type="text" 
                        class="expertise-color-text" 
                        value="${presenter.avatarColor}"
                        readonly
                    />
                </div>
            </div>
        `;

        expertiseList.appendChild(expertiseItem);
    });
}

// Save expertise changes
const btnSaveExpertise = document.getElementById('btnSaveExpertise');
if (btnSaveExpertise) {
    btnSaveExpertise.addEventListener('click', () => {
        if (currentUser?.role !== 'admin') {
            alert('❌ Akses ditolak! Hanya Admin yang bisa mengubah bidang keahlian.');
            return;
        }

        // Get all inputs
        const roleInputs = document.querySelectorAll('.expertise-input');
        const colorInputs = document.querySelectorAll('.expertise-color-input');
        let hasChanges = false;

        roleInputs.forEach(input => {
            const presenterId = input.dataset.presenterId;
            const newRole = input.value.trim();

            // Find presenter and update role (primary expertise)
            const presenter = presentersData.find(p => p.id === presenterId);
            if (presenter) {
                const currentRole = getPrimaryRole(presenter);
                if (currentRole !== newRole) {
                    if (presenter.expertises && presenter.expertises.length > 0) {
                        presenter.expertises[0].name = newRole;
                    } else {
                        presenter.expertises = [{ name: newRole, materials: [] }];
                    }
                    hasChanges = true;
                }
            }
        });

        colorInputs.forEach(input => {
            const presenterId = input.dataset.presenterId;
            const newColor = input.value;

            // Find presenter and update color
            const presenter = presentersData.find(p => p.id === presenterId);
            if (presenter && presenter.avatarColor !== newColor) {
                presenter.avatarColor = newColor;
                hasChanges = true;
            }
        });

        if (hasChanges) {
            // Save to localStorage
            localStorage.setItem('nongkrong_sehat_presenters', JSON.stringify(presentersData));

            // Show success message
            alert('✅ Perubahan berhasil disimpan!\n\nBidang keahlian telah diperbarui.');

            // Re-render presenter list
            renderPresentersList();
        } else {
            alert('ℹ️ Tidak ada perubahan yang perlu disimpan.');
        }
    });
}

// Logout function
function logout() {
    // Remove user from state and storage
    currentUser = null;
    localStorage.removeItem('nongkrong_sehat_user');

    // Remove body classes
    document.body.classList.remove('user-logged-in', 'user-is-admin', 'user-is-pengelola', 'edit-mode-active');
    location.reload();
}

// Login Modal
if (btnLogin) {
    btnLogin.addEventListener('click', () => {
        if (currentUser) {
            // Already logged in, show logout option
            const confirmLogout = confirm(`Anda login sebagai ${currentUser.username}.Logout ? `);
            if (confirmLogout) {
                logout();
            }
        } else {
            // Show login modal
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Add overflow hidden
            setTimeout(() => {
                document.getElementById('username').focus();
            }, 100);
        }
    });
}

if (btnCloseModal) {
    btnCloseModal.addEventListener('click', () => {
        loginModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore overflow
        loginForm.reset(); // Reset form
    });
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', () => {
        loginModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore overflow
        loginForm.reset(); // Reset form
    });
}

// Escape key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal.classList.contains('active')) {
        loginModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore overflow
        loginForm.reset(); // Reset form
    }
});

// Login Form Submit
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check credentials
        const matchedUser = USERS_CREDENTIALS.find(u => u.username === username && u.password === password);

        if (matchedUser) {
            // Successful login
            currentUser = {
                username: matchedUser.username,
                role: matchedUser.role,
                loginTime: new Date().toISOString()
            };

            // Save to localStorage
            localStorage.setItem('nongkrong_sehat_user', JSON.stringify(currentUser));

            // Close modal
            loginModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore overflow

            // Show success message
            const roleName = matchedUser.role === 'admin' ? 'Administrator' : 'Pengelola Pengetahuan';
            alert(`✅ Login berhasil!\n\nSelamat datang, ${username}!\nAnda masuk sebagai ${roleName}.`);

            // Update UI
            updateUIForLoggedInUser();

            // Reset form
            loginForm.reset();
        } else {
            // Failed login
            alert('❌ Login gagal!\n\nUsername atau password salah.\nSilakan coba lagi.');
        }
    });
}

// ==========================================
// PULL TO REFRESH (Optional Enhancement)
// ==========================================
let touchStartY = 0;
let touchEndY = 0;
let isPulling = false;

document.addEventListener('touchstart', (e) => {
    if (window.scrollY === 0) {
        touchStartY = e.touches[0].clientY;
    }
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    if (window.scrollY === 0) {
        touchEndY = e.touches[0].clientY;
        const pullDistance = touchEndY - touchStartY;

        if (pullDistance > 100 && !isPulling) {
            isPulling = true;
            // Visual feedback could be added here
        }
    }
}, { passive: true });

document.addEventListener('touchend', () => {
    if (isPulling) {
        // Refresh data
        console.log('Pull to refresh triggered');
        renderMaterials();
        renderSchedule();
        isPulling = false;
    }
    touchStartY = 0;
    touchEndY = 0;
}, { passive: true });

// ==========================================
// SMOOTH SCROLL ENHANCEMENT
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// PERFORMANCE: Intersection Observer for Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for fade-in animation
function observeCards() {
    document.querySelectorAll('.material-card, .schedule-item, .about-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        fadeInObserver.observe(card);
    });
}

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================
// Skip to main content (for keyboard navigation)
const skipLink = document.createElement('a');
skipLink.href = '#mainContent';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
position: fixed;
top: -100px;
left: 20px;
z - index: 10000;
padding: 12px 16px;
background: var(--color - primary);
color: white;
border - radius: 8px;
text - decoration: none;
transition: top 0.3s;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '20px';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-100px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Announce page changes for screen readers
function announcePageChange(pageName) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Navigated to ${pageName} page`;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
}

// Add screen reader only class to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .sr - only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white - space: nowrap;
    border: 0;
}
`;
document.head.appendChild(style);

// ==========================================
// INITIALIZATION
// ==========================================
function init() {
    console.log('📚 Khazanatul \'Ilm initialized');

    // Load saved data
    loadPresentersData();

    // Check login state
    checkLoginState();

    // Render initial data
    renderPresentersList();
    renderSchedule();

    // Setup material modal listeners
    const materialModal = document.getElementById('materialModal');
    const materialForm = document.getElementById('materialForm');
    const btnCloseMaterialModal = document.getElementById('btnCloseMaterialModal');
    const btnCancelMaterial = document.getElementById('btnCancelMaterial');

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
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (materialModal && materialModal.classList.contains('active')) closeMaterialModal();
            if (scheduleModal && scheduleModal.classList.contains('active')) closeScheduleModal();
        }
    });

    // Schedule management listeners
    if (fabAddSchedule) {
        fabAddSchedule.addEventListener('click', () => openScheduleModal('add'));
    }
    if (btnCloseScheduleModal) {
        btnCloseScheduleModal.addEventListener('click', closeScheduleModal);
    }
    if (btnCancelSchedule) {
        btnCancelSchedule.addEventListener('click', closeScheduleModal);
    }
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', saveSchedule);
    }
    const scheduleModalOverlay = document.getElementById('scheduleModalOverlay');
    if (scheduleModalOverlay) {
        scheduleModalOverlay.addEventListener('click', closeScheduleModal);
    }

    const scheduleDateInput = document.getElementById('scheduleDate');
    const quickTimeBtns = document.querySelectorAll('.btn-quick-time');
    const scheduleTimeInput = document.getElementById('scheduleTime');

    quickTimeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (scheduleDateInput) {
                scheduleDateInput.value = btn.getAttribute('data-value');
                // Update active state
                quickTimeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });

    // Time Preset Buttons (New Simple Time Selection)
    const timePresetBtns = document.querySelectorAll('.btn-time-preset');
    if (timePresetBtns && scheduleTimeInput) {
        timePresetBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const timeValue = btn.getAttribute('data-time');
                scheduleTimeInput.value = timeValue;

                // Update active state
                timePresetBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // Conditional visibility for Presentasi-only buttons
    const scheduleTypeSelect = document.getElementById('scheduleType');
    const updateQuickSelectors = () => {
        const isPresentasi = scheduleTypeSelect.value === 'Presentasi';
        const presentasiOnlyBtns = document.querySelectorAll('.presentasi-only-time');
        presentasiOnlyBtns.forEach(btn => {
            btn.style.display = isPresentasi ? 'inline-block' : 'none';
        });
    };

    if (scheduleTypeSelect) {
        scheduleTypeSelect.addEventListener('change', updateQuickSelectors);
    }

    // Call it when opening modal too (handled in openScheduleModal but better to ensure here)
    const originalOpenScheduleModal = openScheduleModal;
    openScheduleModal = (mode = 'add', schedule = null) => {
        originalOpenScheduleModal(mode, schedule);
        updateQuickSelectors();

        // Sync active state for quick selector buttons
        const currentVal = document.getElementById('scheduleDate').value;
        document.querySelectorAll('.btn-quick-time').forEach(btn => {
            if (btn.getAttribute('data-value') === currentVal) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // Setup animations
    setTimeout(() => {
        observeCards();
    }, 100);

    // Set initial page
    navigateToPage('pageMateri');

    // Add loaded class for any CSS transitions
    document.body.classList.add('loaded');

    // User View Mode (Admin Preview)
    const userViewToggle = document.getElementById('userViewToggle');
    if (userViewToggle) {
        userViewToggle.addEventListener('change', () => {
            if (userViewToggle.checked) {
                document.body.classList.add('user-is-mode-preview');
                showToast('👀 Mode Pantau Aktif: Tampilan sebagai User');
            } else {
                document.body.classList.remove('user-is-mode-preview');
                showToast('🔧 Mode Admin Aktif: Kontrol ditampilkan');
            }
        });
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ==========================================
// SERVICE WORKER (Optional - for PWA)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker can be registered here for offline functionality
        // navigator.serviceWorker.register('/sw.js');
    });
}
