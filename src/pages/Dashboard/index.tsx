import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader/index'
import SelectInput from '../../components/SelectInput'
import WalletBox from '../../components/WalletBox'
import MessageBox from '../../components/MessageBox'
import PieChart from '../../components/PieChart'
import HistoryBox from '../../components/HistoryBox'

import months from '../../utils/months'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'

import { Container, Content } from './styles'


const Dashboard: React.FC = () => {

  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const fillMonths = useMemo(() => {

    return months.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })

  }, [])

  const fillYears = useMemo(() => {

    let uniqueYears: number[] = [];


    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date)
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

  }, [])


  const totalExpenses = useMemo(() => {

    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if(month === selectedMonth && year === selectedYear){
        try{
          total += Number(item.amount)
        }catch(error){
          throw new Error('Invalid amount! Amount must be a number')
        }
      }
      
    })
    
    return total;

  }, [selectedYear, selectedMonth]);



  const totalGains = useMemo(() => {
    
    let total : number = 0;

    gains.forEach(item => {

      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if(selectedYear === year && selectedMonth === month){
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount. Gains must be a number.')
        }
      }
    })

    return total;
    
  },[selectedMonth, selectedYear]);


  const totalBalance = useMemo(() => {

    return totalGains - totalExpenses;

  }, [totalExpenses, totalGains]);


  const message = useMemo(() => {

    if(totalBalance < 0 ){
      return {
        title:'Bad situation!',
        description:'Your wallet is negative.',
        footerText:'Consider cut unnecessary wastes.',
        icon:sadImg
      }
    }else if(totalBalance === 0 ){
      return {
        title:'Danger situation!',
        description:'Your wallet is drawed.',
        footerText:'Consider review unnecessary wastes and ways to get more.',
        icon:grinningImg
      }
    }else{
      return {
        title:'God job!',
        description:'Your wallet is positive.',
        footerText:'Go on. Consider to invest your money.',
        icon:happyImg
      }
    }

  }, [totalBalance])

  const calcRelations = useMemo(() => {

    const totalRelations = totalExpenses + totalGains

    const gainsPercent = ((totalGains/totalRelations) * 100).toFixed(1)
    const expensesPercent = (((totalExpenses/totalRelations) * 100  )).toFixed(1)

      const data = [
        {
          name: 'Entrances',
          value: 12,
          percent: Number(gainsPercent),
          color: '#22eeaa'
        },
        {
          name: 'Budgets',
          value: 12,
          percent: Number(expensesPercent),
          color: '#F7931B'
        },
      ]
      
      return data

  }, [ totalExpenses, totalGains])


  const historyData = useMemo(() => {
      return months.map((_, monthIndex) => {

        let amountEntry = 0;
        gains.forEach((gain) => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();

          if(gainMonth === monthIndex && gainYear === selectedYear){
            try {
              amountEntry += Number(gain.amount);
            } catch (error) {
              console.log(error);
            }
          }

        })


        let amountOutput = 0;
        expenses.forEach((expense) => {
          const date = new Date(expense.date);
          const expenseMonth = date.getMonth();
          const expenseYear = date.getFullYear();

          if(expenseMonth === monthIndex && expenseYear === selectedYear){
            try {
              amountOutput += Number(expense.amount);
            } catch (error) {
              console.log(error);
            }
          }

        })

        return {
          monthNumber: monthIndex,
          month: months[monthIndex].substring(0,3),
          amountEntry,
          amountOutput
        }

      }).filter(current => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        return (selectedYear === currentYear && current.monthNumber <= currentMonth ||(selectedYear <= currentYear))

      })


  },[selectedYear]);

  return (
    <Container>
      <ContentHeader title='Dashboard' lineColor='#eeaa44'>
        <SelectInput options={fillMonths}
          onChange={(e) => { setSelectedMonth(Number(e.target.value)) }}
          defaultValue={selectedMonth}
        />
        <SelectInput
          options={fillYears} onChange={(e) => { setSelectedYear(Number(e.target.value)) }}
          defaultValue={selectedYear}
        />
      </ContentHeader>
      <Content>
        <WalletBox
          title='Balance'
          amount={totalBalance}
          footerLabel='Refresh by according your entrances and budgets.'
          icon='dollar'
          color='#6e03b5'
        />
        <WalletBox
          title='Entrances'
          amount={totalGains}
          footerLabel='Here has your entrances total.'
          icon='arrowUp'
          color='#4ab503'
        />

        <WalletBox
          title='Budgets'
          amount={totalExpenses}
          footerLabel='Here has your budgets total.'
          icon='arrowDown'
          color='#b53803'
        />
      </Content>
      <Content>
      <MessageBox
        title={message.title}
        description={message.description}
        footerText={message.footerText}
        icon={message.icon}
      />
      <PieChart
      data={calcRelations}
      />
      </Content>
      <HistoryBox
        data={historyData}
        lineColorAmountEntry='#4ab503'
        lineColorAmountOutput='#b53803'
      />
    </Container>
  );
}

export default Dashboard;