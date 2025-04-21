const menuCasa = document.getElementById("btnVentanaOpcionesCasa")

btnVentanaOpcionesCasa.addEventListener("click",(event)=>{
    event.preventDefault();

    const contenedorMenu = document.getElementsByClassName('contenedorMenu')[0];

    const menu = document.createElement('div');
    menu.innerHTML = `
            <div class="contMenu">
                <h2>Casa Comunal</h2>
                <button class="btnNombre">Crear Aldeano</button>
            </div>
    `
    contenedorMenu.appendChild(menu)
})
