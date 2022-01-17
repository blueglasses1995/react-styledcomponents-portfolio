import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SubmitButton from '../Components/SubmitButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

function ContactPage(props) {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
                <div className="left-content"
                    data-aos="slide-up"
                    data-aos-offset="-500"
                    data-aos-delay="0"
                    data-aos-duration="500"
                    data-aos-easing="ease-out-cubic"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <div className="contact-title">
                        <h4>{props.contact.title}</h4>
                    </div>
                    <form class="formrun form" action="https://form.run/api/v1/r/p0zgv84u8ko02zktutuymfpu" method="post">
                        <div className="form-field">
                            <label htmlFor="name">{props.contact.nameTag}*</label>
                            <input type="text" id="name" data-formrun-required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">{props.contact.emailTag}*</label>
                            <input type="email" id="email" data-formrun-type="email" data-formrun-required />
                            <div data-formrun-show-if-error="email"></div>
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject" >{props.contact.subjectTag}</label>
                            <input type="text" id="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">{props.contact.messageTag}*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10" data-formrun-required></textarea>
                            <div data-formrun-show-if-error="textarea"></div>
                        </div>
                        <div className="form-field f-button">
                            <SubmitButton type="submit" data-formrun-error-text="There are unfilled boxes" data-formrun-submitting-text="Sending..." title={props.contact.sendTag} />
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem title={props.contact.myPhoneTag} icon={phone} cont={'+66-839057605'}/>
                    <ContactItem title={props.contact.myEmailTag} icon={email} cont={'toshiki.matsukuma@sunyata.com'}/>
                    <ContactItem title={props.contact.myAddressTag} icon={location} cont={props.contact.address}/>
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default ContactPage
