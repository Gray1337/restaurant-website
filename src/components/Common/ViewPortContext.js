import React, { createContext, useContext, useState } from 'react'

export const ViewportContext = createContext()

const ViewportProvider = ({children}) =>{
  const [width , setWidth] = useState(window.innerWidth)
  const handleWindowResize = () =>{
    setWidth(window.innerWidth)
  }

  React.useEffect(()=>{
    window.addEventListener('resize',handleWindowResize)
    return() => window.removeEventListener('resize',handleWindowResize)
  },[])

  return(
    <ViewportContext.Provider value={{width}}>
      {children}
    </ViewportContext.Provider>
  )
}

export default ViewportProvider

export const useViewport = () =>{
  const {width} =useContext(ViewportContext)
  return {width}
}












//   return (
//     <viewportContext.Provider value={{width}}>
//       {children}
//     </viewportContext.Provider>
//   )
// }

// export const useViewport = () =>{
//   const {width} = useContext(viewportContext);
//   return {width}
// }

// export default ViewportProvider



