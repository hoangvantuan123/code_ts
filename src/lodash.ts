import * as _ from 'lodash'
import { Data } from './main'

//lodash
const sortByItems = _.sortBy(Data.items, 'age')
const mapItems = _.map(Data.items)
const filterItems = _.filter(Data.items, { age: 10 })
const bigFilterItems = _.filter(Data.items, (item) => item.age > 5)

const pickItems = _.pick(Data.items, ['name', 'age'])
const omitItems = _.omit(Data.items, 'age')
const mergeItems = _.merge({}, Data.items, { city: 'Hanoi' })
