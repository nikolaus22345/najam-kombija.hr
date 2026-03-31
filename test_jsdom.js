import { JSDOM } from 'jsdom';

(async () => {
    try {
        const response = await fetch("http://localhost:8080/coach-rental/");
        const html = await response.text();
        
        const dom = new JSDOM(html, {
            runScripts: "dangerously",
            resources: "usable",
            url: "http://localhost:8080/coach-rental/"
        });
        
        dom.window.onerror = function(message, source, lineno, colno, error) {
            console.log("JSDOM ERROR:", message, error);
        };
        
        // Wait for React to mount and throw
        setTimeout(() => {
            const details = dom.window.document.querySelector('details');
            if (details) {
                console.log('DETAILS:', details.textContent);
            } else {
                console.log('No details found, meaning no ErrorBoundary caught anything.');
                console.log('Body:', dom.window.document.body.innerHTML.slice(0, 300));
            }
            process.exit(0);
        }, 3000);
        
    } catch (e) {
        console.error("Script failed", e);
    }
})();
