function Header() {
    return <nav className="#795548 brown">
        <div className="nav-wrapper">
            {/*eslint-disable-next-line*/}
            <a href="#" className="brand-logo right">React Movies</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>Sass</li>
            </ul>
        </div>
    </nav>
}

export {Header}