import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import Menu from '../Components/Menu';
import Button from '../Components/Button';

function PortfoliosPage(props) {
    // const allButtons = ['All', ...new Set(props.portfolios.map(item => new Set(item.technologies.map(tech => tech))))]
    let allButtons = ['All'];
    props.portfolios.forEach(item => (item.technologies.forEach(tech => {(allButtons.indexOf(tech) >= 0) || allButtons.push(tech)})))

    const [menuItem, setMenuItems] = useState(props.portfolios);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(props.portfolios);
            return;
        }

        const filteredData = props.portfolios.filter(item => item.technologies.includes(button));
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>

                <Button filter={filter} button={allButtons} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
