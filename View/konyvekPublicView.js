import konyvPublicView from "./KonyvPublicView.js";

class konyvekPublicView {
    constructor(tomb, szuloelem) {
        szuloelem.append(`
        <div class="sok">
        </div>
        `);
        this.divElem = szuloelem.children("div:last-child");
        // this.tbodyElem = this.tablaElem.children("tbody");

        tomb.forEach(konyv => {
            const konyvem = new konyvPublicView(konyv,this.divElem);//already declared
        });
    }
}

export default konyvekPublicView;