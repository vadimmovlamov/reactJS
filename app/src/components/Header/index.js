import React from 'react';
import { Link } from 'react-router-dom';
import capitalize from 'lodash/capitalize';
import startcase from 'lodash/startCase'

import { ROUTE_NAMES } from '../../router/routeNames';

import styles from './index.module.scss';

const Header = () => {
    return(
        <div>
            {
                Object.entries(ROUTE_NAMES).map(([pageName, path]) => (
                    <Link className={styles.menuItem} key={path} to={path}>{startcase(capitalize(pageName))}</Link>
                ))
            }
        </div>
    )
}

export default Header;