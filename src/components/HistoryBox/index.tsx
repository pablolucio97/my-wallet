import React from 'react';

import { Container, Legend, LegendContainer, ChartContainer, Header } from './styles';

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

import formatCurrency from '../../utils/formatCurrency'

interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[];
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data,
    lineColorAmountEntry,
    lineColorAmountOutput
}) => 
    (
        <Container>
            <Header>
                <h2>Balance History</h2>
                <LegendContainer>
                    <Legend color={lineColorAmountEntry}>
                        <div>65%</div>
                        <span>Entrances</span>
                    </Legend>
                    <Legend color={lineColorAmountOutput}>
                        <div>35%</div>
                        <span>Budgets</span>
                    </Legend>
                </LegendContainer>
            </Header>
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 5, left: 5 }}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#cecece' />
                        <XAxis dataKey='month' stroke='#cecece' />
                        <Tooltip formatter={(value: number) => formatCurrency(Number(value))} />
                        <Line
                            type='monotone'
                            dataKey='amountEntry'
                            name='entrances'
                            stroke={lineColorAmountEntry}
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 5 }}
                        />
                        <Line
                            type='monotone'
                            dataKey='amountOutput'
                            name='budgets'
                            stroke={lineColorAmountOutput}
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    );


export default HistoryBox;