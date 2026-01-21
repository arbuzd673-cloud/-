/**
 * Диняндкс - Search Engine JavaScript
 * Full-featured search functionality with smart search,
 * autocomplete, voice search, search history, theme toggle, filters, and pagination
 */

// ============================================
// Configuration
// ============================================
const CONFIG = {
    RESULTS_PER_PAGE: 10,
    // Wikipedia API for smart search
    WIKIPEDIA_API: 'https://ru.wikipedia.org/w/api.php',
    // DuckDuckGo API
    DUCKDUCKGO_API: 'https://api.duckduckgo.com/'
};

// ============================================
// Modal Content Data
// ============================================
const modalContent = {
    about: {
        title: 'О Диняндкс',
        content: `
            <h3>🍉 Добро пожаловать в Диняндкс!</h3>
            <p>Диняндкс — это современный поисковый сервис, созданный для удобного и быстрого поиска информации в интернете.</p>
            
            <h3>Наши преимущества</h3>
            <ul>
                <li><strong>Быстрый поиск</strong> — мгновенные результаты из множества источников</li>
                <li><strong>Умные подсказки</strong> — автодополнение запросов на основе популярных поисков</li>
                <li><strong>Голосовой поиск</strong> — просто скажите, что хотите найти</li>
                <li><strong>Тёмная тема</strong> — комфортный поиск в любое время суток</li>
                <li><strong>История поиска</strong> — быстрый доступ к предыдущим запросам</li>
            </ul>
            
            <h3>Версия</h3>
            <p>Диняндкс v2.0 — Арбузно-дынная редакция 🍈</p>
            
            <h3>Контакты</h3>
            <p>По всем вопросам пишите на: <a href="mailto:support@dinyandks.ru">support@dinyandks.ru</a></p>
        `
    },
    advertising: {
        title: 'Реклама в Диняндкс',
        content: `
            <h3>📢 Рекламные возможности</h3>
            <p>Размещайте рекламу в Диняндкс и достигайте миллионов пользователей!</p>
            
            <h3>Форматы рекламы</h3>
            <ul>
                <li><strong>Поисковая реклама</strong> — показ объявлений по релевантным запросам</li>
                <li><strong>Баннерная реклама</strong> — визуальные объявления на страницах результатов</li>
                <li><strong>Нативная реклама</strong> — органичная интеграция в контент</li>
            </ul>
            
            <h3>Преимущества</h3>
            <ul>
                <li>Точный таргетинг по интересам и географии</li>
                <li>Гибкая система оплаты (CPC, CPM)</li>
                <li>Подробная аналитика и отчётность</li>
                <li>Персональный менеджер</li>
            </ul>
            
            <h3>Начать сотрудничество</h3>
            <p>Свяжитесь с нами: <a href="mailto:ads@dinyandks.ru">ads@dinyandks.ru</a></p>
        `
    },
    business: {
        title: 'Диняндкс для бизнеса',
        content: `
            <h3>💼 Решения для бизнеса</h3>
            <p>Диняндкс предлагает комплексные решения для развития вашего бизнеса в интернете.</p>
            
            <h3>Наши услуги</h3>
            <ul>
                <li><strong>Диняндкс.Директ</strong> — контекстная реклама для привлечения клиентов</li>
                <li><strong>Диняндкс.Вебмастер</strong> — инструменты для оптимизации сайта</li>
                <li><strong>Диняндкс.Метрика</strong> — аналитика посещаемости и поведения</li>
                <li><strong>Диняндкс.Карты</strong> — размещение организации на картах</li>
            </ul>
            
            <h3>API для разработчиков</h3>
            <p>Интегрируйте поиск Диняндкс в свои приложения с помощью нашего API.</p>
            
            <h3>Связаться с нами</h3>
            <p>Email: <a href="mailto:business@dinyandks.ru">business@dinyandks.ru</a></p>
        `
    },
    privacy: {
        title: 'Политика конфиденциальности',
        content: `
            <h3>🔒 Защита ваших данных</h3>
            <p>Мы серьёзно относимся к конфиденциальности пользователей и защите персональных данных.</p>
            
            <h3>Какие данные мы собираем</h3>
            <ul>
                <li>Поисковые запросы (для улучшения качества поиска)</li>
                <li>Технические данные (тип браузера, устройство)</li>
                <li>Файлы cookie (для персонализации)</li>
            </ul>
            
            <h3>Как мы используем данные</h3>
            <ul>
                <li>Улучшение качества поисковых результатов</li>
                <li>Персонализация рекомендаций</li>
                <li>Показ релевантной рекламы</li>
                <li>Защита от мошенничества</li>
            </ul>
            
            <h3>Ваши права</h3>
            <ul>
                <li>Доступ к своим данным</li>
                <li>Удаление истории поиска</li>
                <li>Отказ от персонализированной рекламы</li>
                <li>Экспорт данных</li>
            </ul>
            
            <h3>Контакты</h3>
            <p>По вопросам конфиденциальности: <a href="mailto:privacy@dinyandks.ru">privacy@dinyandks.ru</a></p>
        `
    },
    terms: {
        title: 'Условия использования',
        content: `
            <h3>📜 Пользовательское соглашение</h3>
            <p>Используя сервис Диняндкс, вы соглашаетесь с настоящими условиями.</p>
            
            <h3>Общие положения</h3>
            <ul>
                <li>Сервис предоставляется «как есть»</li>
                <li>Пользователь несёт ответственность за свои действия</li>
                <li>Запрещено использование сервиса в незаконных целях</li>
            </ul>
            
            <h3>Интеллектуальная собственность</h3>
            <p>Все права на дизайн, логотип и технологии Диняндкс принадлежат компании.</p>
            
            <h3>Ограничение ответственности</h3>
            <p>Диняндкс не несёт ответственности за:</p>
            <ul>
                <li>Содержание сторонних сайтов</li>
                <li>Точность поисковых результатов</li>
                <li>Перебои в работе сервиса</li>
            </ul>
            
            <h3>Изменения условий</h3>
            <p>Мы оставляем за собой право изменять условия использования. Актуальная версия всегда доступна на этой странице.</p>
        `
    },
    settings: {
        title: 'Настройки',
        content: `
            <div class="settings-option">
                <div class="settings-label">
                    <span>Тёмная тема</span>
                    <span>Включить тёмное оформление интерфейса</span>
                </div>
                <div class="toggle-switch" id="settingsDarkMode"></div>
            </div>
            
            <div class="settings-option">
                <div class="settings-label">
                    <span>Безопасный поиск</span>
                    <span>Фильтровать контент для взрослых</span>
                </div>
                <div class="toggle-switch active" id="settingsSafeSearch"></div>
            </div>
            
            <div class="settings-option">
                <div class="settings-label">
                    <span>История поиска</span>
                    <span>Сохранять историю поисковых запросов</span>
                </div>
                <div class="toggle-switch active" id="settingsHistory"></div>
            </div>
            
            <div class="settings-option">
                <div class="settings-label">
                    <span>Автодополнение</span>
                    <span>Показывать подсказки при вводе</span>
                </div>
                <div class="toggle-switch active" id="settingsAutocomplete"></div>
            </div>
            
            <div class="settings-option">
                <div class="settings-label">
                    <span>Голосовой поиск</span>
                    <span>Разрешить использование микрофона</span>
                </div>
                <div class="toggle-switch active" id="settingsVoice"></div>
            </div>
            
            <h3 style="margin-top: 24px;">Очистка данных</h3>
            <p>
                <button class="btn btn-secondary" id="clearAllHistory" style="margin-top: 8px;">
                    Очистить историю поиска
                </button>
            </p>
        `
    }
};

// ============================================
// Sample Data for Autocomplete
// ============================================

// Russian autocomplete suggestions
const autocompleteSuggestions = [
    'погода москва',
    'погода санкт-петербург',
    'погода сегодня',
    'новости россии',
    'новости мира',
    'курс доллара',
    'курс евро',
    'курс валют',
    'как приготовить борщ',
    'как приготовить пельмени',
    'рецепты русских блюд',
    'фильмы онлайн',
    'сериалы онлайн',
    'музыка онлайн',
    'карта россии',
    'карта москвы',
    'расписание поездов',
    'расписание автобусов',
    'авиабилеты',
    'гостиницы москва',
    'рестораны рядом',
    'аптеки рядом',
    'банкоматы рядом',
    'перевод с английского',
    'перевод с немецкого',
    'калькулятор онлайн',
    'конвертер валют',
    'история россии',
    'русская литература',
    'изучение английского',
    'python программирование',
    'javascript уроки',
    'как создать сайт',
    'что такое искусственный интеллект',
    'лучшие фильмы 2024',
    'рецепт пиццы',
    'как похудеть',
    'упражнения для дома',
    'новости технологий',
    'криптовалюта курс'
];

// Popular search queries for main page
const popularSearches = [
    'Погода',
    'Новости',
    'Курс валют',
    'Карты',
    'Переводчик',
    'Фильмы',
    'Музыка',
    'Рецепты'
];

// ============================================
// DOM Elements
// ============================================
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const voiceBtn = document.getElementById('voiceBtn');
const autocompleteDropdown = document.getElementById('autocompleteDropdown');
const historySection = document.getElementById('historySection');
const historyList = document.getElementById('historyList');
const suggestionsSection = document.getElementById('suggestionsSection');
const suggestionsList = document.getElementById('suggestionsList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const themeToggle = document.getElementById('themeToggle');
const voiceModal = document.getElementById('voiceModal');
const voiceText = document.getElementById('voiceText');
const voiceCloseBtn = document.getElementById('voiceCloseBtn');
const luckyBtn = document.getElementById('luckyBtn');
const popularTags = document.getElementById('popularTags');

// Results page specific elements
const resultsList = document.getElementById('resultsList');
const resultsInfo = document.getElementById('resultsInfo');
const pagination = document.getElementById('pagination');
const filtersSidebar = document.getElementById('filtersSidebar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const loadingIndicator = document.getElementById('loadingIndicator');

// Info modal elements
const infoModal = document.getElementById('infoModal');
const infoModalTitle = document.getElementById('infoModalTitle');
const infoModalBody = document.getElementById('infoModalBody');
const infoModalClose = document.getElementById('infoModalClose');

// ============================================
// State Management
// ============================================
let searchHistory = JSON.parse(localStorage.getItem('dinyandks_history')) || [];
let selectedSuggestionIndex = -1;
let currentSuggestions = [];
let isListening = false;
let cachedResults = {};
let settings = JSON.parse(localStorage.getItem('dinyandks_settings')) || {
    darkMode: false,
    safeSearch: true,
    history: true,
    autocomplete: true,
    voice: true
};

// ============================================
// Theme Management
// ============================================

/**
 * Initialize theme based on localStorage or system preference
 */
function initTheme() {
    const savedTheme = localStorage.getItem('dinyandks_theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        settings.darkMode = savedTheme === 'dark';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        settings.darkMode = true;
    }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('dinyandks_theme', newTheme);
    settings.darkMode = newTheme === 'dark';
    saveSettings();
}

// ============================================
// Settings Management
// ============================================

function saveSettings() {
    localStorage.setItem('dinyandks_settings', JSON.stringify(settings));
}

function updateSettingsUI() {
    const darkModeToggle = document.getElementById('settingsDarkMode');
    const safeSearchToggle = document.getElementById('settingsSafeSearch');
    const historyToggle = document.getElementById('settingsHistory');
    const autocompleteToggle = document.getElementById('settingsAutocomplete');
    const voiceToggle = document.getElementById('settingsVoice');
    
    if (darkModeToggle) {
        darkModeToggle.classList.toggle('active', settings.darkMode);
    }
    if (safeSearchToggle) {
        safeSearchToggle.classList.toggle('active', settings.safeSearch);
    }
    if (historyToggle) {
        historyToggle.classList.toggle('active', settings.history);
    }
    if (autocompleteToggle) {
        autocompleteToggle.classList.toggle('active', settings.autocomplete);
    }
    if (voiceToggle) {
        voiceToggle.classList.toggle('active', settings.voice);
    }
}

function initSettingsListeners() {
    document.getElementById('settingsDarkMode')?.addEventListener('click', function() {
        this.classList.toggle('active');
        settings.darkMode = this.classList.contains('active');
        document.documentElement.setAttribute('data-theme', settings.darkMode ? 'dark' : 'light');
        localStorage.setItem('dinyandks_theme', settings.darkMode ? 'dark' : 'light');
        saveSettings();
    });
    
    document.getElementById('settingsSafeSearch')?.addEventListener('click', function() {
        this.classList.toggle('active');
        settings.safeSearch = this.classList.contains('active');
        saveSettings();
    });
    
    document.getElementById('settingsHistory')?.addEventListener('click', function() {
        this.classList.toggle('active');
        settings.history = this.classList.contains('active');
        saveSettings();
    });
    
    document.getElementById('settingsAutocomplete')?.addEventListener('click', function() {
        this.classList.toggle('active');
        settings.autocomplete = this.classList.contains('active');
        saveSettings();
    });
    
    document.getElementById('settingsVoice')?.addEventListener('click', function() {
        this.classList.toggle('active');
        settings.voice = this.classList.contains('active');
        saveSettings();
    });
    
    document.getElementById('clearAllHistory')?.addEventListener('click', function() {
        clearHistory();
        alert('История поиска очищена!');
    });
}

// ============================================
// Search History Management
// ============================================

/**
 * Add a search query to history
 * @param {string} query - The search query to add
 */
function addToHistory(query) {
    if (!query.trim() || !settings.history) return;
    
    // Remove duplicate if exists
    searchHistory = searchHistory.filter(item => item.toLowerCase() !== query.toLowerCase());
    
    // Add to beginning
    searchHistory.unshift(query);
    
    // Keep only last 10 searches
    searchHistory = searchHistory.slice(0, 10);
    
    // Save to localStorage
    localStorage.setItem('dinyandks_history', JSON.stringify(searchHistory));
}

/**
 * Clear all search history
 */
function clearHistory() {
    searchHistory = [];
    localStorage.removeItem('dinyandks_history');
    renderHistoryList();
    
    if (searchInput && searchInput.value === '') {
        hideAutocomplete();
    }
}

/**
 * Render the history list in the dropdown
 */
function renderHistoryList() {
    if (!historyList) return;
    
    historyList.innerHTML = '';
    
    if (searchHistory.length === 0) {
        historySection.hidden = true;
        return;
    }
    
    historySection.hidden = false;
    
    searchHistory.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'autocomplete-item';
        li.setAttribute('role', 'option');
        li.setAttribute('data-index', index);
        li.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${escapeHtml(item)}</span>
        `;
        li.addEventListener('click', () => selectSuggestion(item));
        historyList.appendChild(li);
    });
}

// ============================================
// Autocomplete System
// ============================================

/**
 * Filter suggestions based on input (local)
 * @param {string} query - The search query
 * @returns {string[]} Filtered suggestions
 */
function filterSuggestions(query) {
    if (!query.trim() || !settings.autocomplete) return [];
    
    const lowerQuery = query.toLowerCase();
    return autocompleteSuggestions
        .filter(suggestion => suggestion.toLowerCase().includes(lowerQuery))
        .slice(0, 8);
}

/**
 * Render suggestions list in the dropdown
 * @param {string[]} suggestions - Array of suggestions to render
 */
function renderSuggestionsList(suggestions) {
    if (!suggestionsList) return;
    
    suggestionsList.innerHTML = '';
    currentSuggestions = suggestions;
    
    if (suggestions.length === 0) {
        suggestionsSection.hidden = true;
        return;
    }
    
    suggestionsSection.hidden = false;
    
    suggestions.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'autocomplete-item';
        li.setAttribute('role', 'option');
        li.setAttribute('data-index', index);
        li.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>${highlightMatch(item, searchInput.value)}</span>
        `;
        li.addEventListener('click', () => selectSuggestion(item));
        suggestionsList.appendChild(li);
    });
}

/**
 * Highlight matching text in suggestion
 * @param {string} text - The suggestion text
 * @param {string} query - The search query
 * @returns {string} HTML with highlighted match
 */
function highlightMatch(text, query) {
    if (!query.trim()) return escapeHtml(text);
    
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return escapeHtml(text).replace(regex, '<strong>$1</strong>');
}

/**
 * Show autocomplete dropdown
 */
async function showAutocomplete() {
    if (!autocompleteDropdown || !settings.autocomplete) return;
    
    const query = searchInput.value;
    
    if (query === '') {
        // Show history when input is empty
        renderHistoryList();
        suggestionsSection.hidden = true;
        
        if (searchHistory.length > 0 && settings.history) {
            autocompleteDropdown.hidden = false;
        } else {
            autocompleteDropdown.hidden = true;
        }
    } else {
        // Show filtered suggestions
        const suggestions = filterSuggestions(query);
        historySection.hidden = true;
        renderSuggestionsList(suggestions);
        
        if (suggestions.length > 0) {
            autocompleteDropdown.hidden = false;
        } else {
            autocompleteDropdown.hidden = true;
        }
    }
    
    selectedSuggestionIndex = -1;
    updateSelectedSuggestion();
}

/**
 * Hide autocomplete dropdown
 */
function hideAutocomplete() {
    if (autocompleteDropdown) {
        autocompleteDropdown.hidden = true;
    }
    selectedSuggestionIndex = -1;
}

/**
 * Select a suggestion
 * @param {string} suggestion - The selected suggestion
 */
function selectSuggestion(suggestion) {
    searchInput.value = suggestion;
    hideAutocomplete();
    updateClearButton();
    searchForm.submit();
}

/**
 * Update visual selection in dropdown
 */
function updateSelectedSuggestion() {
    const items = autocompleteDropdown?.querySelectorAll('.autocomplete-item') || [];
    
    items.forEach((item, index) => {
        if (index === selectedSuggestionIndex) {
            item.classList.add('selected');
            item.setAttribute('aria-selected', 'true');
        } else {
            item.classList.remove('selected');
            item.setAttribute('aria-selected', 'false');
        }
    });
}

/**
 * Handle keyboard navigation in autocomplete
 * @param {KeyboardEvent} e - The keyboard event
 */
function handleAutocompleteKeyboard(e) {
    const items = autocompleteDropdown?.querySelectorAll('.autocomplete-item') || [];
    const itemCount = items.length;
    
    if (itemCount === 0 || autocompleteDropdown?.hidden) return;
    
    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            selectedSuggestionIndex = (selectedSuggestionIndex + 1) % itemCount;
            updateSelectedSuggestion();
            break;
            
        case 'ArrowUp':
            e.preventDefault();
            selectedSuggestionIndex = selectedSuggestionIndex <= 0 
                ? itemCount - 1 
                : selectedSuggestionIndex - 1;
            updateSelectedSuggestion();
            break;
            
        case 'Enter':
            if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < itemCount) {
                e.preventDefault();
                const selectedItem = items[selectedSuggestionIndex];
                const text = selectedItem.querySelector('span').textContent;
                selectSuggestion(text);
            }
            break;
            
        case 'Escape':
            hideAutocomplete();
            break;
    }
}

// ============================================
// Voice Search
// ============================================

/**
 * Initialize voice search
 */
function initVoiceSearch() {
    if (!voiceBtn || !settings.voice) return;
    
    // Check if Web Speech API is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        voiceBtn.title = 'Голосовой поиск не поддерживается вашим браузером';
        voiceBtn.style.opacity = '0.5';
        voiceBtn.style.cursor = 'not-allowed';
        return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = () => {
        isListening = true;
        voiceBtn.classList.add('listening');
        showVoiceModal();
    };
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        updateClearButton();
        hideVoiceModal();
        
        // Auto-submit after recognition
        setTimeout(() => {
            searchForm.submit();
        }, 500);
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        voiceText.textContent = 'Ошибка распознавания. Попробуйте ещё раз.';
        
        setTimeout(() => {
            hideVoiceModal();
        }, 2000);
    };
    
    recognition.onend = () => {
        isListening = false;
        voiceBtn.classList.remove('listening');
    };
    
    voiceBtn.addEventListener('click', () => {
        if (isListening) {
            recognition.stop();
        } else {
            recognition.start();
        }
    });
}

/**
 * Show voice search modal
 */
function showVoiceModal() {
    if (voiceModal) {
        voiceModal.hidden = false;
        voiceText.textContent = 'Слушаю...';
    }
}

/**
 * Hide voice search modal
 */
function hideVoiceModal() {
    if (voiceModal) {
        voiceModal.hidden = true;
    }
    
    if (isListening) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            isListening = false;
            voiceBtn?.classList.remove('listening');
        }
    }
}

// ============================================
// Info Modal (Footer Links)
// ============================================

function showInfoModal(modalType) {
    if (!infoModal || !modalContent[modalType]) return;
    
    const content = modalContent[modalType];
    infoModalTitle.textContent = content.title;
    infoModalBody.innerHTML = content.content;
    infoModal.hidden = false;
    
    // Initialize settings toggles if it's the settings modal
    if (modalType === 'settings') {
        updateSettingsUI();
        initSettingsListeners();
    }
}

function hideInfoModal() {
    if (infoModal) {
        infoModal.hidden = true;
    }
}

function initFooterLinks() {
    document.querySelectorAll('[data-modal]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalType = link.dataset.modal;
            showInfoModal(modalType);
        });
    });
    
    infoModalClose?.addEventListener('click', hideInfoModal);
    
    infoModal?.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            hideInfoModal();
        }
    });
}

// ============================================
// Clear Button
// ============================================

/**
 * Update clear button visibility
 */
function updateClearButton() {
    if (clearBtn) {
        clearBtn.hidden = searchInput.value === '';
    }
}

/**
 * Clear search input
 */
function clearSearch() {
    searchInput.value = '';
    updateClearButton();
    searchInput.focus();
    showAutocomplete();
}

// ============================================
// Popular Searches
// ============================================

/**
 * Render popular search tags on main page
 */
function renderPopularSearches() {
    if (!popularTags) return;
    
    popularTags.innerHTML = '';
    
    popularSearches.forEach(query => {
        const tag = document.createElement('button');
        tag.className = 'popular-tag';
        tag.textContent = query;
        tag.addEventListener('click', () => {
            searchInput.value = query;
            updateClearButton();
            searchForm.submit();
        });
        popularTags.appendChild(tag);
    });
}

// ============================================
// "I'm Feeling Lucky" Button
// ============================================

/**
 * Handle "I'm Feeling Lucky" click
 */
function handleLuckyClick() {
    const query = searchInput.value.trim();
    
    if (query) {
        addToHistory(query);
        // Redirect to DuckDuckGo's "I'm Feeling Lucky" equivalent
        window.location.href = `https://duckduckgo.com/?q=!+${encodeURIComponent(query)}`;
    } else {
        // Random redirect to a popular site
        const randomSites = [
            'https://wikipedia.org',
            'https://youtube.com',
            'https://github.com',
            'https://reddit.com',
            'https://stackoverflow.com'
        ];
        window.location.href = randomSites[Math.floor(Math.random() * randomSites.length)];
    }
}

// ============================================
// Smart Search Implementation
// ============================================

/**
 * Show loading indicator
 */
function showLoading() {
    if (loadingIndicator) {
        loadingIndicator.hidden = false;
    }
    if (resultsList) {
        resultsList.innerHTML = '';
    }
}

/**
 * Hide loading indicator
 */
function hideLoading() {
    if (loadingIndicator) {
        loadingIndicator.hidden = true;
    }
}

/**
 * Fetch Wikipedia search results
 * @param {string} query - Search query
 * @returns {Promise<Object[]>} Wikipedia results
 */
async function fetchWikipediaResults(query) {
    try {
        const params = new URLSearchParams({
            action: 'query',
            list: 'search',
            srsearch: query,
            format: 'json',
            origin: '*',
            srlimit: 5,
            srprop: 'snippet|titlesnippet'
        });
        
        const response = await fetch(`${CONFIG.WIKIPEDIA_API}?${params}`);
        if (response.ok) {
            const data = await response.json();
            if (data.query && data.query.search) {
                return data.query.search.map(item => ({
                    title: item.title,
                    url: `https://ru.wikipedia.org/wiki/${encodeURIComponent(item.title.replace(/ /g, '_'))}`,
                    description: item.snippet.replace(/<[^>]*>/g, ''),
                    source: 'Википедия'
                }));
            }
        }
    } catch (error) {
        console.error('Wikipedia search error:', error);
    }
    return [];
}

/**
 * Fetch DuckDuckGo instant answers
 * @param {string} query - Search query
 * @returns {Promise<Object[]>} DuckDuckGo results
 */
async function fetchDuckDuckGoResults(query) {
    try {
        const response = await fetch(
            `${CONFIG.DUCKDUCKGO_API}?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`,
            { method: 'GET' }
        );
        
        if (response.ok) {
            const data = await response.json();
            const results = [];
            
            // Add Abstract result if available
            if (data.Abstract && data.AbstractURL) {
                results.push({
                    title: data.Heading || query,
                    url: data.AbstractURL,
                    description: data.Abstract,
                    source: data.AbstractSource || 'DuckDuckGo'
                });
            }
            
            // Add Related Topics
            if (data.RelatedTopics && Array.isArray(data.RelatedTopics)) {
                data.RelatedTopics.forEach(topic => {
                    if (topic.FirstURL && topic.Text) {
                        results.push({
                            title: topic.Text.split(' - ')[0] || topic.Text.substring(0, 60),
                            url: topic.FirstURL,
                            description: topic.Text,
                            source: 'DuckDuckGo'
                        });
                    }
                });
            }
            
            return results.slice(0, 5);
        }
    } catch (error) {
        console.error('DuckDuckGo search error:', error);
    }
    return [];
}

/**
 * Generate smart search results from multiple sources
 * @param {string} query - Search query
 * @returns {Object[]} Combined search results
 */
function generateSmartResults(query) {
    const results = [];
    
    // Google Search
    results.push({
        title: `${query} - Поиск в Google`,
        url: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        description: `Искать "${query}" в Google — самой популярной поисковой системе мира.`,
        source: 'Google'
    });
    
    // Yandex Search
    results.push({
        title: `${query} - Яндекс`,
        url: `https://yandex.ru/search/?text=${encodeURIComponent(query)}`,
        description: `Искать "${query}" в Яндексе — российской поисковой системе.`,
        source: 'Яндекс'
    });
    
    // YouTube
    results.push({
        title: `${query} - YouTube`,
        url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
        description: `Смотреть видео по запросу "${query}" на YouTube.`,
        source: 'YouTube'
    });
    
    // Google News
    results.push({
        title: `Новости: ${query}`,
        url: `https://news.google.com/search?q=${encodeURIComponent(query)}&hl=ru`,
        description: `Последние новости по теме "${query}" из Google News.`,
        source: 'Google News'
    });
    
    // Google Images
    results.push({
        title: `${query} - Картинки`,
        url: `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`,
        description: `Найти изображения по запросу "${query}".`,
        source: 'Google Images'
    });
    
    // DuckDuckGo
    results.push({
        title: `${query} - DuckDuckGo`,
        url: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
        description: `Искать "${query}" в DuckDuckGo — поисковой системе, которая не отслеживает вас.`,
        source: 'DuckDuckGo'
    });
    
    // Reddit
    results.push({
        title: `${query} - Reddit`,
        url: `https://www.reddit.com/search/?q=${encodeURIComponent(query)}`,
        description: `Обсуждения и посты о "${query}" на Reddit.`,
        source: 'Reddit'
    });
    
    // Stack Overflow (for programming queries)
    results.push({
        title: `${query} - Stack Overflow`,
        url: `https://stackoverflow.com/search?q=${encodeURIComponent(query)}`,
        description: `Вопросы и ответы по "${query}" на Stack Overflow.`,
        source: 'Stack Overflow'
    });
    
    return results;
}

/**
 * Perform smart search combining multiple sources
 * @param {string} query - Search query
 * @returns {Promise<Object>} Search results
 */
async function performSmartSearch(query) {
    if (!query.trim()) return { results: [], total: 0 };
    
    // Check cache first
    const cacheKey = query.toLowerCase();
    if (cachedResults[cacheKey]) {
        return cachedResults[cacheKey];
    }
    
    // Fetch from multiple sources in parallel
    const [wikiResults, ddgResults] = await Promise.all([
        fetchWikipediaResults(query),
        fetchDuckDuckGoResults(query)
    ]);
    
    // Generate smart results
    const smartResults = generateSmartResults(query);
    
    // Combine all results
    const allResults = [
        ...wikiResults,
        ...ddgResults,
        ...smartResults
    ];
    
    // Remove duplicates by URL
    const uniqueResults = [];
    const seenUrls = new Set();
    
    for (const result of allResults) {
        if (!seenUrls.has(result.url)) {
            seenUrls.add(result.url);
            uniqueResults.push(result);
        }
    }
    
    const searchData = {
        results: uniqueResults,
        total: uniqueResults.length,
        query: query
    };
    
    // Cache results
    cachedResults[cacheKey] = searchData;
    
    return searchData;
}

// ============================================
// Results Page Functions
// ============================================

/**
 * Get URL parameters
 * @returns {URLSearchParams} URL search parameters
 */
function getUrlParams() {
    return new URLSearchParams(window.location.search);
}

/**
 * Update URL parameter
 * @param {string} key - Parameter key
 * @param {string} value - Parameter value
 */
function updateUrlParam(key, value) {
    const params = getUrlParams();
    params.set(key, value);
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
}

/**
 * Render search results
 * @param {Object[]} results - Array of result objects
 * @param {string} query - Search query for highlighting
 */
function renderResults(results, query) {
    if (!resultsList) return;
    
    resultsList.innerHTML = '';
    
    if (results.length === 0) {
        resultsList.innerHTML = `
            <div class="no-results">
                <p>По запросу "<strong>${escapeHtml(query)}</strong>" ничего не найдено.</p>
                <p>Попробуйте изменить поисковый запрос.</p>
            </div>
        `;
        return;
    }
    
    results.forEach(result => {
        const article = document.createElement('article');
        article.className = 'result-item';
        article.setAttribute('role', 'listitem');
        
        // Highlight query in title and description
        const highlightedTitle = highlightMatch(result.title, query);
        const highlightedDescription = highlightMatch(result.description, query);
        
        // Extract domain from URL
        let domain = '';
        try {
            domain = new URL(result.url).hostname;
        } catch (e) {
            domain = result.url;
        }
        
        article.innerHTML = `
            <div class="result-url">
                <span class="result-url-icon">${domain.charAt(0).toUpperCase()}</span>
                <span class="result-domain">${escapeHtml(domain)}</span>
                ${result.source ? `<span class="result-source">· ${escapeHtml(result.source)}</span>` : ''}
            </div>
            <h3 class="result-title">
                <a href="${escapeHtml(result.url)}" target="_blank" rel="noopener noreferrer">${highlightedTitle}</a>
            </h3>
            <p class="result-description">${highlightedDescription}</p>
        `;
        
        resultsList.appendChild(article);
    });
}

/**
 * Render results info (count and time)
 * @param {number} count - Number of results
 * @param {string} query - Search query
 * @param {number} searchTime - Search time in seconds
 */
function renderResultsInfo(count, query, searchTime = null) {
    if (!resultsInfo) return;
    
    const time = searchTime || (Math.random() * 0.5 + 0.1).toFixed(2);
    
    resultsInfo.innerHTML = `
        Найдено примерно ${count.toLocaleString('ru-RU')} результатов (${time} сек.)
    `;
}

/**
 * Render pagination
 * @param {number} totalResults - Total number of results
 * @param {number} currentPage - Current page number
 * @param {number} resultsPerPage - Results per page
 */
function renderPagination(totalResults, currentPage, resultsPerPage = 10) {
    if (!pagination) return;
    
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Previous button
    html += `
        <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}" aria-label="Предыдущая страница">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>
    `;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        html += `<button class="pagination-number" data-page="1">1</button>`;
        if (startPage > 2) {
            html += `<span class="pagination-ellipsis">...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button class="pagination-number ${i === currentPage ? 'active' : ''}" 
                    data-page="${i}" 
                    ${i === currentPage ? 'aria-current="page"' : ''}>
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<span class="pagination-ellipsis">...</span>`;
        }
        html += `<button class="pagination-number" data-page="${totalPages}">${totalPages}</button>`;
    }
    
    // Next button
    html += `
        <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}" aria-label="Следующая страница">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
    `;
    
    pagination.innerHTML = html;
    
    // Add click handlers
    pagination.querySelectorAll('[data-page]').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = parseInt(btn.dataset.page);
            if (page >= 1 && page <= totalPages) {
                updateUrlParam('page', page);
                initResultsPage();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

/**
 * Initialize filters functionality
 */
function initFilters() {
    // Content type filters
    const contentFilters = document.querySelectorAll('.filter-link');
    contentFilters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            contentFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            updateUrlParam('type', filter.dataset.type);
            updateUrlParam('page', '1');
            initResultsPage();
        });
    });
    
    // Time filters
    const timeFilters = document.querySelectorAll('.filter-option');
    timeFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            timeFilters.forEach(f => {
                f.classList.remove('active');
                f.setAttribute('aria-checked', 'false');
            });
            filter.classList.add('active');
            filter.setAttribute('aria-checked', 'true');
            updateUrlParam('time', filter.dataset.time);
            updateUrlParam('page', '1');
            initResultsPage();
        });
    });
}

/**
 * Initialize mobile sidebar
 */
function initMobileSidebar() {
    if (!mobileMenuBtn || !filtersSidebar) return;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    
    const openSidebar = () => {
        filtersSidebar.classList.add('open');
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    };
    
    const closeSidebar = () => {
        filtersSidebar.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
    };
    
    mobileMenuBtn.addEventListener('click', openSidebar);
    closeSidebarBtn?.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
}

/**
 * Initialize results page
 */
async function initResultsPage() {
    const params = getUrlParams();
    const query = params.get('q') || '';
    const type = params.get('type') || 'all';
    const time = params.get('time') || 'any';
    const page = parseInt(params.get('page')) || 1;
    
    // Set search input value
    if (searchInput && query) {
        searchInput.value = query;
        updateClearButton();
        
        // Add to history
        addToHistory(query);
    }
    
    // Update page title
    if (query) {
        document.title = `${query} - Диняндкс`;
    }
    
    // Set active filters
    document.querySelectorAll('.filter-link').forEach(f => {
        f.classList.toggle('active', f.dataset.type === type);
    });
    
    document.querySelectorAll('.filter-option').forEach(f => {
        const isActive = f.dataset.time === time;
        f.classList.toggle('active', isActive);
        f.setAttribute('aria-checked', isActive.toString());
    });
    
    // Show loading
    showLoading();
    
    // Perform smart search
    const startTime = performance.now();
    const searchData = await performSmartSearch(query);
    const endTime = performance.now();
    const searchTime = ((endTime - startTime) / 1000).toFixed(2);
    
    // Hide loading
    hideLoading();
    
    // Paginate results
    const resultsPerPage = CONFIG.RESULTS_PER_PAGE;
    const startIndex = (page - 1) * resultsPerPage;
    const paginatedResults = searchData.results.slice(startIndex, startIndex + resultsPerPage);
    
    // Render results
    renderResults(paginatedResults, query);
    renderResultsInfo(searchData.total, query, searchTime);
    renderPagination(searchData.total, page, resultsPerPage);
}

// ============================================
// Utility Functions
// ============================================

/**
 * Escape HTML special characters
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Escape special regex characters
 * @param {string} string - String to escape
 * @returns {string} Escaped string
 */
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================
// Form Submission Handler
// ============================================

/**
 * Handle form submission
 * @param {Event} e - Submit event
 */
function handleFormSubmit(e) {
    const query = searchInput.value.trim();
    
    if (!query) {
        e.preventDefault();
        return;
    }
    
    addToHistory(query);
}

// ============================================
// Event Listeners & Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Theme toggle
    themeToggle?.addEventListener('click', toggleTheme);
    
    // Search input events
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            updateClearButton();
            showAutocomplete();
        });
        
        searchInput.addEventListener('focus', showAutocomplete);
        
        searchInput.addEventListener('keydown', handleAutocompleteKeyboard);
    }
    
    // Clear button
    clearBtn?.addEventListener('click', clearSearch);
    
    // Clear history button
    clearHistoryBtn?.addEventListener('click', clearHistory);
    
    // Voice search
    initVoiceSearch();
    voiceCloseBtn?.addEventListener('click', hideVoiceModal);
    
    // Lucky button
    luckyBtn?.addEventListener('click', handleLuckyClick);
    
    // Form submission
    searchForm?.addEventListener('submit', handleFormSubmit);
    
    // Click outside to close autocomplete
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideAutocomplete();
        }
    });
    
    // Render popular searches on main page
    renderPopularSearches();
    
    // Initialize footer links (modals)
    initFooterLinks();
    
    // Initialize results page if on results.html
    if (resultsList) {
        initResultsPage();
        initFilters();
        initMobileSidebar();
    }
    
    // Update clear button on page load
    updateClearButton();
    
    // Keyboard shortcut to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideInfoModal();
            hideVoiceModal();
        }
    });
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('dinyandks_theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});
