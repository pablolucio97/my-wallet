import React from 'react';

import { Container, SideLeft, SideRight, LegendContainer, Legend} from './styles';

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'
import formatCurrency from '../../utils/formatCurrency'


import CountUp from 'react-countup'


interface IBarChartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[]
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => 
     (
        <Container>
                <SideLeft>
                    <h2>{title}</h2>
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
                        <BarChart data={data}>
                            <Bar dataKey='amount'>
                                {
                                    data.map((chart) => (
                                        <Cell
                                            key={chart.name}
                                            fill={chart.color}
                                        />
                                    ))
                                }
                            </Bar>
                            <Tooltip 
                            cursor={{fill: 'none'}}
                            formatter={(value: number) => formatCurrency(Number(value))}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </SideRight>
        </Container>
    );

export default BarChartBox;