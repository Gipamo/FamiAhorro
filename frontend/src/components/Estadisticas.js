import React from 'react';
import Chart from 'react-google-charts'
import EstadisticasFamilia from '../models/Estadisticas.json'
const options = {
    hAxis: {
        title: 'Años',
    },
    vAxis: {
        title: 'Pesos',
    }
}

export default function Estadisticas(){
    return (
        <section className="container">
            <div className="row justify-content-center">
            <Chart width={'1000px'}
            className={'col-12'}
            chartType='LineChart'
            height={'600px'}
            rootProps={{ 'data-testid': '1' }}
            options={options}
            data={EstadisticasFamilia.data}
            />
            </div>
        </section>
		
		);
}