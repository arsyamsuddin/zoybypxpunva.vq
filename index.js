const express = require('express');
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const supabase = require('./supabase'); // Assuming you have a supabase.js file with the client setup

// Konfigurasi static
app.use(express.static(path.join(__dirname, 'public')));
// Konfigurasi layout
app.use(expressLayouts); // Menggunakan express-ejs-layouts

// Konfigurasi template
// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Fase 3: Template Web 1.0
app.get("/", async (req, res) => {
    const { data: articles, error } = await supabase
        .from('articles')
        .select('*');

    if (error) {
        console.error('Error fetching articles:', error);
        return res.status(500).send('Error fetching articles');
    }

    const headline = {
        title: "Berita Utama Hari Ini",
        summary: "Ringkasan berita utama yang sedang trending.",
        image: "/images/eth.png" //Pastikan ada gambar di folder public/images
    };

    res.render("index", { title: "Beranda", headline, articles });
});

app.get("/about", (req, res) => {
    res.render("about");
});

// Fase 1: Returning string
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Fase 3: Template => Web 1.0 => Produk CMS yang ready to use => Saya akan minta mas Niko/SEO untuk materi SEO
app.get('/template', (req, res) => {
    res.render('index', { nama: 'Me'});
});

// Fase 2: Static file
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'old-index.html'));
});

// Fase 4: Dynamic templating / server side + client side => Web 2.0 (next.js)
// Menjalankan server
app.listen(4000, () => {    
        console.log(`Server berjalan di http://localhost:4000`);
});