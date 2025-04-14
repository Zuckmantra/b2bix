class CardSection extends HTMLElement{
    constructor(){
        super();
        const name = this.getAttribute('name');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const html = /*html*/`<div class="card">
        <div class="card-icon">
            <img src="${name}" height="100" alt="Icono Arquitectura" loading="lazy">
        </div>    
        <div>
            <h4>${title}</h4>
            <p>${description}</p>
        </div>            
    </div>
    `;
    this.insertAdjacentHTML('beforeend', html);
    }
}

customElements.define('card-section', CardSection);

window.addEventListener('resize', () => {
    const elements = document.querySelectorAll(' .third-banner, .fifth-banner, .banner-initial, .fourth-banner');
    elements.forEach((element) => {
        if (window.innerWidth <= 890) {
            element.classList.remove('banner'); 
        } else {
            element.classList.add('banner'); 
        }
    });
});