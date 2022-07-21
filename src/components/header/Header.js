import React from "react";
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <Logo />
                <Tools />
            </>
        )
    }
}

export default Header;