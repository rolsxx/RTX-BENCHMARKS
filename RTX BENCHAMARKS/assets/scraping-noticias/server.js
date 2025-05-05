const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const path = require("path");

const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta principal do site
app.use(express.static(path.join(__dirname, "../../")));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "../../assets")));

// Função para fazer scraping do TechRadar
async function scrapeTechRadar() {
    try {
        const response = await axios.get("https://www.techradar.com/news");
        const $ = cheerio.load(response.data);
        const noticias = [];

        $("h3.article-name").each((index, element) => {
            const titulo = $(element).text().trim();
            const link = $(element).parent().attr("href");
            if (titulo && link && titulo.toLowerCase().includes("rtx")) {
                noticias.push({
                    titulo: titulo,
                    link: `https://www.techradar.com${link}`,
                    paragrafo: `<p><a href="https://www.techradar.com${link}" target="_blank">${titulo}</a></p>`
                });
            }
        });

        return noticias.slice(0, 5);
    } catch (error) {
        console.error("Erro ao fazer scraping:", error.message);
        return [];
    }
}

// Função para fazer scraping do Adrenaline
async function scrapeAdrenaline() {
    try {
        const response = await axios.get("https://adrenaline.com.br/");
        const $ = cheerio.load(response.data);
        const noticias = [];

        $(".article-card__details").each((index, element) => {
            const titulo = $(element).find(".article-card__title").text().trim();
            const link = $(element).find("a").attr("href");
            if (titulo && link && titulo.toLowerCase().includes("rtx")) { // Filtro para "RTX"
                noticias.push({
                    titulo: titulo,
                    link: link.startsWith("http") ? link : `https://adrenaline.com.br${link}`
                });
            }
        });

        return noticias.slice(0, 5); // Retorna as 5 primeiras notícias
    } catch (error) {
        console.error("Erro ao fazer scraping:", error.message);
        return [];
    }
}

// Função para fazer scraping do VideoCardz
async function scrapeVideoCardz() {
    try {
        const response = await axios.get("https://api.scraperapi.com", {
            params: {
                api_key: "SUA_CHAVE_API", // Substitua pela sua chave da ScraperAPI
                url: "https://videocardz.com/"
            }
        });
        const $ = cheerio.load(response.data);
        const noticias = [];

        $(".entry-title").each((index, element) => {
            const titulo = $(element).text().trim();
            const link = $(element).find("a").attr("href");
            if (titulo && link && titulo.toLowerCase().includes("rtx 5090")) {
                noticias.push({
                    titulo: titulo,
                    link: link
                });
            }
        });

        console.log(noticias);
        return noticias.slice(0, 5);
    } catch (error) {
        console.error("Erro ao fazer scraping:", error.message);
        return [];
    }
}

// Função para buscar notícias do NewsAPI
async function fetchNewsFromAPI() {
    try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
            params: {
                q: "RTX 5090", // Palavra-chave para buscar notícias
                apiKey: "83ca3181ab714357b4ae3e13671177c7", // Substitua pela sua chave do NewsAPI
                language: "en", // Alterado para idioma "en"
                sortBy: "publishedAt" // Ordenar por data de publicação
            }
        });

        const noticias = response.data.articles.map((article) => ({
            titulo: article.title,
            link: article.url
        }));

        return noticias.slice(0, 20); // Retorna as 5 primeiras notícias
    } catch (error) {
        console.error("Erro ao buscar notícias:", error.message);
        return [];
    }
}

async function scrapeNvidiaDrivers() {
    try {
        const response = await axios.get("https://www.nvidia.com/Download/index.aspx");
        const $ = cheerio.load(response.data);
        const drivers = [];

        $(".driver-download").each((index, element) => {
            const titulo = $(element).find(".driver-title").text().trim();
            const descricao = $(element).find(".driver-description").text().trim();
            const link = $(element).find("a").attr("href");

            if (titulo && link) {
                drivers.push({
                    titulo: titulo,
                    descricao: descricao || "Descrição não disponível",
                    link: link.startsWith("http") ? link : `https://www.nvidia.com${link}`
                });
            }
        });

        return drivers.slice(0, 5); // Retorna os 5 primeiros drivers
    } catch (error) {
        console.error("Erro ao fazer scraping dos drivers:", error.message);
        return [];
    }
}

app.get("/api/drivers", async (req, res) => {
    const drivers = await scrapeNvidiaDrivers();
    res.json(drivers);
});
app.get("/drivers.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "drivers.html"));
});
// Rota para a página de notícias
app.get("/noticias.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "noticias.html"));
});

// Rota da API para fornecer as notícias do TechRadar
app.get("/api/noticias/techradar", async (req, res) => {
    const noticias = await scrapeTechRadar();
    res.json(noticias);
});

// Rota da API para fornecer as notícias do Adrenaline
app.get("/api/noticias/adrenaline", async (req, res) => {
    const noticias = await scrapeAdrenaline();
    res.json(noticias);
});

// Rota da API para fornecer as notícias do VideoCardz
app.get("/api/noticias/videocardz", async (req, res) => {
    const noticias = await scrapeVideoCardz();
    res.json(noticias);
});

// Rota da API para fornecer as notícias do NewsAPI
app.get("/api/noticias", async (req, res) => {
    const noticias = await fetchNewsFromAPI();
    res.json(noticias);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/generic.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../../generic.html"));
});

app.get("/generic2.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../../generic2.html"));
});

app.get("/generic3.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../../generic3.html"));
});

app.get("/generic4.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../../generic4.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});