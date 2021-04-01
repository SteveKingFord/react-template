/*
 * @Author: kingford
 * @Date: 2021-04-01 13:58:24
 * @LastEditTime: 2021-04-01 15:00:07
 */
import {useState,useEffect} from 'react'

export const useMount=(fn:()=>void)=>{
  useEffect(() => {
    fn()
  }, []);
}

export const useDebounce =<V>(value:V,delay:number)=>{
 const [debounceValue, setDebounceValue] = useState(value);
 useEffect(()=>{
   const timeout = setTimeout(()=>setDebounceValue(value),delay)
   return ()=> clearTimeout(timeout)
 },[value,delay])
 return debounceValue
}