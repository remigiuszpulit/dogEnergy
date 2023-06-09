import * as contentful from 'contentful'

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
  })
  
  export async function fetchEntries(type:string) {
    try {
        const entries = await client.getEntries()
        const items: contentful.Entry[] = entries.items
        return items.filter(item => item.sys.contentType.sys.id === type)
     
    }
    catch(error) {
        console.log(error)
    }
    
    
    
  }
  
  export default { fetchEntries }