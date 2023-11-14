export default function Header(){
    
    const scrollToProjects = () => {
        document.querySelector("#projectsSection").scrollIntoView({
            behavior: "smooth"
        })
    };

    const scrollToContact = () => {
        document.querySelector("#contactForm").scrollIntoView({
            behavior: "smooth"
        })
    };

    return(
        <nav>
            <div className="nav--logo">
                <h2>Pablo <span className="main-btn ">Ribeiro</span></h2>
            </div>
            <ul className="nav--ul">
                <li className="nav--item">Home</li>
                <li className="nav--item" onClick={scrollToProjects}>Projects</li>
                <li className="nav--item" onClick={scrollToContact}>Contact</li>
            </ul>
        </nav>
    )
}