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


    //  ---------------------------------- 联合类型和类型别名 ----------------------------------  
    
    // 联合类型
    const sayHello = (name:string | undefined) => {
        console.log(name)
    }
    sayHello("jingbin")
    sayHello(undefined)
    // 另一种用法，用来约束取值只能是其中一个
    let num : 1 | 2 = 1
    type EventNames = 'click' | 'scroll' | 'mousemove'
    // 以上示例中的 1、2 或 'click' 被称为字面量类型，用来约束取值只能是某几个值中的一个。

    // 可辨识联合: 1可辨识 2联合类型 3类型守卫
    // 1可辨识
    enum CarTrasmission{
        Automatic = 200,
        Manual = 300
    }
    interface Car{
        vType: "car"
        transmission: CarTrasmission
    }
    interface Motorcycle{
        vType : "motorcycle"
        make:number
    }
    interface Truck{
        vType: "truck"
        capacity: number
    }
    // vType 属性，称为可辨识属性，而其他的属性只跟特性的接口有关

    // 2联合类型
    type Vehicle = Motorcycle | Car | Truck
    // Vehicle 类型的变量，可以表示不同类型的车辆

    // 3类型守卫
    const EVALUCATION_FACTOR = Math.PI
    // 使用switch case 来实现类型守卫
    function evaluatePrice(vehicle: Vehicle){
        switch (vehicle.vType) {
            case "truck":
                return vehicle.capacity * EVALUCATION_FACTOR    
            case "car":
                return vehicle.transmission * EVALUCATION_FACTOR    
            case "motorcycle":
                return vehicle.make * EVALUCATION_FACTOR    
        }
    }
    const myTruck:Truck = {vType: "truck", capacity: 9.5}
    console.log(evaluatePrice(myTruck))

    // 类型别名。给一个类型起个新名字，替代后面多个类型
    type Message = string | string[]
    let greet = (message:Message) => {

    }

    //  ---------------------------------- 交叉类型 ----------------------------------  
    // 通过 & 符号可以将现有的多种类型叠加到一起成为一种类型，包含所有类型的特效
    
    // 同名基础类型属性的合并
    type PatialPointX = {x:number,
    // z:string
    }
    type Point = PatialPointX & {y:number,
    // z:number
    }
    let point: Point = {
        x:1,
        y:1// 有2个对象里的属性了
        // z:2
    }
    // 如果对象里都有z,但是类型不一样，z就会变成never类型

    // 同名非基础类型属性的合并
    interface D { d: boolean; }
    interface E { e: string; }
    interface F { f: number; }

    interface A { x: D; }
    interface B { x: E; }
    interface C { x: F; }

    type ABC = A & B & C;

    let abc: ABC = {
    x: {
        d: true,
        e: 'jingbin',
        f: 666
    }
    };
    console.log('abc:', abc);
    // "x": {
        // "d": true,
        // "e": "jingbin",
        // "f": 666
    // }




    //  ---------------------------------- TypeScript 函数 ----------------------------------  
    /**
    // 箭头函数

    // 1 常见语法
    myBooks.forEach(() => console.log('reading'))
    myBooks.forEach(title => console.log(title))
    myBooks.forEach((title,idx,arr) => 
        console.log(idx +"-"+title)
        )
    myBooks.forEach((title,idx,arr) => {
        console.log(idx +"-"+title)
        })

    // 2 使用示例
    function Book() {
        let self = this;
        self.publishDate = 2024
        setInterval(function (){
            console.log(self.publishDate)
        },1000)
    }

    // 使用箭头函数 
    function Book2(){
        this.publishDate = 2024
        setInterval(() => {
            console.log(this.publishDate)
        },1000)
    }
    */

    // 3 参数类型和返回类型
    function creatUserId(name:string ,id:number):string{
        return name + id
    }

    // 4 函数类型
    // 将方法定义一个接收值
    let IdGenerator:(char: string, nums: number) => string
    IdGenerator = creatUserId

    // 5 可选参数以及默认参数
    // 可选参数  加?
    function createUserId(name: string, id:number, age?: number): string {
        return name +  id
    }
    // 默认参数 直接=
    function createUserId2(name: string = "jingbin", id:number,age?:number): string {
        return name + id
    }

    // 6 剩余参数
    // function push(array, ...items) {
    //     items.forEach(function(item)) {
    //         array.push(item)
    //     }
    // }
    // let a = []
    // push(a,1,2,3)

    // 7 函数重载
    type Combinable = /*unresolved*/ any
    function addApp(a:number, b:number):number;
    function addApp(a:string, b:number):string;
    function addApp(a: Combinable,b:Combinable) {
        if(typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString()
        }
        return a + b
    }


    //  ---------------------------------- TypeScript 数组 ----------------------------------
    
    // 1 数组解构
    let x1:number
    let y1:number
    let z1:number
    // let five_array = [0,1,2,3,4]
    // [x,y,z] = five_array

    // 2 数组展开运算符
    let two_array = [0,1]
    let five_array = [...two_array, 2,3,4]

    // 3数组遍历
    let colors:string[] = ["red","green","blue"]
    for(let i of colors){
        console.log(i)
    }

    //  ---------------------------------- TypeScript 对象 ----------------------------------

    // 1 对象解构
    let person = {
        name1:"jingbin",
        gender:"male"
    }
    let {name1,gender} = person

    // 2 对象展开运算符
    let person2 = {
        name2:"jingbin",
        gender:"male",
        address:"wuhan"
    }
    // 组装对象
    let personWithAge = {...person2, age:22}
    // 获取除了某些项外的其他项
    let {name2, ...rest} = person2



    //  ---------------------------------- TypeScript 接口 ----------------------------------
    
    // 1 对象的形状
    interface Person{
        name:string
        age:number
    }
    let semlinker : Person = {
        name: "jingbin",
        age:31
    }

    // 2 可选|只读 属性 readonly
    interface Person1{
        readonly name:string
        age?:number
    }
    // 数组只读
    let a:number[] = [1,2,3,4]
    let ro:ReadonlyArray<number> = a;
    // ro[0] = 23// 错误的

    // 3 任意属性： 使用索引签名
    interface Person2{
        name:string
        age:number
        [propName:string]: any 
    }
    const p1 = {name:"jingbin"}
    const p2 = {name:"jingbin",age:31}
    const p3 = {name:"jingbin",sex:1}// sex

    // 4 接口与类型别名的区别
    // 4.1 Objects/Functions 接口和类型别名都可以描述对象的形状或函数签名
    // 类
    interface Point1{
        x:number,
        y:number
    }
    interface SetPoint{
        (x:number,y:number):void
    }
    // 类型别名
    type Point2 = {
        x:number
        y:number
    }
    type SetPoint2 = (x:number,y:number) => void

    // 4.2 Other Types 类型别名可以用于一些类型，比如原始类型、联合类型和元祖
    type name = string
    type PartialPointX = {x:number}
    type PartialPointY = {y:number}
    type PartialPoint = PartialPointX|PartialPointY
    type Data = [number,string]

    // 4.3 Extend 接口可以扩展别名，反之不行
    interface PartialPointX1{x:number}
    type PartialPointX2 = {x:number}
    // 接口 继承接口
    interface Point3 extends PartialPointX1{y:number}
    // 接口 继承类型别名
    interface Point4 extends PartialPointX2{y:number}
    // 类型别名 继承类型别名
    type Point5 = PartialPointX2 & {y:number}
    // 类型别名 继承接口
    type Point6 = PartialPointX1 & {y:number}

    // 4.4 implements 类可以以相同的方式实现接口或类型别名，但类不能实现类型别名定义的联合类型
    interface Point7{
        x:number
        y:number
    }
    class SomePoint implements Point7{
        x = 1
        y = 2
    }
    type Ponint8 = {
        x:number
        y:number
    }
    class SomePoint2 implements Ponint8{
        x = 1
        y = 2
    }

    // 类不能实现联合类型
    // type PartialPoint3 = { x: number; } | { y: number; };
    // class SomePartialPoint implements PartialPoint3 { // Error
    //     x = 1;
    //     y = 2;
    // }

    // 4.5 Declaration merging 类可以合并多次，会被合并为单个接口
    interface Point8{
        x:number
        y:number
    }
    interface Point8{
        x:number
        y:number
        z:number
    }
    const point3:Point8 = {x:1,y:2,z:3}// 有三个属性了


    //  ---------------------------------- TypeScript 类 ----------------------------------

    // 1 类的属性和方法
    class Greeter {
        static cname:string = "jingbin";
        greeting:string = ""
        age:string// 一定要有初始化，和kotlin一样。否则就用构造函数初始化
        constructor(message:string){
            this.age = message
        }
    }
    let greeter = new Greeter("world")

    // 2 ECMAScript 私有字段 #
    class Person2 {
        #name: string
        constructor(name:string){
            this.#name = name
        }
    }
    let p = new Person2("jingbin")
    // p.#name
    // 与常规属性（甚至使用 private 修饰符声明的属性）不同，私有字段要牢记以下规则：
        // 私有字段以 # 字符开头，有时我们称之为私有名称；
        // 每个私有字段名称都唯一地限定于其包含的类；
        // 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
        // 私有字段不能在包含的类之外访问，甚至不能被检测到。
    
    
    // 3 访问器 可以在类里面通过get set方式提供获取方法
    // 4 类的继承
    class Animal{
        name:string = "飞碟"
    }
    class Snake extends Animal {
        age:string = "1"
    }
    let s = new Snake()
    console.log(s.age)
    console.log(s.name)

    // 5 抽象类
    abstract class Person3{
        constructor(public name:string){}
        abstract say(words:string):void
    }
    // new Person3()//不能直接new和java一样
    class Developer extends Person3 {
        say(words:string) {
            console.log(`say ${words}`)
        }
    }
    new Developer("jingbin").say("ddd")

    // 6 类方法的重载
    class ProductService{
        getProducts():void
        getProducts(id:number):void

        getProducts(id?: number){
            if (typeof id === 'number') {
                console.log(`获取id为 ${id} 的产品信息`)
            } else {
                console.log(`获取所有的产品信息`)
            }
        }
    }
    new ProductService().getProducts()
    new ProductService().getProducts(2)


    //  ---------------------------------- TypeScript 泛型 ----------------------------------

    // 1 泛型语法
    function identity<T,U>(value:T,message:U):T {
        console.log(message)
        return value
    }
    console.log(identity(1,"22"))

    // 2 泛型接口
    interface GenericIdentityFn<T>{
        (arg:T):T
    }

    // 3 泛型类
    class GenericNumber3<T> {
        zeroValue: T|undefined;
        add: ((x: T,y: T) => T)|undefined;
        // constructor(s:T){
        //     this.zeroValue = s
        // }
    }
    let g = new GenericNumber3<number>()
    g.zeroValue = 0
    g.add = function(x,y) {
        return x+y
    }

    // 4 泛型工具类型
    // 4.1 typeof 获取一个变量声明或对象的类型
    interface Person4{
        name:string
        age:number
    }
    const p5:Person4 = {name: "jingbin",age:31}
    type  Sem = typeof p5

    function toArray(x:number):Array<number> {
        return [x]
    }
    type Func = typeof toArray// -> (x:number => number[])

    // 4.2 keyof 获取所有类型的所有键，联合类型
    interface Person5{
        name:string
        age:number
    }
    type K1 = keyof Person5 // "name" | "age"
    type K2 = keyof Person5[]// "length" | "toString" | "pop"...
    type K3 = keyof {[x:string]: Person5}// string | number

    // 字符串索引
    interface StringArray{
        // keyof StringArray => string | number
        [index:string]:string
    }
    // 数字索引
    interface StringArray1{
        // keyof  StringArray1 => number
        [index:number]:string
    }
    // 为了同时支持两种索引类型，就得要求数字索引的返回值必须是字符串索引返回值的子类。
    // 其中的原因就是当使用数值索引时，JavaScript 在执行索引操作时，会先把数值索引先转换为字符串索引。
    // 所以 keyof { [x: string]: Person } 的结果会返回 string | number。

    // 4.3 in  遍历枚举类型
    type Keys = "a"|"b"|"c"
    type Obj = {
        [p in Keys]:any
    }
    // -> {a:any,b:any,c:any}

    // 4.4 infer   声明一个类型变量并且对它进行使用
    type ReturnType2<T> = T extends (
        ...args: any[]
    ) => infer R?R:any
    // infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。

    // 4.5 extends 可以通过extends来增加泛型约束
    interface lengthwise {
        length:number
    }
    function loggingIndextity<T extends lengthwise>(arg:T):T{
        console.log(arg.length)
        return arg
    }
    // loggingIndextity(3)// error
    // 必须包含必须的属性 length
    loggingIndextity({length:10,value:2})

    // 4.6 Partial     Partial<T>将某个类型里的属性全部变成可选项?
    type Partial2<T> = {
        [P in keyof T]?: T[P]
    }
    // 在以上代码中，首先通过 keyof T 拿到 T 的所有属性名，然后使用 in 进行遍历，将值赋给 P，最后通过 T[P] 取得相应的属性值。
    // 中间的 ? 号，用于将所有属性变为可选。
    interface Todo {
        title:string
        desc :string
    }
    function updateTodo(todo:Todo,fieldsToUpdate:Partial2<Todo>){
        return {...todo, ...fieldsToUpdate}
    }
    const todo1 = {
        title:"Leart TS",
        desc:"Learn TypeScript"
    }
    const todo2 = updateTodo(todo1, {
        desc:"Learn TypeScript Enum"
    })
    // 在上面的 updateTodo 方法中，我们利用 Partial<T> 工具类型，定义 fieldsToUpdate 的类型为 Partial<Todo>，即：
    // {
        // title?:string | undefined
        // desc?: string | undefined
    // }


    //  ---------------------------------- TypeScript 装饰器 ----------------------------------
    // 类装饰器
    declare type ClassDecorator2 = <TFunction extends Function>(
        target: TFunction
    ) => TFunction | void;

    function Greeter1(target:Function):void{
        target.prototype.greet = function():void {
            console.log("Hello jingbin")
        }
    }

    // @Greeter1
    // class Greeting2 {
    //     constructor(){}
    // }
    // let myg = new Greeting2()
    // (myg as any).greet()

    // 针对于输出语
    function Greeter2(greeting:string){
        return function(target:Function){
            target.prototype.greet = function():void {
                console.log(greeting)
            }
        }
    }

    // @Greeter2("Hello TS")
    // class Greeting{
    //     constructor(){
            
    //     }
    // }
    // let myg = new Greeting2()
    // (myg as any).greet()

    // 感觉使用不到


    //  ---------------------------------- TypeScript 4.0 新特性 ----------------------------------
    






    


    













    


    

