var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://zenquotes.io/api/random")}&t=${new Date().getTime()}`);
            const data = yield response.json();
            const parsedData = JSON.parse(data.contents);
            const quoteText = parsedData[0].q;
            const quoteAuthor = parsedData[0].a;
            console.log(data);
            const quoteTextElem = document.getElementById("quote-text");
            const quoteAuthorElem = document.getElementById("quote-author");
            quoteTextElem.innerText = `"${quoteText}"`;
            quoteAuthorElem.innerText = `~ ${quoteAuthor}`;
        }
        catch (error) {
            console.error("Error fetching quote:", error);
        }
    });
}
fetchQuote();
