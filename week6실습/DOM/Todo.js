import Button from "./Button.js";
import Div from "./Div.js";

class Todo{
    constructor(todo){
        this.row = new Div('','row').node;
        this.textBox = new Div(todo, 'text-box');  // <div class="row"></div>

        this.completeBtn = new Button('', 'complete-btn');
        const completeImg = new Image();
        completeImg.src = './asset/check.png';
        this.completeBtn.node.appendChild(completeImg);
        completeImg.style.width = '20px';
        completeImg.style.height = '20px';

        this.delBtn = new Button('', 'del-btn');
        const delImg = new Image();
        this.delBtn.node.appendChild(delImg);
        delImg.src = './asset/trash.png';
        delImg.style.width = '20px';
        delImg.style.height = '20px';

    }
    addRow(){
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        })
        return this.row;
        
    }
    getRow(){
        return this.row;

    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}

export default Todo;