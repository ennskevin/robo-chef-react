import logo from '../assets/logo.png'

export default function Header() {
    return (
        <>
            <header>
                <div className="header-container">
                    <img className="header-logo" src={logo} alt="Robo Chef logo"></img>
                    <div className="brand">
                        <span className="brand-top">Robo</span>
                        <span className="brand-bottom">Chef</span>
                    </div>
                </div>
            </header>
        </>
    )
}