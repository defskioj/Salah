const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="ru" class="scroll-smooth">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Намаз - Обучающее руководство</title>

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Phosphor Icons -->
    <script src="https://unpkg.com/@phosphor-icons/web@2.1.1/src/index.js"></script>

    <!-- Alpine.js -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />

    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        display: ['Cormorant Garamond', 'serif'],
                        body: ['Nunito', 'sans-serif'],
                    },
                    colors: {
                        gold: { 300: '#f5d98b', 400: '#e8c55a', 500: '#d4a017', 600: '#b8860b' },
                    },
                    backdropBlur: { xs: '2px' },
                    animation: {
                        'fade-up': 'fadeUp 0.6s ease forwards',
                        'modal-in': 'modalIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
                    },
                    keyframes: {
                        fadeUp: {
                            '0%': { opacity: '0', transform: 'translateY(24px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        modalIn: {
                            '0%': { opacity: '0', transform: 'scale(0.88)' },
                            '100%': { opacity: '1', transform: 'scale(1)' },
                        }
                    },
                },
            },
        };
    </script>

    <style>
        * { box-sizing: border-box; }
        body {
            font-family: 'Nunito', sans-serif;
            transition: background-image 0.8s ease, background-color 0.8s ease;
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
        }
        body.theme-light {
            background-image: linear-gradient(to bottom, rgba(135, 180, 255, 0.25) 0%, rgba(255, 200, 100, 0.15) 100%), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80&fm=webp');
        }
        body.theme-dark {
            background-image: linear-gradient(to bottom, rgba(10, 15, 40, 0.65) 0%, rgba(30, 10, 60, 0.55) 100%), url('https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1920&q=80&fm=webp');
        }
        .glass {
            background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
            border: 1px solid rgba(255, 255, 255, 0.22); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
        }
        .dark .glass {
            background: rgba(10, 15, 40, 0.35); border: 1px solid rgba(255, 255, 255, 0.10);
        }
        .tab-btn { position: relative; transition: all 0.35s ease; font-family: 'Nunito', sans-serif; }
        .tab-btn.active::after {
            content: ''; position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%);
            width: 60%; height: 2px; background: linear-gradient(90deg, #d4a017, #f5d98b); border-radius: 2px;
        }
        .prayer-card {
            position: relative; overflow: hidden; cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; border-radius: 1.25rem;
            animation: fadeUp 0.55s ease forwards;
        }
        .prayer-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35); }
        .prayer-card:active { transform: scale(0.97); }
        .card-bg {
            position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.5s ease;
        }
        .prayer-card:hover .card-bg { transform: scale(1.08); }
        .card-overlay {
            position: absolute; inset: 0; background: linear-gradient(160deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.72) 100%);
        }
        .card-content {
            position: relative; z-index: 10; padding: 1.1rem; height: 100%; display: flex; flex-direction: column; justify-content: space-between;
        }
        .rakaat-badge {
            display: inline-block; background: rgba(212, 160, 23, 0.85); color: #fff; font-weight: 700; font-size: 0.7rem; padding: 2px 8px; border-radius: 999px; letter-spacing: 0.04em;
        }
        .modal-overlay {
            position: fixed; inset: 0; background: rgba(0, 0, 0, 0.55); backdrop-filter: blur(8px); z-index: 100;
            display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
        }
        .modal-overlay.open { opacity: 1; pointer-events: all; }
        .modal-box {
            width: 92%; max-width: 560px; max-height: 85vh; overflow-y: auto; border-radius: 1.5rem;
            background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px);
            border: 1px solid rgba(255, 255, 255, 0.28); box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4); padding: 2rem; position: relative;
            animation: modalIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .dark .modal-box { background: rgba(10, 15, 40, 0.55); border: 1px solid rgba(255, 255, 255, 0.12); }
        @media (max-width: 640px) {
            .modal-overlay { align-items: flex-end; }
            .modal-box { width: 100%; max-width: 100%; border-radius: 1.5rem 1.5rem 0 0; max-height: 82vh; }
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(212, 160, 23, 0.5); border-radius: 999px; }
        .hadith { border-left: 3px solid #d4a017; padding-left: 1rem; margin: 0.75rem 0; font-style: italic; opacity: 0.9; font-size: 0.88rem; line-height: 1.65; }
        [x-cloak] { display: none !important; }
        .fade-step { animation: fadeIn 0.4s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .arabic-deco { font-family: 'Cormorant Garamond', serif; letter-spacing: 0.08em; }
    </style>
</head>
<body :class="theme === 'dark' ? 'dark theme-dark' : 'theme-light'" x-data="salahApp()" x-init="initApp()" class="text-slate-800 dark:text-slate-100 overflow-x-hidden transition-all duration-500" id="body">

    <header class="sticky top-0 z-50 glass border-b border-white/20 py-3 px-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
            <span class="text-2xl">☪️</span>
            <div>
                <p class="font-display text-lg font-semibold text-white leading-none drop-shadow">Намаз</p>
                <p class="text-[10px] text-gold-300 tracking-widest uppercase">Путь к Свету</p>
            </div>
        </div>
        <button @click="toggleTheme()" class="glass flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300">
            <i class="ph" :class="theme === 'dark' ? 'ph-moon' : 'ph-sun'" class="text-gold-300 text-base"></i>
            <span class="text-xs" x-text="theme === 'dark' ? 'Ночь' : 'День'"></span>
        </button>
    </header>

    <section class="text-center py-10 px-4 relative z-10">
        <p class="arabic-deco text-3xl text-gold-300 mb-1 drop-shadow-lg">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
        <h1 class="font-display text-4xl md:text-5xl font-bold text-white drop-shadow-xl mt-2 mb-1">Намаз</h1>
        <p class="text-white/75 text-sm md:text-base max-w-lg mx-auto">Полное руководство по ежедневным молитвам - Фард, Ваджиб и Нафиль</p>
    </section>

    <div class="sticky top-[60px] z-40 glass mx-4 md:mx-auto md:max-w-2xl rounded-2xl mb-6 px-2 py-2 flex justify-around">
        <button @click="activeTab = 'fard'" :class="activeTab === 'fard' ? 'active text-white' : 'text-white/70'" class="tab-btn flex-1 py-2 font-semibold text-sm rounded-xl flex items-center justify-center">
            <i class="ph ph-star mr-1 text-gold-300" x-show="activeTab === 'fard'"></i>Фард
        </button>
        <button @click="activeTab = 'wajib'" :class="activeTab === 'wajib' ? 'active text-white' : 'text-white/70'" class="tab-btn flex-1 py-2 font-semibold text-sm rounded-xl flex items-center justify-center">
            <i class="ph ph-moon mr-1 text-gold-300" x-show="activeTab === 'wajib'"></i>Ваджиб
        </button>
        <button @click="activeTab = 'nafl'" :class="activeTab === 'nafl' ? 'active text-white' : 'text-white/70'" class="tab-btn flex-1 py-2 font-semibold text-sm rounded-xl flex items-center justify-center">
            <i class="ph ph-sparkle mr-1 text-gold-300" x-show="activeTab === 'nafl'"></i>Нафиль
        </button>
    </div>

    <main class="max-w-5xl mx-auto px-4 pb-20 relative z-10">
        <!-- Сетка карточек -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <template x-for="prayer in filteredPrayers" :key="prayer.id">
                <div class="prayer-card h-52 sm:h-60" @click="openInfo(prayer.id)">
                    <div class="card-bg" :style="\`background-image: url('\${prayer.bg}')\`"></div>
                    <div class="card-overlay"></div>
                    <div class="card-content">
                        <div>
                            <span class="rakaat-badge" x-text="prayer.category === 'fard' ? 'Фард' : (prayer.category === 'wajib' ? 'Ваджиб' : 'Нафиль')" 
                                  :style="prayer.category === 'nafl' ? 'background:rgba(20,140,80,0.85);' : (prayer.category === 'wajib' ? 'background:rgba(130,80,220,0.8);' : '')">
                            </span>
                        </div>
                        <div>
                            <h3 class="font-display text-lg font-bold text-white leading-tight mb-0.5" x-text="prayer.name"></h3>
                            <p class="text-gold-300 text-[11px] mb-1.5" x-text="prayer.sub"></p>
                            <div class="flex flex-wrap gap-1">
                                <template x-for="b in prayer.badges" :key="b.t">
                                    <span class="text-[10px] text-white px-2 py-0.5 rounded-full" :class="b.c === 'fard' ? 'bg-gold-500/70' : 'bg-white/15'" x-text="b.t"></span>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </main>

    <!-- Modal Info -->
    <div class="modal-overlay" :class="isModalOpen ? 'open' : ''" @click.self="closeInfo()">
        <div class="modal-box" x-show="isModalOpen" x-transition>
            <button @click="closeInfo()" class="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/20">
                <i class="ph ph-x text-xl"></i>
            </button>
            <template x-if="selectedPrayer">
                <div>
                    <h2 class="font-display text-3xl font-bold text-gold-300 mb-1" x-text="\`\${selectedPrayer.name} Намаз\`"></h2>
                    <p class="text-sm dark:text-white/70 text-slate-600 mb-6" x-text="selectedPrayer.sub"></p>
                    
                    <div class="space-y-4 text-sm dark:text-white text-slate-800">
                        <div class="flex items-start gap-3">
                            <div class="mt-0.5 text-gold-400"><i class="ph ph-clock text-xl"></i></div>
                            <div>
                                <span class="block font-bold mb-0.5 text-gold-300">Время:</span>
                                <span class="opacity-90" x-text="selectedPrayer.time"></span>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <div class="mt-0.5 text-gold-400"><i class="ph ph-list-numbers text-xl"></i></div>
                            <div>
                                <span class="block font-bold mb-0.5 text-gold-300">Ракааты:</span>
                                <span class="opacity-90" x-text="selectedPrayer.rakaat"></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                        <p class="hadith" x-text="selectedPrayer.hadith"></p>
                    </div>

                    <div class="mt-8">
                        <button @click="startTraining()" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-white font-bold text-base shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                            <i class="ph ph-play-circle text-xl"></i> Начать обучение
                        </button>
                    </div>
                </div>
            </template>
        </div>
    </div>

    <!-- Modal Training -->
    <div class="modal-overlay" :class="isTrainingModalOpen ? 'open' : ''" @click.self="closeTraining()">
        <div class="modal-box" x-show="isTrainingModalOpen" x-transition>
            <button @click="closeTraining()" class="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/20">
                <i class="ph ph-x text-xl"></i>
            </button>
            <template x-if="currentStepData">
                <div>
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="font-display text-2xl font-bold text-gold-300" x-text="\`\${selectedPrayer.name}\`"></h2>
                        <div class="text-xs font-bold text-white bg-gold-500/80 px-3 py-1 rounded-full shadow-sm">
                            Шаг <span x-text="trainingCurrentStep + 1"></span> из <span x-text="selectedPrayer.steps.length"></span>
                        </div>
                    </div>
                    
                    <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-6">
                        <div class="bg-gold-400 h-full transition-all duration-300" :style="\`width: \${((trainingCurrentStep + 1) / selectedPrayer.steps.length) * 100}%\`"></div>
                    </div>

                    <div class="fade-step" :key="trainingCurrentStep">
                        <div class="text-center mb-6">
                            <span class="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3 text-gold-300 bg-gold-500/10 border border-gold-500/20" x-text="\`Ракаат \${currentStepData.rakah || 1}\`"></span>
                            <h2 class="font-display text-2xl font-bold text-gold-300 mb-2" x-text="currentStepData.title"></h2>
                            <p class="text-xs text-green-400 flex items-center justify-center gap-1">
                                <i class="ph ph-microphone text-base"></i>
                                <span x-text="currentStepData.voiceMode || ''"></span>
                            </p>
                        </div>
                        
                        <div class="space-y-4 mb-6 relative">
                            <!-- ИКОНКИ ДЕЙСТВИЙ В РЯД -->
                            <template x-if="currentStepData.icon">
                                <div class="flex justify-center items-center gap-4 mb-4">
                                    <img :src="currentStepData.icon" class="w-16 h-16 invert opacity-90 object-contain drop-shadow-md" alt="Позиция">
                                </div>
                            </template>
                            
                            <template x-if="currentStepData.arabic">
                                <div class="p-4 rounded-xl glass text-center">
                                    <p class="font-display text-2xl md:text-3xl font-bold text-white leading-loose tracking-wide" dir="rtl" x-text="currentStepData.arabic"></p>
                                </div>
                            </template>
                            <template x-if="currentStepData.transcription">
                                <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <p class="text-sm md:text-base font-semibold text-gold-300 tracking-wide leading-relaxed" x-text="currentStepData.transcription"></p>
                                </div>
                            </template>
                            <template x-if="currentStepData.translation">
                                <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <p class="text-xs md:text-sm text-slate-300 leading-relaxed italic" x-text="currentStepData.translation"></p>
                                </div>
                            </template>
                            <template x-if="currentStepData.action">
                                <div class="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                    <i class="ph ph-info text-blue-400 text-xl shrink-0"></i>
                                    <p class="text-xs md:text-sm text-blue-100" x-text="currentStepData.action"></p>
                                </div>
                            </template>
                        </div>
                    </div>

                    <div class="flex justify-between items-center gap-4 mt-8 pt-4 border-t border-white/10">
                        <button @click="prevStep()" :disabled="trainingCurrentStep === 0" class="flex-1 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all">Назад</button>
                        
                        <button @click="toggleMic()" class="flex-none p-3 rounded-full border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center relative" :class="trainingMicActive ? 'text-gold-300 bg-white/20' : 'text-white'">
                            <span class="absolute top-0 right-0 w-2.5 h-2.5 rounded-full" :class="trainingMicActive ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]'"></span>
                            <i class="ph ph-microphone text-xl"></i>
                        </button>

                        <button @click="nextStep()" class="flex-1 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-white font-bold text-sm shadow-md transition-all" :class="trainingCurrentStep === selectedPrayer.steps.length - 1 ? '!bg-green-500 hover:!bg-green-400' : ''" x-text="trainingCurrentStep === selectedPrayer.steps.length - 1 ? 'Завершить' : 'Далее'"></button>
                    </div>
                </div>
            </template>
        </div>
    </div>

<script>
const fs = require('fs');
let code = fs.readFileSync('trainingData.js', 'utf-8');

// The code generated will be embedded here.
</script>
`;

let jsCode = fs.readFileSync('trainingData.js', 'utf-8');

let finalHtml = htmlContent.replace('// The code generated will be embedded here.', jsCode + `
        function salahApp() {
            // Apply pose icons
            const poseMap = {
                takbir: "takbir",
                sana: "qiyam",
                taawwuz: "qiyam",
                basmala: "qiyam",
                fatiha: "qiyam",
                surah: "qiyam",
                qunut: "qiyam",
                ruku_up: "qiyam",
                takbir_ruku: "ruku",
                ruku: "ruku",
                takbir_sujud: "sajda",
                sujud1: "sajda",
                sujud2: "sajda",
                takbir_up_sujud: "dua",
                jalsa: "dua",
                takbir_tashahhud: "dua",
                tashahhud: "dua",
                salavat: "dua",
                rabbana: "dua",
                salam_r: "dua",
                salam_l: "dua"
            };

            const icons = {
                takbir: "https://ibb.co.com/bg4zGQdk",
                qiyam: "https://ibb.co.com/gbctpYCc",
                ruku: "https://ibb.co.com/1fwxDS9c",
                sajda: "https://ibb.co.com/BVddjPDK",
                dua: "https://ibb.co.com/PZw0cTWn"
            };

            for(let key in templates) {
                const iconType = poseMap[key] || "dua";
                templates[key].icon = icons[iconType];
            }
            templates['niyat'].icon = icons.dua;
            templates['takbir'].icon = icons.takbir;

            const cardsMeta = {
                subh: { tab: "fard", name: "Фаджр", sub: "Утренний намаз (Ас-Субх)", badges: [{t:"2 сунна",c:"sunnah"},{t:"2 фард",c:"fard"}], time: "От рассвета до восхода солнца.", rakaat: "Состоит из 2 ракаатов сунны и 2 ракаатов фарда.", hadith: "«Два ракаата утреннего намаза лучше, чем весь этот мир и всё, что в нём есть» (Муслим)." },
                zuhr: { tab: "fard", name: "Зухр", sub: "Полуденный намаз", badges: [{t:"4 сунна",c:"sunnah"},{t:"4 фард",c:"fard"},{t:"2 сунна",c:"sunnah"}], time: "После того, как солнце минует зенит.", rakaat: "Включает 4 сунны, 4 фарда и 2 сунны." },
                asr: { tab: "fard", name: "Аср", sub: "Предвечерний намаз", badges: [{t:"4 фард",c:"fard"}], time: "Когда тень предмета становится равной ему самому.", rakaat: "Только 4 ракаата фарда." },
                maghrib: { tab: "fard", name: "Магриб", sub: "Вечерний намаз", badges: [{t:"3 фард",c:"fard"},{t:"2 сунна",c:"sunnah"}], time: "Сразу после захода солнца.", rakaat: "Состоит из 3 ракаатов фарда и 2 сунны." },
                isha: { tab: "fard", name: "Иша", sub: "Ночной намаз", badges: [{t:"4 фард",c:"fard"},{t:"2 сунна",c:"sunnah"}], time: "С наступлением полной темноты.", rakaat: "Состоит из 4 ракаатов фарда и 2 сунны." },
                juma: { tab: "fard", name: "Джума", sub: "Пятничная молитва", badges: [{t:"4 сунна",c:"sunnah"},{t:"2 фард",c:"fard"},{t:"4 сунна",c:"sunnah"}], time: "Во время полуденной молитвы в пятницу.", rakaat: "Читается вместо Зухра." },
                janaza: { tab: "fard", name: "Джаназа", sub: "Погребальная молитва", badges: [{t:"Фард Кифая",c:"fard"}], time: "Над телом покойного.", rakaat: "Состоит из 4 такбиров без поклонов." },
                witr: { tab: "wajib", name: "Витр", sub: "Заключительная молитва", badges: [{t:"3 ваджиб",c:"wajib"}], time: "После Иша и до рассвета.", rakaat: "Состоит из 3 ракаатов." },
                eid: { tab: "wajib", name: "Ид намаз", sub: "Праздничный намаз", badges: [{t:"2 ваджиб",c:"wajib"}], time: "Утром в дни праздника.", rakaat: "2 ракаата с доп. такбирами." },
                duha: { tab: "nafl", name: "Ад-Духа", sub: "Утренняя дополнительная", badges: [{t:"2-8 ракаатов",c:"sunnah"}], time: "Через 20 мин после восхода.", rakaat: "От 2 до 8 ракаатов." },
                tahajjud: { tab: "nafl", name: "Ат-Тахаджуд", sub: "Ночная молитва", badges: [{t:"2-8 ракаатов",c:"sunnah"}], time: "В последнюю треть ночи.", rakaat: "От 2 ракаатов." },
                awwabin: { tab: "nafl", name: "Аввабин", sub: "После Магриба", badges: [{t:"2-6 ракаатов",c:"sunnah"}], time: "Между Магрибом и Иша.", rakaat: "2-6 ракаатов." },
                wudu: { tab: "nafl", name: "Намаз Омовения", sub: "После вуду", badges: [{t:"2 ракаата",c:"sunnah"}], time: "После омовения.", rakaat: "2 ракаата." },
                tahiyat: { tab: "nafl", name: "Тахиятуль Масджид", sub: "Приветствие мечети", badges: [{t:"2 ракаата",c:"sunnah"}], time: "При входе в мечеть.", rakaat: "2 ракаата." }
            };

            const bgImages = {
                subh: "https://i.ibb.co.com/wFMvHkQM/Gemini-Generated-Image-1wk75q1wk75q1wk7.png",
                zuhr: "https://i.ibb.co.com/PzjpR1SK/Gemini-Generated-Image-vlx15pvlx15pvlx1.png",
                asr: "https://i.ibb.co.com/6cQ6xym6/Gemini-Generated-Image-sfv4jnsfv4jnsfv4.png",
                maghrib: "https://i.ibb.co.com/PV73K7y/Gemini-Generated-Image-byynndbyynndbyyn.png",
                isha: "https://i.ibb.co.com/XfKvKzqL/Gemini-Generated-Image-yjj0jayjj0jayjj0.png",
                juma: "https://i.ibb.co.com/YFT0g0qL/Gemini-Generated-Image-9fu3tt9fu3tt9fu3.png",
                janaza: "https://i.ibb.co.com/60rdPDcW/Gemini-Generated-Image-w2ffhfw2ffhfw2ff.png",
                witr: "https://i.ibb.co.com/XrdvxDng/Gemini-Generated-Image-rgpu8orgpu8orgpu.png",
                eid: "https://i.ibb.co.com/XrdvxDng/Gemini-Generated-Image-rgpu8orgpu8orgpu.png",
                duha: "https://i.ibb.co.com/XrdvxDng/Gemini-Generated-Image-rgpu8orgpu8orgpu.png",
                tahajjud: "https://i.ibb.co.com/XrdvxDng/Gemini-Generated-Image-rgpu8orgpu8orgpu.png",
                awwabin: "https://i.ibb.co.com/XrdvxDng/Gemini-Generated-Image-rgpu8orgpu8orgpu.png",
                wudu: "https://i.ibb.co.com/XrdvxDng/Gemini-Generated-Image-rgpu8orgpu8orgpu.png",
                tahiyat: "https://i.ibb.co.com/XrdvxDng/Gemini-Generated-Image-rgpu8orgpu8orgpu.png"
            };

            const prayersMap = {};
            Object.keys(prayerDatabase).forEach(key => {
                const dbInfo = prayerDatabase[key];
                const meta = cardsMeta[key] || {};
                prayersMap[key] = {
                    id: key,
                    category: meta.tab || 'nafl',
                    name: dbInfo.name,
                    sub: meta.sub || '',
                    badges: meta.badges || [],
                    time: meta.time || '',
                    rakaat: meta.rakaat || '',
                    hadith: meta.hadith || '',
                    bg: bgImages[key] || bgImages.witr,
                    steps: dbInfo.steps || []
                };
            });

            return {
                theme: 'dark',
                activeTab: 'fard',
                isModalOpen: false,
                isTrainingModalOpen: false,
                selectedPrayer: null,
                trainingCurrentStep: 0,
                trainingMicActive: false,
                recognition: null,
                prayers: prayersMap,
                
                initApp() {
                    this.theme = localStorage.getItem('theme') || 'dark';
                    if (this.theme === 'dark') {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                },
                get filteredPrayers() {
                    return Object.values(this.prayers).filter(p => p.category === this.activeTab);
                },
                toggleTheme() {
                    this.theme = this.theme === 'dark' ? 'light' : 'dark';
                    localStorage.setItem('theme', this.theme);
                    if (this.theme === 'dark') {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                },
                openInfo(id) {
                    this.selectedPrayer = this.prayers[id];
                    this.isModalOpen = true;
                    document.body.style.overflow = 'hidden';
                },
                closeInfo() {
                    this.isModalOpen = false;
                    setTimeout(() => { this.selectedPrayer = null; document.body.style.overflow = ''; }, 300);
                },
                startTraining() {
                    this.isModalOpen = false;
                    this.trainingCurrentStep = 0;
                    setTimeout(() => { this.isTrainingModalOpen = true; }, 300);
                },
                closeTraining() {
                    this.isTrainingModalOpen = false;
                    this.stopVoice();
                    document.body.style.overflow = '';
                },
                get currentStepData() {
                    if (!this.selectedPrayer || !this.selectedPrayer.steps) return null;
                    return this.selectedPrayer.steps[this.trainingCurrentStep];
                },
                nextStep() {
                    if (this.trainingCurrentStep < this.selectedPrayer.steps.length - 1) {
                        this.trainingCurrentStep++;
                    } else {
                        alert("Поздравляем! Вы успешно завершили обучение намазу " + this.selectedPrayer.name + ".");
                        this.closeTraining();
                    }
                },
                prevStep() {
                    if (this.trainingCurrentStep > 0) {
                        this.trainingCurrentStep--;
                    }
                },
                toggleMic() {
                    if (this.trainingMicActive) {
                        this.stopVoice();
                    } else {
                        this.startVoice();
                    }
                },
                startVoice() {
                    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                    if (!SpeechRecognition) {
                        alert("Голосовое управление не поддерживается вашим браузером.");
                        return;
                    }
                    if (!this.recognition) {
                        this.recognition = new SpeechRecognition();
                        this.recognition.lang = 'ru-RU';
                        this.recognition.continuous = true;
                        this.recognition.interimResults = false;
                        
                        this.recognition.onstart = () => { this.trainingMicActive = true; };
                        this.recognition.onend = () => { 
                            if(this.trainingMicActive) this.recognition.start();
                        };
                        this.recognition.onerror = (e) => { console.error(e); this.trainingMicActive = false; };
                        this.recognition.onresult = (event) => {
                            const current = event.resultIndex;
                            const transcript = event.results[current][0].transcript.toLowerCase();
                            
                            if (this.currentStepData && this.currentStepData.voiceTrigger) {
                                const match = this.currentStepData.voiceTrigger.some(t => transcript.includes(t.toLowerCase()));
                                if (match) {
                                    this.nextStep();
                                }
                            }
                        };
                    }
                    this.recognition.start();
                },
                stopVoice() {
                    this.trainingMicActive = false;
                    if (this.recognition) {
                        this.recognition.stop();
                    }
                }
            };
        }
    </script>
</body>
</html>`);

fs.writeFileSync('index.html', finalHtml, 'utf-8');
console.log('Successfully created index.html');
