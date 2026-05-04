import Complete from "../DOM/Complete.js";


class CompleteController {
    constructor(complete){
        this.completetodo = new Complete(complete);

        this.completetodo.getDelBtn().addEventListener('click', () => {
        this.delcomp();
        });
    }

    addcomp(){
            const completeList = document.getElementById("complete-list");
            completeList.appendChild(this.completetodo.addRow());
        }

    delcomp(){
            const completeList = document.getElementById("complete-list");
            completeList.removeChild(this.completetodo.getRow());
    }
}

export default CompleteController;