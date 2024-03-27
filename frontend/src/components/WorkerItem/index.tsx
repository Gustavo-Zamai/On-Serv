import React from "react";

import wppIcon from "../../assets/images/icons/whatsapp.svg";
import emailIcon from "../../assets/images/icons/email.svg";

import './styles.css';

function WorkerItem() {
    return (
        <article className="worker-item">
        <header>
            <img src="https://avatars.githubusercontent.com/u/92702717?v=4" alt="Gustavo Zamai" />
            <div>
                <strong>Gustavo Zamai</strong>
                <span>Serviço Oferecido</span>
            </div>
        </header>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            <br /><br />
            Nulla magni dolores molestias itaque eum saepe eligendi consequuntur quibusdam harum cum, distinctio neque rerum debitis,
            enim temporibus laborum doloremque veritatis quae!
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 120,00</strong>
            </p>
            <button type="button">
                <img src={wppIcon} alt="WhatsApp" />
                Envie uma mensagem
            </button>
           <button type="button">
                <img src={emailIcon} alt="E-mail" />
                Mande um e-mail
            </button>
        </footer>
    </article>
    )
}

export default WorkerItem;