import fs from 'fs'
import path from 'path'

const casesDirectory = path.join(process.cwd(), 'cases')

export const getCases = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(casesDirectory)
  return fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.json$/, '')

    // Read markdown file as string
    const fullPath = path.join(casesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const caseItem = JSON.parse(fileContents)

    // Combine the data with the id
    return {
      id,
      ...caseItem
    }
  })
}

export const getAllCasesIds = () => {
  const fileNames = fs.readdirSync(casesDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.json$/, '')
      }
    }
  })
}

export const getCaseData = async (id) => {
  const fullPath = path.join(casesDirectory, `${id}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const caseData = JSON.parse(fileContents)

  // Combine the data with the id
  return {
    id,
    ...caseData
  }
}
