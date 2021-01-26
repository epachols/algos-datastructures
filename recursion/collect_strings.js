const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const stringEmAlong = (object, arr = []) => {
  for (let key in object) {
    if (typeof object[key] === "string") {
      arr.push(object[key]);
    } else if (typeof object[key] === "object" && !Array.isArray(object[key])) {
      return stringEmAlong(object[key], arr);
    } else continue;
  }
  return arr;
};

stringEmAlong(obj); // ["foo", "bar", "baz"])
