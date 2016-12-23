export function findIndexById(list, item) {
    return list.findIndex((currentItem) => {
        return currentItem._id == item._id;
    })
}
