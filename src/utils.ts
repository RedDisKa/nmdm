

export const clone = (array: any[] | any) => JSON.parse(JSON.stringify(array))

export const sortByText = (array: any[], field: string) => {
    return array.sort((item1, item2) => {
        if (item1[field] < item2[field]) {
            return -1;
        }
        if (item1[field] > item2[field]) {
            return 1;
        }
        return 0;
})}