import React from "react";

import PageHeader from "../../components/PageHeader";
import WorkerItem from "../../components/WorkerItem";


import './styles.css';

function WorkersList (){
    return (
        <div id="page-worker-list" className="container">
           <PageHeader title="Alguns dos serviços disponíveis.">
                <form id="search-workers">
                    <div className="input-block">
                        <label htmlFor="services">Serviço</label>
                        <input type="text" id="services" />
                    </div>
                   
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day" />
                    </div>
                   
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
           </PageHeader>
            
             <main>
                <WorkerItem/>
                <WorkerItem/>
                <WorkerItem/>
                <WorkerItem/>
                <WorkerItem/>
            </main>
        </div>
    )
}


export default WorkersList;