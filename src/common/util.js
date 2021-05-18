export const createNewId = (arr) => {
    if (arr.length > 0) {
        const lastElementId = parseInt(arr[arr.length - 1].id);
        return (lastElementId + 1).toString();
    }
    return "1";
};
