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
}) => {
    return (
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
                        <Tooltip />
                        <Line
                            type='monotone'
                            dataKey='amountEntry'
                            name='entrances'
                            stroke={lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 7 }}
                        />
                        <Line
                            type='monotone'
                            dataKey='amountOutput'
                            name='budgets'
                            stroke={lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 7 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    );
}

export default HistoryBox;