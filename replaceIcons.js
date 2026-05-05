const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldIconsBlock = `<template x-if="currentStepData.icon">
                                <div class="flex justify-center items-center gap-4 mb-4">
                                    <img :src="currentStepData.icon" class="w-16 h-16 invert opacity-90 object-contain drop-shadow-md" alt="Позиция">
                                </div>
                            </template>`;

const newIconsBlock = `<!-- ИКОНКИ ДЕЙСТВИЙ В РЯД -->
                            <div class="flex justify-center items-center gap-3 mb-6 bg-white/5 p-3 rounded-2xl border border-white/10">
                                <template x-for="(iconUrl, iconName) in {takbir: 'https://ibb.co.com/bg4zGQdk', qiyam: 'https://ibb.co.com/gbctpYCc', ruku: 'https://ibb.co.com/1fwxDS9c', sajda: 'https://ibb.co.com/BVddjPDK', dua: 'https://ibb.co.com/PZw0cTWn'}">
                                    <div class="relative flex flex-col items-center">
                                        <div class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                                             :class="currentStepData && currentStepData.icon === iconUrl ? 'bg-gold-500/20 border border-gold-500/50 shadow-[0_0_15px_rgba(212,160,23,0.3)] scale-110' : 'opacity-40 grayscale'">
                                            <img :src="iconUrl" class="w-8 h-8 invert object-contain drop-shadow-md">
                                        </div>
                                    </div>
                                </template>
                            </div>`;

html = html.replace(oldIconsBlock, newIconsBlock);
fs.writeFileSync('index.html', html, 'utf8');
