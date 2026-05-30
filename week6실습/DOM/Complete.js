import Button from "./Button.js";
import Div from "./Div.js";

class Complete{
    constructor(complete){
        this.row = new Div('','row').node;
        this.textBox = new Div(complete, 'text-box');  
        this.delBtn = new Button('', 'del-btn');

        const delImg = new Image();
        delImg.src = './asset/trash.png'; 
        this.delBtn.node.appendChild(delImg);
        delImg.style.width = '20px';
        delImg.style.height = '20px';

    }
    addRow(){
        [this.textBox, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        })
        return this.row;
        
    }
    getRow(){
        return this.row;

    }

    getInnerText(){
        return this.textBox.node;
    }

    getDelBtn(){
        return this.delBtn.node;
    }
}

export default Complete;