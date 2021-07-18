var username_adrian = function () {

  function chunk(array, size=1) {
    var arr_len = array.length
    for (var i = 0; i < arr_len; ) {
      for (var j = 0; j < size; j++) {
        if (arr_len <= 0) {
          break
        }
        if (j == 0) {
          array.push([array.shift()])
        } else {
          array[array.length - 1].push(array.shift())
        }
        arr_len--
      }
    }
    return array
  }

  // 使用循环
  // function chunk(array, size = 1) {
  //   if (Array.isArray(array[0])) {
  //     return array
  //   }

  //   var arr_len = array.length
  //   var list = []
  //   for (var i = 0; i < size; i++) {
  //     if (arr_len <= 0) {
  //       break
  //     }
  //     list.push(array.shift())
  //     arr_len--
  //   }
  //   array.push(list)

  //   chunk(array, size)

  //   return array
  // }

  function compact(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var value = array[i]
      if (value != false && value != 0 && value != "" && value != undefined && !isNaN(value)) {
        result.push(value)
      }
    }
    return result
  }

  function concat(array, ...args) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      result.push(array[i])
    }
    for (var j = 0; j < args.length; j++) {
      var value = args[j]
      if (Array.isArray(value)) {
        for (var k = 0; k < value.length; k++) {
          result.push(value[k])
        }
      } else {
        result.push(value)
      }
    }
    return result
  }

  function difference(array, ...arr) {
    var result = []
    var map = {}

    for (var i = 0; i < array.length; i++) {
      var value = array[i]
      if (!(value in map)) {
        map[value] = 0
      }
    }
    for (var j = 0; j < arr.length; j++) {
      var outer_arr = arr[j]
      var inner_arr_len = arr[j].length
      for (var k = 0; k < inner_arr_len; k++) {
        if (outer_arr[k] in map) {
          delete map[outer_arr[k]]
        }
      }
    }
    for (var i = 0; i < array.length; i++) {
      var value = array[i]
      if (value in map) {
        result.push(value)
      }
    }
    return result

  }


  // function union([...arrays]) {
  //   return []
  // }


  // 递归方法展开数组
  var result = []
  function flattenDeep(array) {
    for (var i = 0; i < array.length; i++) {
      var value = array[i]
      if (Array.isArray(value)) {
        flattenDeep(value)
      } else {
        result.push(value)
        // return result
      }
    }
    return result
  }


  // 递归展开数组，并传入参数来控制递归的深度
  function flattenDepth(array, depth=1, result=[]) {
    for (var i = 0; i < array.length; i++) {
      var value = array[i]
      // if (depth > 0) {
        if (Array.isArray(value)) {
          if (depth <= 0) {
            result.push(value)
            continue  // 当 depth < 0 时，停止当前循环语句的继续执行，开始下一次循环，不然会 depth 负数的时候也会进入下一个递归中，导致多遍历几次数组。
          }
          depth--
          flattenDepth(value, depth, result)
        } else {
          result.push(value)
        }
    }
    return result
  }


  function groupBy(collection, f) {
    var map = {}

    for (var i = 0; i < collection.length; i++) {
      var value = collection[i]
      
      if (f == 'length') {
        var f_result = value.length
        if (map[f_result] == undefined) {  // !(f(value) in map)
          map[f_result] = []
          map[f_result].push(value)
        } else {
          map[f_result].push(value)
        }
      } else {
        var f_result = f(value)
        if (map[f_result] == undefined) {  // !(f(value) in map)
          map[f_result] = []
          map[f_result].push(value)
        } else {
          map[f_result].push(value)
        }
      }
    }

    return map
  }


  // 未完成
  // function keyBy(collection, f) {
  //   for (var i = 0; i < collection.length; i++) {

  //   }
  // }


  function forEach(collection, f) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        f(collection[i])
      }
    }
    if (Object.prototype.toString.call(collection) === '[object Object]') {
      for (var j in collection) {
        f(collection[j], j)
      }
    }
  }


  function map(collection, f) {
    var result = []
    var map = {}
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        result.push(f(collection[i]))
      }
      return result
    }
    if (Object.prototype.toString.call(collection) === '[object Object]') {
      for (var j in collection) {
        map[j] = f(collection[j], j)
      }
      return map
    }
  }


  // 未完成
  // function filter(collection, f) {
  //   var result = []
  //   var map = {}
  //   if (Array.isArray(collection)) {
  //     for (var i = 0; i < collection.length; i++) {
  //       result.push(f(collection[i]))
  //     }
  //     return result
  //   }
  //   if (typeof(f) == 'function') {
  //     for (var k in collection) {
  //       if (condition) {
          
  //       }
        
  //     }
  //   }
  //   if (Object.prototype.toString.call(collection) === '[object Object]') {
  //     for (var j in collection) {
  //       map[j] = f(collection[j], j)
  //     }
  //     return map
  //   }
  // }


  // 不理解
  // function keys(obj) {
    
  // }


  function reverse(array) {
    for (var i = 0; i < array.length; i++) {
      var reverseIdx = array.length - i - 1
      if (i < reverseIdx) {
        var temp = array[i]
        array[i] = array[reverseIdx]
        array[reverseIdx] = temp
      } else {
        break
      }
    }
    return array
  }


  function countBy(collection, f) {
    var map = {}

    for (var i = 0; i < collection.length; i++) {
      var value = collection[i]

      if (f == 'length') {
        var f_result = value.length
        if (map[f_result] == undefined) {  // !(f(value) in map)
          map[f_result] = 1
        } else {
          map[f_result]++
        }
      } else {
        var f_result = f(value)
        if (map[f_result] == undefined) {  // !(f(value) in map)
          map[f_result] = 1
        } else {
          map[f_result]++
        }
      }
    }

    return map
  }


  function shuffle(collection) {
    var result = []
    var map = {}
    
    for (var i = 0; i < collection.length; i++) {
      var randIdx = Math.floor(Math.random() * collection.length)
      while (randIdx in map) {
        randIdx = Math.floor(Math.random() * collection.length)
      }
      map[randIdx] = 0
      result.push(collection[randIdx])
    }
    return result
  }


  function isNaN(value) {
    if (value == undefined) {
      return true
    } else if (typeof value == 'object' && Number.isNaN(value.valueOf())) {
      return true
    } else if (Number.isNaN(value)) {
      return true
    } else { 
      return false
    }
  }


  // 检查传入的参数是否是 null 或者是 undefined
  function isNil(value) {
    if (value === null || value === undefined) {
      return true
    } else {
      return false
    }
  }

  
  // 检查传入的参数是否是 undefined 
  function isUndefined(value) {
    if ( value === undefined) {
      return true
    } else {
      return false
    }
  }


  // 将传入的字符串对象的值转化成列表
  function toArray(value) {
    var result = []
    if (Object.prototype.toString.call(value) === '[object Object]') {
      for (var i in value) {
        result.push(value[i])
      }
    } else if (typeof value === 'string') {
      // 字符串的判断方法：https://segmentfault.com/q/1010000002911430
      for (var j = 0; j < value.length; j++) {
        result.push(value[j])
      }
    } else {
      return []
    }
    return result
  }


  // 求数组的和，除了字符串返回原来的值，其余返回 0。
  function sum(array) {
    var sum = 0
    if (Array.isArray(array)) {
      for (var i = 0; i < array.length; i++) {
        sum += array[i]
      }
      return sum
    } else if (typeof(array) === 'string') {
      return array
    } else {
      return sum
    }
  }


  // 将传入的数组迭代相加。
  function sumBy(array, f) {
    var sum = 0
    if (Array.isArray(array)) {
      if (typeof(f) === 'string') {
        for (var j = 0; j < array.length; j++) {
          sum += array[j][f]
        }
        return sum
      }
      for (var i = 0; i < array.length; i++) {
        sum += f(array[i])
      }
      return sum
    } else if (typeof (array) === 'string') {
      return array
    } else {
      return sum
    }
  }


  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    difference: difference,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    groupBy: groupBy,
    // keyBy: keyBy,
    forEach: forEach,
    map: map,
    // filter: filter,
    // keys: keys,
    reverse: reverse,
    countBy: countBy,
    shuffle: shuffle,
    isNaN: isNaN,
    isNil: isNil,
    isUndefined: isUndefined,
    toArray: toArray,
    sum: sum,
    sumBy: sumBy,


  }
}()
  