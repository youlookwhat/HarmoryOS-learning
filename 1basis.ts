// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World11"
console.log(anExampleVariable)

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.

//  ---------------------------------- TypeScript 基础类型 ----------------------------------  

    // 布尔类型
    let isDone : boolean = false
    console.log(isDone)

    var isDone1 = false
    console.log(isDone1)

    // number 类型
    let count : number = 10
    console.log(count)
    
    //  string 类型
    let nameCh:string = "jingbin"
    console.log(nameCh)

    // 数组 Array
    let list : number[] = [1,2,3]
    let list1 : Array<number> = [1,2,3]
    console.log(list)
    console.log(list1)

    // 数字枚举
    enum Direction {
        NORTH,// 初始值为0。可以设置初始值 = 3
        SOUTH,
        EAST,
        WEST,
    }
    // 反向映射
    let dirName = Direction[0]
    let dirVal = Direction["NORTH"]

    // 字符串枚举
    enum DirectionString {
        NORTH = "NORTH",
        SOUTH = "SOUTH",
        EAST = "EAST",
        WEST = "WEST",
    }
    let dir2:DirectionString = DirectionString.EAST

    // 常量枚举
    const enum Direction2 {
        NORTH,// 初始值为0。可以设置初始值 = 3
        SOUTH,
        EAST,
        WEST,
    }

    // 异构枚举 有不同类型的值
    enum Enum1{
        A,
        B,
        C  = "C",
        D = 8,
        F,
    }

    // Any 类型
    let notSure:any = 666
    notSure = "jingbin"
    notSure = false 

    // 。如果我们使用 any 类型，就无法使用 TypeScript 提供的大量的保护机制。
    // 为了解决 any 带来的问题，TypeScript 3.0 引入了 unknown 类型。

    // unknown 类型
    let value :unknown;
    value = true
    value = 42
    value = "jingbin"
    value = undefined
    value = new TypeError()
    // 不能将unknown的值赋值给boolean,就像多态一样
    
    // let value2 : boolean = value  Error

    // 元祖 Tuple 类型
    let tupleType:[string,boolean]
    tupleType = ["jingbin", true]
    console.log(tupleType)
    // 通过下标访问
    console.log(tupleType[0])
    console.log(tupleType[1])


    // void 类型 没有任何返回值
    function warnUser(): void {
        console.log("This is my warning message")
    }
    function warnUser2() {
        console.log("This is my warning message2")
    }
    warnUser()
    warnUser2()

    // Null 和 undefined 类型
    let u:undefined = undefined
    let n : null = null

    // object 类型 表示非原始类型，就是对象类型，不是基础类型
    // ObjectConstructor 接口定义了 Object 类的属性。
    interface ObjectConstructor {
        create(o: object | null):any
    }
    const proto = {}
    Object.create(proto)
    Object.create(null)
    // Object.create(1111)// Error

    // Object 接口定义了 Object.prototype 原型对象上的属性；
    interface Object {
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
    }

    // {} 类型
    // 没有成员的对象
    const obj = {}
    // obj.prop = "jingbin"// 错误
    obj.toString() // 可以

    // Never 类型
    // never 类型表示的是那些永不存在的值的类型。 
    // 例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

    // 返回never的函数必须存在无法达到的终点
    function error(message: string) :never {
        throw new  Error(message)
    }
    function infinteLoop():never {
        while(true){}
    }

    // 在 TypeScript 中，可以利用never 类型的特性来实现全面性检查，具体示例如下
    type Foo = string | number
    function controlFlowAnalysisWithNever(foo:Foo) {
        if(typeof foo === "string") {

        } else if (typeof foo === "number") {

        } else {
            // foo 在这里是 never
            const check :never = foo
        }
    }
    // 使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。

    


    //  ---------------------------------- TypeScript 断言 ----------------------------------  

    // 尖括号语法
    let someValue :any = "this is a string";
    // let strLength :number = (<string>someValue).length // 无效

    // as 语法
    let someValue2 :any = "this is a string";
    let strLength2 :number = (someValue as string).length

    // 确定赋值断言 TypeScript 编译器就会知道该属性会被明确地赋值。
    let x!:number
    initialize()
    // Variable 'x' is used before being assigned.(2454)
    // 很明显该异常信息是说变量 x 在赋值前被使用了，要解决该问题，我们可以使用确定赋值断言：
    console.log(2*x)// OK
    function initialize(){
        x = 10
    }



    //  ---------------------------------- 类型守卫 ----------------------------------  
    
    // in "属性名" in 对象引用
    interface Admin{
        name:string
        privileges:string[]
    }
    interface Employee{
        name:string
        startDate:Date
    }
    type UnknowEmployee = Employee | Admin
    function printEmployeeInformation(emp: UnknowEmployee){
        console.log("Name: "+emp.name)
        if ("privileges" in emp) {
            // if (typeof emp === "Admin") {  不行，typeof 不能是对象
            // 属性名 in 对象引用
            console.log("privileges: "+emp.privileges)
        }
        if ("startDate" in emp) {
            console.log("startDate: "+emp.startDate)
        }
    }

    // typeof  引用 === 类型。也用于不是对象
    // "typename" 必须是 "number"， "string"， "boolean" 或 "symbol"。 
    // 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
    function padLeft(value: string, padding: string|number) {
        if(typeof padding === "number") {
            return Array(padding + 1).join(" ") + value
        }
        if(typeof padding === "string"){
            return padding + value
        }
        throw new Error(`Expected string or number, got '${padding}'.`)
    }

    // instanceof 对比的是对象
    interface Padder {
        getPaddingString():string
    }
    class SpaceRepeatingPadder implements Padder {
        constructor(private numSpaces: number){}
        getPaddingString(){
            return Array(this.numSpaces + 1).join(" ")
        }
    }
    let padder: Padder = new SpaceRepeatingPadder(6)
    if(padder instanceof SpaceRepeatingPadder) {
        // 判断是否是 SpaceRepeatingPadder，多态
    }

    // 自定义保护的类型谓词
    function inNumber(x:any): x is number {
        return typeof x === "number"
    }
    function inString(x:any): x is string {
        return typeof x === "string"
    }
