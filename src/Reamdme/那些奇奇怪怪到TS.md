# 官网[https://www.tslang.cn/docs/handbook/generics.html]

```ts
const a = {
  b:()=>{}
}
const val:any  = a?.b;  //等同于 if(a && a.b){}

// ts 
interface Props { 
    x: number; 
    onpre:()=>void; 
} 
let square = <Props>{}; //等同于下面
let square = {} as Props;
let a = {} as Props;  a.x = 3; 或 let a = <Props> {}; 或 let a: Props = {}; 

```

# T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了 T当做返回值类型。
- 
```ts
参数类型为 布尔值/数字/字符串
function identity<T>(arg: T): T {
    return arg;  //即参数 和 返回值的类型是一样的 
    // 重点！！！但是 目前仅表示arg 类型为比如 布尔值/数字/字符串 ！ 不可以为对象和数组
}

参数类型为 数组 类型    
function loggingIdentity<T>(arg: T[]): T[] {  
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
function loggingIdentity<T>(arg: Array<T>): Array<T> {
 console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}  
const myIdentity: <T>(arg: T) => T = loggingIdentity;

我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: <U>(arg: U) => U = identity;

我们还可以使用带有调用签名的对象字面量来定义泛型函数：
这就引导了type套type（之前一直不懂）
interface GenericIdentityFn {
    <T>(arg: T): T;
}
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: GenericIdentityFn = identity;

一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary<string>而不只是Dictionary）。 这样接口里的其它成员也能知道这个参数的类型了。
interface GenericIdentityFn<T> {
    (arg: T): T;
}
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: GenericIdentityFn<number> = identity;


interface ConfigFn{
    <T>(value:T):T;
}
var getData:ConfigFn=function<T>(value:T):T{
    return value;
}
getData<string>('张三');



在泛型约束中使用类型参数
function getProperty(obj: T, key: K) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper {
    hasMask: boolean;
}
class ZooKeeper {
    nametag: string;
}
class Animal {
    numLegs: number;
}
class Bee extends Animal {
    keeper: BeeKeeper;
}
class Lion extends Animal {
    keeper: ZooKeeper;
}
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!

// 自己写了一个例子
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
```