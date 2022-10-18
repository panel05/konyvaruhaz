class KonyvView {
    #elem
    constructor(elem, szuloElem) {
        this.#elem=elem;
        // console.log("KonyvView");
        // console.log(elem);
        //egy táblázat sort jelenitsünk meg
        szuloElem.append(
            `<tr>
            <td>${elem.id}</td>
            <td>${elem.cim}</td>
            <td>${elem.szerzo}</td>
            <td>${elem.ar}</td>
            <td><button id="mod${elem.id}">Módosít</button></td>
            <td><button id="del${elem.id}">Töröl</button></td>
            </tr>`
        )
        this.sorElem= szuloElem.children("tr:last-child");
        console.log(this.sorElem);
        this.modositElem=$(`#mod${elem.id}`);
        this.torolElem=$(`#del${elem.id}`);
        this.modositElem.on("click",()=>{
                console.log("Módosit a viewban")
                this.kattintasTrigger("modosit");
        })
        this.torolElem.on("click",()=>{
            console.log("torol a viewban")
            this.kattintasTrigger("torol");
        })
    }
    //gombok eseménykezelői
    kattintasTrigger(esemenyNev){
        console.log("triggerben",esemenyNev)
        const esemeny = new CustomEvent(esemenyNev,{detail:this.#elem.id});
        window.dispatchEvent(esemeny);
    }
}

export default KonyvView;