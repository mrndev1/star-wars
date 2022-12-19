

export const concat_arr = (items_arr) => {

    console.log(items_arr)

    let items = []
    for (let i of items_arr) { for (let j of i) { items.push(j) } }
    return items;
};