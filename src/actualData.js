// const [timeRange, setTimeRange] = useState('1M')
  // const [actualData, setActualData] = useState(null)
  // const [graphData, setData] = useState([])
  // const setPriceData = (days = actualData.data.length) => {
  //   const data = actualData.data.slice(0, days);
  //   const newData = []
  //   for (let i = 0; i < data.length; i++) {
  //     newData.push({
  //       x: data[i].date,
  //       y: data[i].close,
  //     })
  //   }
  //   const gData = [{ id: actualData.id }]
  //   gData[0].data = newData
  //   setIsLoading(false)
  //   return gData
  // }

  // const findDate = (months) => {
  //   const today = actualData.data[0].date
  //   const digits = today.split('-')
  //   const pastDate = new Date(digits[0], digits[1] - 1, digits[2])
  //   // Go back for required no of months
  //   pastDate.toLocaleDateString()
  //   pastDate.setMonth(pastDate.getMonth() - months)
  //   if( !(pastDate.getDay() % 6)) {
  //     // Check for weekend and add days for Monday
  //     pastDate.setDate(pastDate.getDate() + 2)
  //   }
  //   const date = pastDate.toLocaleDateString().split('/')
  //   // Add leading zero for single digit in date and month
  //   const zeroPaddedMonth = `0${date[0]}`.slice(-2)
  //   const zeroPaddedDate = `0${date[1]}`.slice(-2)
  //   const pd = `${date[2]}-${zeroPaddedMonth}-${zeroPaddedDate}`;
  //   // Find the index in original array to slice that much data
  //   const index = actualData.data.findIndex(data => data.date === pd)
  //   setData(setPriceData(index))
  // }

  // const sliceData = (time) => {
  //   setIsLoading(true)
  //   setTimeRange(time)
  //   if (time === '1M') findDate(1)
  //   else if (time === '3M') findDate(3)
  //   else if (time === '1Y') findDate(12)
  //   else if (time === '5Y') findDate(60)
  //   else setData(setPriceData())
  // }

  // const fetchData = () => {
  //   setIsLoading(true)
  //   fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${company}?serietype=line&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`)
  //     .then(response => response.json())
  //     .then(data =>
  //       setActualData({ id: data.symbol, data: data.historical })
  //     )
  // }

  // useEffect(() => {
  //   if (actualData && !graphData.length) {
  //     setData(setPriceData(30))
  //   }
  // }, [actualData])