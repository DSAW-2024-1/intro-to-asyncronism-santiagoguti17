const getQuotes = async (count, character) => {
            const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`);
            const data = await response.json();
            return data;
        };

const displayQuotes = (quotes) => {

    const quoteContainer = document.getElementById('quote-container');
    quotes.forEach(quote => {
        const quoteElement = document.createElement('div');
        quoteElement.className = 'quote-container';
        quoteElement.innerHTML = `
            <img src="${quote.image}" alt="${quote.character}">
            <div>
                <h3>${quote.character}</h3>
                <p>${quote.quote}</p>
            </div>
        `;
        quoteContainer.appendChild(quoteElement);
    });
};

const fetchQuotes = async () => {
    const quotes = await getQuotes(15);
    displayQuotes(quotes);
};

fetchQuotes();


const getQuotes2 = async (count, character) => {
    const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${character}`);
    const data = await response.json();
    return data;
};

const displayQuotes2 = (quotes) => {
    const quoteContainer = document.getElementById('quote-container');
    quotes.forEach(quote => {
        const quoteElement = document.createElement('div');
        quoteElement.className = 'quote-container';
        quoteElement.innerHTML = `
            <img src="${quote.image}" alt="${quote.character}">
            <div>
                <h3>${quote.character}</h3>
                <p>${quote.quote}</p>
            </div>
        `;
        quoteContainer.appendChild(quoteElement);
    });
};

const fetchQuotes2 = async () => {
    const quotes = await getQuotes('ho');
    displayQuotes(quotes);
};

fetchQuotes2();

const getQuotes3 = async (count, character) => {
    const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}&character=${character}`);
    const data = await response.json();
    return data;
};

const displayQuotes3 = (quotes) => {
    const quoteContainer = document.getElementById('quote-container');
    quotes.forEach(quote => {
        const quoteElement = document.createElement('div');
        quoteElement.className = 'quote-container';
        quoteElement.innerHTML = `
            <img src="${quote.image}" alt="${quote.character}">
            <div>
                <h3>${quote.character}</h3>
                <p>${quote.quote}</p>
            </div>
        `;
        quoteContainer.appendChild(quoteElement);
    });
};

const fetchQuotes3 = async () => {
    const quotes = await getQuotes(10, 'ho');
    displayQuotes(quotes);
};

fetchQuotes3();











