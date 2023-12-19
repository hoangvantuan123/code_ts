//1
const str: string = 'Hello' // String
const num: number = 42 // Number
const bool: boolean = true // boolean
const und: undefined = undefined // undefined
const nul: null = null // null
const currentDate: Date = new Date() // date
// Kiểm tra kiểu dữ liệu
// typeof và instanceof
console.log(typeof str)
console.log(typeof num)
console.log(typeof bool)
console.log(typeof und)
console.log(typeof nul)
console.log(currentDate instanceof Date) // true

//2
interface PersonName {
  id: number
  name: string
  gender: string
  birthday: Date
}
//True
const userPersonTrue: PersonName = {
  id: 1,
  name: 'Hoang Tuan',
  gender: 'nam',
  birthday: new Date('2002-12-31'),
}
console.log(typeof userPersonTrue) // "object"
// False
/* const userPersonFalse: PersonName = {
    id: "2",  // Sai kieu du lieu
    name: "Van",
    gender: "nu",
    birthday: "31-12-2002" // 
} */

//3
//any khong xac dinh
type AnyObject = {
  [key: string]: any
}

const objectAny: AnyObject = {
  id: 1,
  name: 'Hoang Tuan',
  gender: 'nam',
  birthday: new Date('2002-12-31'),
  anyObject: { key: 'name any object' },
}
//console.log(typeof objectAny)

// 4 object nested
type objectNested = {
  id: number
  name: {
    first: string
    last: string
  }
  age: number
  gender: string
  birthday: Date
}

const DataObjNested: objectNested = {
  id: 1,
  name: {
    first: 'Hoang',
    last: 'Tuan',
  },
  age: 20,
  gender: 'Name',
  birthday: new Date('2002-12-31'),
}

console.log('objectNested', typeof DataObjNested)

//5: Generic
// GenericBox type definition
interface GenericBox<T> {
  value: T
}
// Instances of GenericBox
const numberGeneric: GenericBox<number> = { value: 3 }
const stringGeneric: GenericBox<string> = { value: 'Toi la Tuan' }
const booleanGeneric: GenericBox<boolean> = { value: true }
const undGeneric: GenericBox<undefined> = { value: undefined }
const dateGeneric: GenericBox<Date> = { value: new Date('2000-01-23') }

// Generic  Object
type GenericObject<Type extends object> = {
  data: Type
}
const dataGenericObject: GenericObject<objectNested> = {
  data: {
    id: 1,
    name: {
      first: 'Hoang',
      last: 'Tuan',
    },
    age: 20,
    gender: 'Name',
    birthday: new Date('2002-12-31'),
  },
}

// Generic Array

type GenericArray<T> = {
  items: T[]
}

const numberGenericArray: GenericArray<number> = { items: [1, 2, 3, 4] }
const stringGenericArray: GenericArray<string> = {
  items: ['a', 'b', 'c', 'd', 'e'],
}
const objGenericArray: GenericArray<objectNested> = {
  items: [
    {
      id: 1,
      name: {
        first: 'Hoang',
        last: 'Tuan',
      },
      age: 20,
      gender: 'Name',
      birthday: new Date('2002-12-31'),
    },
  ],
}

// Functions filter, find, Map
const filterNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filterArry: GenericArray<objectNested> = {
  items: [
    {
      id: 1,
      name: {
        first: 'Hoang',
        last: 'Tuan',
      },
      age: 20,
      gender: 'Nam',
      birthday: new Date('2002-12-31'),
    },
    {
      id: 2,
      name: {
        first: 'Van',
        last: 'van',
      },
      age: 10,
      gender: 'nu',
      birthday: new Date('2003-12-31'),
    },
    {
      id: 3,
      name: {
        first: 'Khang',
        last: 'Ta',
      },
      age: 15,
      gender: 'nam',
      birthday: new Date('2003-1-25'),
    },
  ],
}
// voi number
const evenNumbers = filterNumber.filter((n) => n % 2 === 0)
const findNumber = filterNumber.find((n) => n === 3)
const mapNumber = filterNumber.map((num) => num * 2)
// voi obj
const filterData = filterArry.items.filter((item) => item.age === 10)
const findData = filterArry.items.find((item) => item.gender === 'nam')
const mapData = filterArry.items.map((items) => items.age)

//namespace
// Thong tin: + Sử dụng tổ chức các mã nguồn riêng biệt
namespace MyNamespace {
  export interface Person {
    name: string
    age: number
  }

  export function UserMyNameSpace(person: Person): void {
    console.log(`Hello ${person.name}`)
  }
}

const personNameSpace: MyNamespace.Person = { name: 'John', age: 21 }
MyNamespace.UserMyNameSpace(personNameSpace)

// d.ts
/*  Mục đích chính là nó giúp cho các thư viện không đc viết mã bằng TS nó dùng để
 mô tả type definition của các thư viện JS */

//Global Type
/*
Mục đích làm cho mã nguồn ngắn mà không cần phỉa import hay require để kích hoạt

var unused = require("magic-string-time");
 or
require("magic-string-time");

 */

interface Person {
  name: string
  age: number
  gender: string
}

//Partial: Tạo ra một kiểu mới trong đó kiểu type có thể tuỳ chọn
const partialPerson: Partial<Person> = { name: 'John' }

//Pick :  Chọn một số thuộc tính từ T để tạo ra một kiểu mới.
const pinkPerson: Pick<Person, 'name' | 'gender'> = {
  name: 'Tuan',
  gender: ' Nu',
}

// Omit : Loại bỏ đi để tạo ra một kiểu mới
const omitPerson: Omit<Person, 'gender'> = { name: 'Hoang', age: 20 }

//Return Type: Lấy kiểu dữ liệu trả về một hàm mới  hoặc là trả về một kiểu dữ liệu của  hàm đó
function greet(): string {
  return 'Toi la tuan'
}
const greetTing: ReturnType<typeof greet> = 'Xin chao ban'
//vd2
function exampleFunction(user: Person): string {
  return user.name
}

type ReturnTypeOfExample = ReturnType<typeof exampleFunction>
const returnValue: ReturnTypeOfExample = 'Tuan hoang ReturnType'

//ParameterType: Sẽ trả về một mảng dữ liệu
type ReturnParameterType = Parameters<typeof exampleFunction>
const returType: ReturnParameterType = [
  { name: 'Tuan', age: 20, gender: 'name' },
]
