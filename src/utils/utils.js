import { nanoid } from 'nanoid'

export const getGroupedData = (data) => {
    if (data) {
        return data.map(item => {
            const id = nanoid(7)
            return {
                ...item.image,
                id
            }
        })
    }
    return null
}
