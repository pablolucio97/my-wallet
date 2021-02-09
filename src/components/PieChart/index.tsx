import React from 'react';

import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Cell
} from 'recharts'

import CountUp from 'react-countup'

import {
    Container,
    SideLeft,
    SideRight,
    Legend,
    LegendContainer
 } from './styles';

 interface IPieChartProps{
    data:{
        name: string;
        value: number;
        percent: number;
        color: string;
    }[]
 }

const PieCharts: React.FC<IPieChartProps> = ({data}) => {
    return (
        <Container>
            <SideLeft>
                <h2>Relations</h2>
                <LegendContainer>
                  {
                      data.map(chart => (
                        <Legend key={chart.name} color={chart.color}>
                        <div>
                        <CountUp
                            end={chart.percent}
                            start={0}
                            suffix='%'
                        />
                        </div>
                        <span>{chart.name}</span>
                      </Legend>
                      ))
                  }
                </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey='percent'
                        >
                            {data.map(pie => (
                              <Cell
                                key={pie.name}
                                fill={pie.color}
                              />  
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );
}

export default PieCharts;