export default function Section2(){
    return(
        <section className="section2" id="projectsSection">
            <h2 className="section2--h2 main-text">Some of my <span className="color-mainPurple">Projects</span></h2>
            <div className="center--imgs"> 
            <div className="section2--imgContainer">
                <a img className="img-large img-cafe-desk" href="https://pabloribeiro23.github.io/blogCafe-udemy/" target="_blank"><img className="img-large img-cafe-desk" src="../src/assets/blogcafe.png" alt="" /></a>
                <a img className="img-mobile img-cafe-mobile" href="https://pabloribeiro23.github.io/blogCafe-udemy/" target="_blank"><img className="img-mobile img-cafe-mobile" src="../src/assets/mobile-cafe.png" alt="" /></a>
                <a img className="img-mobile img-todo-mobile" target="_blank" href="https://pabloribeiro23.github.io/Gestor-App/"><img className="img-mobile img-todo-mobile" src="../src/assets/mobile-todo.png" alt="" /></a>
                <a img className="img-mobile img-ip-mobile" target="_blank" href="https://pabloribeiro23.github.io/IP-Tracker/"><img className="img-mobile img-ip-mobile" src="../src/assets/mobile-ip.png" alt="" /></a>
                <a img className="img-mobile img-form-mobile" target="_blank" href="https://pabloribeiro23.github.io/multiStep-form/"><img className="img-mobile img-form-mobile" src="../src/assets/mobile-form.png" alt="" /></a>
                <a img className="img-large img-form-desk" target="_blank" href="https://pabloribeiro23.github.io/multiStep-form/"><img className="img-large img-form-desk" src="../src/assets/form.png" alt="" /></a>
            </div>
            </div>
        </section>
    )
}