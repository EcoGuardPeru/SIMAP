// ============================================
// VARIABLES GLOBALES
// ============================================
const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const alertBox = document.getElementById('alert');
const rememberCheckbox = document.getElementById('remember');
const logoutBtn = document.getElementById('logoutBtn');
const userEmailDisplay = document.getElementById('userEmail');

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Mostrar alertas
function showAlert(message, type) {
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    alertBox.style.display = 'block';
    
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 4000);
}

// Validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Cambiar entre login y dashboard
function showDashboard(email) {
    loginSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    userEmailDisplay.textContent = email;
}

function showLogin() {
    dashboardSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    loginForm.reset();
}

// ============================================
// VERIFICAR SESIÓN AL CARGAR LA PÁGINA
// ============================================
window.addEventListener('load', function() {
    const savedEmail = localStorage.getItem('userEmail');
    
    if (savedEmail) {
        // Si hay sesión activa, mostrar dashboard
        showDashboard(savedEmail);
    } else {
        // Si no hay sesión, cargar email recordado si existe
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            emailInput.value = rememberedEmail;
            rememberCheckbox.checked = true;
            passwordInput.focus();
        }
    }
});

// ============================================
// FUNCIONALIDAD DEL LOGIN
// ============================================

// Toggle mostrar/ocultar contraseña
togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Manejar envío del formulario de login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const remember = rememberCheckbox.checked;
    
    // Validaciones
    if (!email || !password) {
        showAlert('Por favor, completa todos los campos', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAlert('Por favor, ingresa un email válido', 'error');
        return;
    }
    
    if (password.length < 6) {
        showAlert('La contraseña debe tener al menos 6 caracteres', 'error');
        return;
    }
    
    // Iniciar sesión exitosa
    showAlert('¡Inicio de sesión exitoso! Redirigiendo...', 'success');
    
    // Guardar email del usuario en localStorage
    localStorage.setItem('userEmail', email);
    
    // Guardar email recordado si está marcado
    if (remember) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }
    
    // Mostrar dashboard después de 1.5 segundos
    setTimeout(() => {
        showDashboard(email);
    }, 1500);
});

// Animación de focus en inputs
const inputs = document.querySelectorAll('.form-input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Enlaces del login
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    showAlert('Funcionalidad de recuperación de contraseña próximamente', 'error');
});

document.querySelector('.register-link a').addEventListener('click', function(e) {
    e.preventDefault();
    showAlert('Funcionalidad de registro próximamente', 'error');
});

// ============================================
// FUNCIONALIDAD DEL DASHBOARD
// ============================================

// Referencias a las secciones
const dashboardHome = document.getElementById('dashboardHome');
const sistemaAlertasSection = document.getElementById('sistemaAlertasSection');
const gestionSection = document.getElementById('gestionSection');
const analisisSection = document.getElementById('analisisSection');
const investigacionSection = document.getElementById('investigacionSection');
const comunidadSection = document.getElementById('comunidadSection');

// Mapeo de data-section a elementos del DOM
const sections = {
    'sistema-alertas': sistemaAlertasSection,
    'gestion': gestionSection,
    'analisis': analisisSection,
    'investigacion': investigacionSection,
    'comunidad': comunidadSection
};

// Función para mostrar una sección específica
function showSection(sectionName) {
    // Ocultar todas las secciones
    dashboardHome.classList.add('hidden');
    
    // Ocultar todas las secciones de contenido
    Object.values(sections).forEach(section => {
        if (section) section.classList.add('hidden');
    });
    
    // Mostrar la sección seleccionada
    if (sectionName === 'home') {
        dashboardHome.classList.remove('hidden');
    } else if (sections[sectionName]) {
        sections[sectionName].classList.remove('hidden');
    } else {
        // Si la sección no existe
        console.error(`Sección "${sectionName}" no encontrada`);
        dashboardHome.classList.remove('hidden');
    }
}

// Función para volver al dashboard principal
function backToDashboard() {
    showSection('home');
}

// Cerrar sesión
logoutBtn.addEventListener('click', function() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        localStorage.removeItem('userEmail');
        showLogin();
    }
});

// Click en las tarjetas del dashboard
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        showSection(section);
    });
});

// Botones de volver
const backButtons = document.querySelectorAll('.btn-back');
backButtons.forEach(btn => {
    btn.addEventListener('click', backToDashboard);
});

// ============================================
// CONSOLE LOGS
// ============================================
console.log('🔐 Sistema de login inicializado');
console.log('📧 Acepta cualquier email válido');
console.log('🔑 Acepta cualquier contraseña (mínimo 6 caracteres)');