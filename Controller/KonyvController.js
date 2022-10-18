import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import konyvekPublicView from "../View/konyvekPublicView.js";

class KonyvController {
    constructor() {
        //console.log("KonyvController");
        const konyvmodel = new KonyvModel();
        $("#admin").on("click",()=>{
            konyvmodel.adatBe("../adat.json", this.konyvAdatok);
        })
        $("#pub").on("click",()=>{
            konyvmodel.adatBe("../adat.json", this.konyvekPublicAdatok);
        })
        

        $(window).on("modosit",(event)=>{
            console.log("controllerben modosit",event.detail)
            konyvmodel.adatModosit(event.detail);
        })
        $(window).on("torol",(event)=>{
            console.log("controllerben torol",event.detail)
            konyvmodel.adatTorol(event.detail)
        })
    }
    
    konyvAdatok(tomb) {
        let szuloElem=$("main");
        new KonyvekView(tomb,szuloElem);
        //console.log(tomb);
    }
    konyvekPublicAdatok(tomb) {
        let szuloElem=$("main");
        new konyvekPublicView(tomb,szuloElem);
        //console.log(tomb);
    }
    
}

export default KonyvController;