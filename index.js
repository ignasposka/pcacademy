const minRows = 5;
const maxRows = 7;

(()=> {
    const resize = () => {
        const textarea = document.getElementsByTagName('textarea')[0];   
        const diff = textarea.scrollHeight - textarea.clientHeight;
        if(diff > 0){
           document.documentElement.style.setProperty('--row-count', `${textarea.scrollHeight}px`);
        }
    }

    const textarea = document.getElementsByTagName('textarea')[0];
    textarea.addEventListener('keyup', resize);
})()