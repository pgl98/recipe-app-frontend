import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const NavBar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">
                        home
                    </Button>
                    <Button color="inherit" component={Link} to="/search">
                        search
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar