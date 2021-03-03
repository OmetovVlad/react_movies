function Footer() {
    return(
        <div className="container">
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">© 2020-2021</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>My GitHub</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://github.com/OmetovVlad">OmetovVlad</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>My site</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="http://ometov.ru/">ometov.ru</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>My VK</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="https://vk.com/ometovvlad">ometovvlad</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export {Footer}