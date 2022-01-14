import React from 'react';
import styled from 'styled-components';


function ContactItem({title, icon, cont}) {
    return (
        <ContactItemStyled
        data-aos="flip-down"
        data-aos-offset="-500"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease-out-cubic"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="bottom-bottom"
        >
            <div className="left-content">
                {
                    icon
                }
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont}</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding:1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2.3rem;
        }
    }

    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .1rem 0;
        }
    }
`;

export default ContactItem;
