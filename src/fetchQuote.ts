async function fetchQuote() {
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent("https://zenquotes.io/api/random")}&t=${new Date().getTime()}`
      );
      const data = await response.json();
      const parsedData = JSON.parse(data.contents);
      const quoteText = parsedData[0].q;
      const quoteAuthor = parsedData[0].a;
      console.log(data);
      const quoteTextElem = document.getElementById("quote-text") as HTMLParagraphElement;
      const quoteAuthorElem = document.getElementById("quote-author") as HTMLParagraphElement;
  
      quoteTextElem.innerText = `"${quoteText}"`;
      quoteAuthorElem.innerText = `~ ${quoteAuthor}`;
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
}
fetchQuote();
