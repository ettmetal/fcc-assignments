const quotes = [
    {
      text:
        "I'd never given much thought to how I would die — but dying in the place of someone I love seems like a good way to go",
      author: "Unknown"
    },
    {
      text:
        "We live in capitalism, its power seems inescapable - but then, so did the divine right of kings. Any human power can be resisted and changed by human beings.",
      author: "Ursula K. Le Guin"
    },
    {
      text:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      author: "Jane Austen"
    }
  ];
  
  const showRandomQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#text").html(quote.text);
    $("#author").html(quote.author);
  };

  $(document).ready(showRandomQuote);