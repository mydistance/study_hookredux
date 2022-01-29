# TypeScript

# es6  import  -- 我的理解  别名导出
   - `export { default as ColorPicker } from './ColorPicker'; `
   - `import * as xxx from ‘xxx’ 会将 “xxx”` 中所有 export 导出的内容组合成一个对象返回(或import * as obj from ‘xx’ 这种写法是把所有的输出包裹到obj对象里);

# TypeScript 中的常见的类型很丰富，包括 ：
`undefined | null | boolean | number | bigint | string | symbol | void | object | unknown | never | any`
-  undefined | null | boolean | number | bigint | string | symbol | void 是原始类型 (primitive type)
-  object 代表了所有非原始类型（non-primitive type）
-  unknown | never  则是类型论中顶和底类型
-  any 则代表了动态类型。

# 基础
- number，bigint
    - bigint 就是一个表示范围无穷大的整数类型
- symbol
    - 是一种特殊的类型。初级使用建议先不了解
- void （）=> viod
    - void 一般用于函数的返回值声明。对变量赋值为 void 类型用途不大，这时候只相当于 undefined 类型的别名。
- unknown
    - 任何值都可以赋值给类型是 unkown  的变量，与其对应的是，不能把一个 unkown 类型的值赋值给任意非 unkown 类型的值。
- never
    - 类型是 never 的值都可以赋值给任何类型的变量，与其对应的是，any
- any 
    - 是 ts 中让人最爱最恨的特性。它是渐进类型系统中的动态类型。
    - 它的出现意味着这里这一小部分将不会有任何类型检查，你想让它是啥类型，它就是啥类型。不能把一个 unkown 类型的值赋值给任意非 unkown 类型的值。

# const，let , 字面量类型与子类型
 - 待补充

# 元组，数组，类型别名
 - 元组
    - 
    ```ts
    const arr: [string, string, number, string] = ['I', 'l', 4, '514']
    arr[0] = '1' // OK
    arr[0] = 1   // Type '1' is not assignable to type 'string'.ts(2322)
    const arr2: ['I', 'l', 4, '514'] = ['I', 'l', 4, '514']
    const arr3: [unknown, unknown, unknown, string] = ['I', 'l', 4, '514']
    ```
 - 数组
    -  
    ```ts 	
    // 复杂场景
    const foo: Array<number> = [1, 2, 3];
    // 简单场景
    const foo: number[] = [1, 2, 3];
    ```

# 类型别名函数  
   - 待补充  未太理解`<List<T>` 包裹的含义 可能标签属性的类型定义？
   - ```ts
        type Pair<A, B> = [A, B];
        type List<T> = Array<T>;
        type Matrix<T> = List<List<T> >;  
        type Foo<T> = []
     ```

# 类型字面量
   - 
    ```ts
    //向对于一个{ key:"xxx"}中不确定里面属性是什么类型
        type ProcessEnv = {
            [key: string]?: string | undefined;
        }
    ```
# 