import { useEffect, useState } from "react"
import DeskPattern from "./PatterDesk"
import Dice from "./Dice"
import MobilePattern from "./MobilePattern"
import { Quote, getQuotes } from "./api"


function App() {
  const [Layrics, setLayrics] = useState<Quote>({} as Quote)
  const [mobileMedia , setMobileMedia] = useState(false)
  const [loading ,setIsLoading] = useState(true)

  useEffect(() => {
      const  isMobile = window.matchMedia("(min-width: 300px) and (max-width: 500px)").matches
      setMobileMedia(isMobile)
  }, [window.innerWidth])
  
useEffect(() => {
  const setUp = async () => {
    const {data} = await getQuotes()
    setIsLoading(false)
    setLayrics(data)
  }
  setUp()
},[loading])


  return (
    <div className="h-[100vh] p-20 item-center justify-center bg-dark-grayish-blue">
      <div className="font-mono p-5 rounded-lg flex flex-col bg-grayish-blue  ">
        <div className="text-neon-green ">
          <h3 className="text-sm text-center">ADVICE #{Layrics.slip?.id}</h3>
        </div>
        <div className="font-bold text-xl text-center mt-5 text-light-cyan">
          <p>{`"${Layrics.slip?.advice}"`|| "Hold Still..."}</p>
        </div>
        <div className=" w-full justify-center  my-8 ">
        {mobileMedia ? (
           <MobilePattern/>
        ):
        (
          <DeskPattern/>
        )
        }
        </div>
        <div onClick={()=> {
            setIsLoading(prev => !prev)
          }}
          className="relative cursor-pointer">
            <Dice isLoading={loading}/>
        </div>
      </div>

    </div>
  )
}

export default App

