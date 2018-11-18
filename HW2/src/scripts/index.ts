import dotenv from 'dotenv';
import Initializer from './initializer';

window.onload = () => {
    dotenv.config();
    Initializer.initMenuButtons();   
    Initializer.initSubmitButtons(); 
    Initializer.setMaxFastCredit();
    Initializer.setMaxAmounts();
};
