document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById('text-editor');
    editor.innerHTML = convertFurigana(editor.innerText);
});

function convertFurigana(text) {
    return text.replace(/([^\[]+)\[([^\]]+)\]/g, '<span class="furigana" onclick="toggleFurigana(this)">$1<span class="reading">$2</span></span>');
}

function toggleFurigana(element) {
    const reading = element.querySelector('.reading');
    if (reading.style.display === 'none' || reading.style.display === '') {
        reading.style.display = 'inline';
    } else {
        reading.style.display = 'none';
    }
}
