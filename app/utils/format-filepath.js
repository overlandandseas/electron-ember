import Ember from 'ember';

export function formatFilePath(filePath) {
    let parts = filePath
        .replace(/\\/g, '/')
        .split('/')
        .filter(Boolean);
    
    let link = '';
    return parts.map( part => {
        link += `/${part}`;
        return { path: link, name: part };
    });
};
