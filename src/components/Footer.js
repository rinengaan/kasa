import '../sass/layouts/footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <img src='logo_nb.png' alt='Logo Kasa noir et blanc' />
            </div>
            <div className='footer__text'>
                <span>© 2020 Kasa. All&nbsp;</span>rights reserved
            </div>
        </div>
    )
}

export default Footer
