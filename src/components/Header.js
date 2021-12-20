const Header = ({ title }) => {
    return (
        <div className='header'>
            <h3>Dana's Projects</h3>
        </div>

        // <header className="mdc-top-app-bar">
        //     <div className="mdc-top-app-bar__row">
        //         <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        //             <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
        //             <span class="mdc-top-app-bar__title">{title}</span>
        //         </section>
        //         <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        //             <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Star">star</button>
        //             <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
        //             <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
        //         </section>
        //     </div>
        // </header>        
    )
}

export default Header
