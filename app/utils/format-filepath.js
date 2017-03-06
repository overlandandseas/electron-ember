import Ember from 'ember'

export default function formatFilepath(filePath) {
    let parts = filesPath
        .replace(/\\g, '/')
        .split('/')
        .filter(Boolean)
    
    let link = ''
    return parts.map( part => {
        link += `/${part}`
        return { path: link, name: part }
    }
}
