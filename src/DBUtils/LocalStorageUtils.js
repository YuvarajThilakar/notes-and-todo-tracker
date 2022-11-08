export function storeContent(content, key) {
    let contentFromStorage = localStorage.getItem(key);
    if (!contentFromStorage) {
        contentFromStorage = { key: [] };
    }
    var contentAsJSON = JSON.parse(contentFromStorage);
    contentAsJSON[key].push(content);
    localStorage.setItem(key, JSON.stringify(contentAsJSON));
}

export function getContent(key)
{
    let content = localStorage.getItem(key);
    if(!content)
    {
        return [];
    }
    const contentAsJSON = JSON.parse(content);
    return contentAsJSON;
}