export default function Section2(){
    return(
        <section className="section2" id="projectsSection">
            <h2 className="section2--h2 main-text">Some of my <span className="color-mainPurple">Projects</span></h2>
            <div className="center--imgs"> 
            <div className="section2--imgContainer">
                <a img className="img-large img-cafe-desk" href="https://pabloribeiro23.github.io/blogCafe-udemy/" target="_blank"><img className="img-large img-cafe-desk" src="./images/blogcafe.png" alt="" /></a>
                <a img className="img-mobile img-cafe-mobile" href="https://pabloribeiro23.github.io/blogCafe-udemy/" target="_blank"><img className="img-mobile img-cafe-mobile" src="./images/mobile-cafe.png" alt="" /></a>
                <a img className="img-mobile img-todo-mobile" target="_blank" href="https://pabloribeiro23.github.io/Gestor-App/"><img className="img-mobile img-todo-mobile" src="./images/mobile-todo.png" alt="" /></a>
                <a img className="img-mobile img-ip-mobile" target="_blank" href="https://pabloribeiro23.github.io/IP-Tracker/"><img className="img-mobile img-ip-mobile" src="./images/mobile-ip.png" alt="" /></a>
                <a img className="img-mobile img-form-mobile" target="_blank" href="https://pabloribeiro23.github.io/multiStep-form/"><img className="img-mobile img-form-mobile" src="./images/mobile-form.png" alt="" /></a>
                <a img className="img-large img-form-desk" target="_blank" href="https://pabloribeiro23.github.io/multiStep-form/"><img className="img-large img-form-desk" src="./images/form.png" alt="" /></a>
            </div>
            </div>
        </section>
    )
}