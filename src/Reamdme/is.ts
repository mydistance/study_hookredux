


const A = 'YES'

export type  AATS  = {
   e ?: string
 };

export type Update<S, A> = {
    action ?: A,
    eagerReducer: ( (A:number) => A ) | null,
    eagerReducerTwo:  ((S:string, A:number) => S) | null,
    eagerState?: S | null, // 待更新状态值
    next?: Update<S, A> | null,
  };
  
  let fun = (res:Update<string,number>)=>{
    return res.action
  }
  let obk = {action:1,eagerReducer:(res:number)=>111,eagerReducerTwo:(res:string,res2:number)=>'111'}
  fun(obk)
  obk.eagerReducerTwo('111',222)
