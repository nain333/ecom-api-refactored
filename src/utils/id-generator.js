export function getNextId(collection) {
    return Math.max(...collection.map(item => item.id), 0) + 1;
}