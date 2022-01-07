import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import Menu from '../Components/Menu';
import Button from '../Components/Button';

function PortfoliosPage(props) {
    const allButtons = ['All', ...new Set(props.portfolios.map(item => item.category))]
    
    const [menuItem, setMenuItems] = useState(props.portfolios);
    const [button, setButton] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(props.portfolios);
            return;
        }

        const filteredData = props.portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>

                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
