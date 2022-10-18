class konyvPublicView {
    #elem
    constructor(elem, szuloelem) {
        this.#elem=elem;
        // console.log("KonyvView");
        // console.log(elem);
        //egy táblázat sort jelenitsünk meg
        szuloelem.append(
            `<h1>${elem.cim}</h1>
            <h2>${elem.szerzo}</h2>
            <h3>${elem.ar}</h3>
            <button id="kos${elem.id}">Kosárba</button>`
        )
        this.divElem= szuloelem.children("div:last-child");
        // console.log(this.sorElem);
        this.kosarbaGomb=$(`#kos${elem.id}`);
        this.kosarbaGomb.on("click",()=>{
                console.log("Kosárban a viewban")
                this.kattintasTrigger("Kosárba");
        })
      
    }
    //gombok eseménykezelői
    kattintasTrigger(esemenyNev){
        console.log("triggerben",esemenyNev)
        const esemeny = new CustomEvent(esemenyNev,{detail:this.#elem.id});
        window.dispatchEvent(esemeny);
    }
}

export default konyvPublicView;