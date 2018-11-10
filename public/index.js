import pxToEm from 'px-to-em';

(()=> {
    const minRows = 5;
    const maxRows = 7;

    const textarea = document.getElementsByTagName('textarea')[0];

    const resize = () => {    
        if(!textarea.value) {
            document.documentElement.style.setProperty('--row-count', `${minRows}em`);
            return;
        }
        const scrollHeight = textarea.scrollHeight;
        const diff = scrollHeight - textarea.clientHeight;
        const rowCount = pxToEm(scrollHeight, textarea);
        if(diff > 0 && rowCount <= maxRows){
           document.documentElement.style.setProperty('--row-count', `${scrollHeight}px`);
        }
    }

    document.documentElement.style.setProperty('--row-count', `${minRows}em`);
    textarea.addEventListener('keyup', resize);
})()