/** 
 *  @author alexandercddev
 *  @description Foodies Landing page replica with HTML, SASS
 *  @date 7/noviembre/2021 
**/

document.addEventListener('DOMContentLoaded', () => {  
    document.querySelectorAll('svg[data-src]').forEach( svg => { 
        fetch(svg.dataset.src)
        .then(respuesta => respuesta.text())
        .then(xml => svg.innerHTML = xml); 
    });
});

document.getElementById('floating').addEventListener('click', () => {
    let floating = document.getElementById('list-floating');   
    floating.className = floating.className === 'active' ? '' : 'active';
     
});
