const fomratDate = (date: string) : string => {

    const currentDate = new Date(date)
    
    const day = currentDate.getDate()
    const month = currentDate.getMonth() > 9 ? 
    currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`

    const year = currentDate.getFullYear()

    return `${day}/${month}/${year}`
}

export default fomratDate