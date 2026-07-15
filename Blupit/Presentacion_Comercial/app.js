// --- NAVIGATION LOGIC ---
const nav = {
    currentScreen: 'home',
    
    goTo: function(screenId) {
        // Hide current
        const currentEl = document.getElementById(this.currentScreen);
        if(currentEl) currentEl.classList.remove('active');
        
        // Hide cases drawer if navigating away from industries
        if(this.currentScreen === 'industries' && screenId !== 'industries') {
            ui.hideIndustryCases();
        }

        // Show new
        const newEl = document.getElementById(screenId);
        if(newEl) {
            newEl.classList.add('active');
            this.currentScreen = screenId;
        }
    }
};

// --- DATA: INDUSTRIES & CASES ---
const caseData = {
    'ganaderia': [
        { title: 'Sugaberrío', desc: 'De subasta a ecosistema digital', action: "nav.goTo('case-sugaberrio')" }
    ],
    'tecnologia': [
        { title: 'Hisense', desc: 'Te lleva al Mundial', action: "nav.goTo('case-hisense')" }
    ],
    'consumo': [
        { title: 'SC Johnson', desc: 'Campaña regional', action: "nav.goTo('case-scjohnson')" },
        { title: 'Cracks de Nutresa', desc: 'Proyecto en desarrollo', action: "alert('Caso en desarrollo...')" },
        { title: 'PepsiCo', desc: 'Proyecto en desarrollo', action: "alert('Caso en desarrollo...')" }
    ],
    'energia': [
        { title: 'Colgas', desc: 'Del volante al first-party data', action: "nav.goTo('case-colgas')" }
    ],
    'juegos': [
        { title: 'SuperAstro', desc: 'Juegos y predicciones', action: "alert('Caso SuperAstro (Resumen breve...)')" }
    ],
    'farma': [
        { title: 'PharmaCenter', desc: 'En implementación', action: "alert('Proyecto en implementación...')" }
    ]
};

// --- UI LOGIC ---
const ui = {
    showIndustryCases: function(industryId) {
        const drawer = document.getElementById('cases-drawer');
        const content = document.getElementById('drawer-content');
        const title = document.getElementById('drawer-title');
        
        // Get data
        const cases = caseData[industryId];
        if(!cases) return;
        
        // Update Title
        const industryNames = {
            'ganaderia': 'Ganadería y Agro',
            'tecnologia': 'Tecnología de Consumo',
            'consumo': 'Consumo Masivo',
            'energia': 'Energía y Servicios Públicos',
            'juegos': 'Juegos y Entretenimiento',
            'farma': 'Farmacéutica'
        };
        title.innerText = `Casos en ${industryNames[industryId]}`;
        
        // Populate Content
        content.innerHTML = '';
        cases.forEach(c => {
            const card = document.createElement('div');
            card.className = 'drawer-case-card';
            card.setAttribute('onclick', c.action);
            card.innerHTML = `
                <h4>${c.title}</h4>
                <p>${c.desc}</p>
            `;
            content.appendChild(card);
        });
        
        // Show Drawer
        drawer.classList.add('visible');
    },
    
    hideIndustryCases: function() {
        const drawer = document.getElementById('cases-drawer');
        drawer.classList.remove('visible');
    }
};

// --- APP ACTIONS ---
const app = {
    launchDemo: function() {
        // Here we could open a modal with an iframe of the Blupit platform,
        // or redirect to a new tab. For now, an alert simulating the transition.
        alert('Redirigiendo al entorno en vivo de Blupit... \n\n[Aquí se abriría el dashboard real para hacer la demo]');
    }
};

// Initialize
window.onload = () => {
    // Force home screen on load
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('home').classList.add('active');
};
