import React from 'react';
import Icon from '@mdi/react';
import {mdiFoodForkDrink, mdiAccountCircleOutline, mdiBasketOutline, mdiHelpCircleOutline} from '@mdi/js';
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header_item'}>
                <Link to={'/'} className={'link'}>
                    <Icon path={mdiFoodForkDrink} size={2} />
                </Link>
            </div>
            <div className={'filler'}></div>
            <div className={'header_item'}>
                <Link to={'/basket'} className={'link'}>
                    <Icon path={mdiBasketOutline} size={2} />
                </Link>
            </div>

            <div className={'header_item'}>
                <Link to={'/help'} className={'link'}>
                    <Icon path={mdiHelpCircleOutline} size={2} />
                </Link>
            </div>

            <div className={'header_item'}>
                <Link to={'/account'} className={'link'}>
                    <Icon path={mdiAccountCircleOutline} size={2} />
                </Link>
            </div>


        </div>
    );
};

export default Header;