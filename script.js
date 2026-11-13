'use strict';

/* =====================================================================
   DATA PRIBADI — ganti semua isi di bawah ini dengan data Anda.
   Semua teks di website otomatis mengikuti data ini.
   Isi yang masih contoh: email, telepon, lokasi, sosial media,
   pendidikan, pengalaman, keahlian, dan semua proyek.
   ===================================================================== */
const DATA = {
  name: 'Cahya Nurbaya',
  title: 'Creative desainer',
  avatar: 'img/logo.png',                      // mis. 'img/foto.jpg'. Kosong = tampil inisial
  email: 'cahyanurbaya917@mail.com',
  phone: '',                       // kosongkan jika tidak ingin ditampilkan
  birthday: '8 Februari 2005',     // kosongkan jika tidak ingin ditampilkan
  location: 'Indonesia',
  socials: [
    { label: 'Instagram', url: 'https://www.instagram.com/_cahlyr?obrf=amRtaGI2ZGx3Nmdv' },
    { label: 'Tiktok',   url: 'https://www.tiktok.com/@tjahya.id?_r=1&_t=ZS-9BMPbvGSidV' },
    { label: 'LinkedIn',  url: 'https://linkedin.com/' }
  ],
  about: [
    'Saya desainer grafis yang suka mengubah ide yang rumit menjadi tampilan yang sederhana, rapi, dan mudah diingat.',
    'Saya mengerjakan logo, identitas merek, poster, kemasan, dan konten media sosial. Tujuan saya: pesan Anda tersampaikan jelas dengan gaya yang sesuai karakter Anda.'
  ],
  services: [
    { title: 'Logo & identitas merek', text: 'Logo, warna, dan panduan tampilan yang konsisten.' },
    { title: 'Poster & media cetak',   text: 'Poster, brosur, dan materi acara siap cetak.' },
    { title: 'Konten media sosial',    text: 'Template feed dan story yang seragam.' },
    { title: 'Desain antarmuka',       text: 'Tampilan aplikasi dan website yang mudah dipakai.' }
  ],
  education: [
    { title: 'Universitas Terbuka', period: '2024 - Sekarang', text: 'Administrasi Bisnis' },
    { title: 'SMK Mutiara Salawu',             period: '2021 - 2024',     text: 'Multimedia' }
  ],
  experience: [
    { title: 'Desainer freelance', period: '2023 - Sekarang', text: 'Mengerjakan logo, poster, dan konten media sosial untuk klien usaha kecil.' }
  ],
  skills: [
    { name: 'Adobe Illustrator', level: 70 },
    { name: 'Adobe Photoshop',   level: 75 },
    { name: 'Corel Draw',             level: 90 },
    { name: 'Excel',          level: 50 }
  ],
  /* image: path gambar karya (mis. 'img/proyek1.jpg'). Kosong = tampil kotak warna.
     link: tautan ke karya lengkap (opsional). */
  projects: [
    { title: 'Kaos Agustusan',     category: 'Branding',     year: '2025', image: 'img/projects/kaosAgustusan.png', link: '', tools: ['Illustrator', 'Photoshop'], text: 'Logo, palet warna, desain kaos, ornamen.'},
    
    { title: 'Banner Kegiatan Peringatan HUT RI',    category: 'Poster',       year: '2025', image: 'img/projects/bannerAgustusan.png', link: '', tools: ['Photoshop'],               text: 'banner utama dan turunannya untuk festival musik kampus.' },
    
    { title: 'Kemasan Teh Daun',         category: 'Kemasan',      year: '2024', image: '', link: '', tools: ['Illustrator'],             text: 'Desain kotak dan label untuk teh herbal rumahan.' },
    
    { title: 'Aplikasi Catatan Harian',  category: 'UI/UX',        year: '2024', image: '', link: '', tools: ['Figma'],                   text: 'Rancangan tampilan aplikasi catatan harian yang ringkas.' },
    
    { title: 'Logo Studio Kayu',         category: 'Branding',     year: '2024', image: '', link: '', tools: ['Illustrator'],             text: 'Logo dan kartu nama untuk studio furnitur kayu.' },
    
    { title: 'Feed Toko Buku',           category: 'Media Sosial', year: '2023', image: '', link: 'https://youtube.com/shorts/CZvAqWXqL84?si=D5nSBtLQnAYHcnpj', tools: ['Photoshop', 'Figma'],      text: 'Template feed Instagram untuk toko buku independen.' }
    
    
  ]
};

/* =====================================================================
   KODE — biasanya tidak perlu diubah.
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function h(tag, props = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) e.setAttribute(k, v);
  }
  kids.flat().filter(c => c != null && c !== false).forEach(c => e.append(c));
  return e;
}

const initials = s => s.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
const hue = s => ([...s].reduce((a, c) => a + c.charCodeAt(0), 0) * 7) % 360;

/* ---------- Sidebar ---------- */
document.title = `${DATA.name} | ${DATA.title}`;
$('#name').textContent = DATA.name;
$('#role').textContent = DATA.title;

const avatar = $('#avatar');
if (DATA.avatar) {
  const img = h('img', { src: DATA.avatar, alt: DATA.name });
  img.addEventListener('error', () => { avatar.textContent = initials(DATA.name); });
  avatar.append(img);
} else {
  avatar.textContent = initials(DATA.name);
}

const contactRows = [
  ['Email', DATA.email, `mailto:${DATA.email}`],
  ['Telepon', DATA.phone, `tel:${DATA.phone.replace(/\s+/g, '')}`],
  ['Tanggal lahir', DATA.birthday, ''],
  ['Lokasi', DATA.location, '']
].filter(r => r[1]);

$('#contacts').append(...contactRows.map(([label, value, href]) =>
  h('li', { class: 'contact' },
    h('small', {}, label),
    href ? h('a', { href }, value) : h('span', {}, value))));

$('#socials').append(...DATA.socials.map(s =>
  h('a', { href: s.url, target: '_blank', rel: 'noopener' }, s.label)));

const sidebar = $('#sidebar');
const toggle = $('#toggle');
toggle.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Sembunyikan kontak' : 'Tampilkan kontak';
});

/* ---------- Tentang & Resume ---------- */
$('#about-text').append(...DATA.about.map(t => h('p', {}, t)));
$('#services').append(...DATA.services.map(s =>
  h('li', { class: 'service' }, h('h4', {}, s.title), h('p', {}, s.text))));

const timelineItems = list => list.map(i =>
  h('li', {}, h('h4', {}, i.title), h('p', { class: 'period' }, i.period), h('p', {}, i.text)));
$('#education').append(...timelineItems(DATA.education));
$('#experience').append(...timelineItems(DATA.experience));

$('#skills').append(...DATA.skills.map(s => {
  const fill = h('i');
  fill.style.width = `${s.level}%`;
  return h('li', {},
    h('div', { class: 'skill-top' }, h('span', {}, s.name), h('span', {}, `${s.level}%`)),
    h('div', { class: 'bar' }, fill));
}));

/* ---------- Portofolio: filter + detail ---------- */
const thumb = p => {
  const box = h('div', { class: 'thumb' });
  box.style.setProperty('--h', hue(p.title));
  const fallback = () => { box.replaceChildren(initials(p.title)); };
  if (p.image) {
    const img = h('img', { src: p.image, alt: p.title, loading: 'lazy' });
    img.addEventListener('error', fallback);
    box.append(img);
  } else {
    fallback();
  }
  return box;
};

const dialog = $('#dialog');
function openProject(p) {
  $('#d-thumb').replaceChildren(thumb(p));
  $('#d-title').textContent = p.title;
  $('#d-meta').textContent = `${p.category} • ${p.year}`;
  $('#d-text').textContent = p.text;
  $('#d-tags').replaceChildren(...(p.tools || []).map(t => h('span', {}, t)));
  const link = $('#d-link');
  link.hidden = !p.link;
  if (p.link) link.href = p.link;
  dialog.showModal();
}
$('#d-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

const categories = ['Semua', ...new Set(DATA.projects.map(p => p.category))];
let activeCategory = 'Semua';
const filters = $('#filters');
const projectList = $('#projects');

function renderProjects() {
  $$('button', filters).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.cat === activeCategory)));
  const shown = DATA.projects.filter(p => activeCategory === 'Semua' || p.category === activeCategory);
  projectList.replaceChildren(...(shown.length
    ? shown.map(p => h('li', {},
        h('button', { class: 'project', type: 'button', onclick: () => openProject(p) },
          thumb(p), h('h4', {}, p.title), h('p', {}, p.category))))
    : [h('li', { class: 'empty' }, 'Belum ada karya di kategori ini.')]));
}

filters.append(...categories.map(c =>
  h('button', { type: 'button', 'data-cat': c, onclick: () => { activeCategory = c; renderProjects(); } }, c)));
renderProjects();

/* ---------- Navigasi halaman (tahan refresh lewat #hash) ---------- */
const PAGES = ['about', 'resume', 'portfolio', 'contact'];
function showPage(id) {
  if (!PAGES.includes(id)) id = 'about';
  $$('[data-page]').forEach(p => { p.hidden = p.dataset.page !== id; });
  $$('[data-nav]').forEach(b => {
    const on = b.dataset.nav === id;
    b.classList.toggle('active', on);
    if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
}
$$('[data-nav]').forEach(b => b.addEventListener('click', () => { location.hash = b.dataset.nav; }));
window.addEventListener('hashchange', () => showPage(location.hash.slice(1)));
showPage(location.hash.slice(1));

/* ---------- Form kontak: membuka email dengan pesan siap kirim ---------- */
const form = $('#form');
const sendBtn = $('#send');
const status = $('#status');
form.addEventListener('input', () => { sendBtn.disabled = !form.checkValidity(); });
form.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(form);
  const subject = `Pesan dari ${f.get('fullname')} lewat portofolio`;
  const body = `${f.get('message')}\n\n${f.get('fullname')} (${f.get('email')})`;
  window.location.href = `mailto:${DATA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Aplikasi email Anda akan terbuka dengan pesan siap kirim. Tekan kirim di sana.';
  form.reset();
  sendBtn.disabled = true;
});
