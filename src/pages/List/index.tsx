import React, { useEffect, useMemo, useState } from 'react';

import { Container, Content, Filters } from './styles'

import { uuid } from 'uuidv4'

import SelectInput from '../../components/SelectInput'
import ContentHeader from '../../components/ContentHeader'
import HisotryFinanceCard from '../../components/HistoryFinanceCard'

import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import months from '../../utils/months'

import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'


interface IRouteParamTypes {
    match: {
        params: {
            type: string
        }
    }
}

interface IData {
    id: string;
    description: string;
    formatedAmount: string;
    frquency: string;
    formatedDate: string;
    tagColor: string;
}

const List: React.FC<IRouteParamTypes> = ({ match }) => {

    const [data, setData] = useState<IData[]>([])
    const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1)
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
    const [filteredSelectedFrequency, setFilteredSelectedFrequency] = useState(['reocorrente', 'eventual'])

    const movimentType = match.params.type

    const pageData = useMemo(() => {
        return movimentType === 'entrances' ? {
            title: 'Entrances',
            lineColor: '#22ddaa',
            listData: gains
        } : ({
            title: 'Budgetes',
            lineColor: '#e44c4e',
            listData: expenses
        })
    }, [movimentType])


    const handleFrequencyClick = (frequency: string) => {

        const alreadySelected = filteredSelectedFrequency.findIndex(item => item === frequency)

        if (alreadySelected >= 0) {
            const filtered = filteredSelectedFrequency.filter(item => item !== frequency)
            setFilteredSelectedFrequency(filtered)
        } else {
            setFilteredSelectedFrequency((prev) => [...prev, frequency])
        }

    }

    useEffect(() => {

        const filteredData = pageData.listData.filter(item => {

            const date = new Date(item.date)
            const month = date.getMonth() + 1
            const year = date.getFullYear()

            return month === selectedMonth && year === selectedYear && filteredSelectedFrequency.includes(item.frequency)
        })

        const formatedData = filteredData.map(item => {
            return {
                id: uuid(),
                description: item.description,
                formatedAmount: formatCurrency(Number(item.amount)),
                frquency: item.frequency,
                formatedDate: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
            }

        })
        setData(formatedData)
    }, [pageData.listData, selectedMonth, selectedYear, filteredSelectedFrequency])





    const fillYears = useMemo(() => {

        const uniqueYears: number[] = []

        const { listData } = pageData

        listData.forEach(item => {
            const date = new Date()
            const year = date.getFullYear()
            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })


        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        })

    }, [pageData])

    const fillMonths = useMemo(() => {

        return months.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })

    }, [])


    return (
        <Container>
            <ContentHeader
                title={pageData.title}
                lineColor={pageData.lineColor}
            >
                <SelectInput options={fillMonths}
                    onChange={(e) => { setSelectedMonth(Number(e.target.value)) }}
                    defaultValue={selectedMonth}
                />
                <SelectInput
                    options={fillYears} onChange={(e) => { setSelectedYear(Number(e.target.value)) }}
                    defaultValue={selectedYear}
                />
            </ContentHeader>
            <Filters>
                <button type='button'
                    className={`tag-filter-commons 
                 ${filteredSelectedFrequency.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Commons bills
                </button>
                <button type='button'
                    className={`tag-filter-eventuals 
                ${filteredSelectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventual bills
                </button>
            </Filters>

            <Content>
                {
                    data.map(item => (
                        <HisotryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.formatedDate}
                            amount={item.formatedAmount}
                        />
                    ))
                }

            </Content>
        </Container>
    );
}

export default List;