import { theme } from './styles/theme'

export const getGroupedData = (data) => Object.keys(data).map(key => ({ id: key, ...data[key] }))

export {
  theme
}
