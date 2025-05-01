document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.code-block').forEach(block => {
        const code = block.querySelector('code');
        if (code) {
            const lines = code.textContent.trim().split('\n');
            const numbers = Array.from({ length: lines.length }, (_, i) => i + 1).join('\n');
            block.setAttribute('data-line-numbers', numbers);
            code.innerHTML = lines.join('\n');
        }
    });
});