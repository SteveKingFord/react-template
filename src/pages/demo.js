/*
 * @Author: kingford
 * @Date: 2021-04-03 14:14:28
 * @LastEditTime: 2021-04-03 14:14:39
 */
const debounce = (func,delay)=>{
	let timeout;
  return ()=>{
  	if(timeout){
    	clearTimeout(timeout);
    }
    timeout = setTimeout(function(){
    	func();
    },delay);
  }
}

const log = debounce(()=> console.log("call"), 5000)
log()
log()
log()