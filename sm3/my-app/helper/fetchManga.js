import { BASE_URLS } from "../lib/mangadexUrls"

const fetchManga = async (query) => {
    try {
    

    const {search, limit,page} = query
    let urls = `${BASE_URLS}/manga`
    
    let offset = (page - 1) * limit
  if (page) {
        urls += `?offset=${offset}`
        if (search) {
          urls += `&title=${search}`
        }
    }
    else if (search || page === NaN) {
        urls += `?title=${search}`
  }
  
  urls += `&limit=${limit}&includedTagsMode=OR&excludedTagsMode=OR&status%5B%5D=ongoing&status%5B%5D=completed&status%5B%5D=hiatus&status%5B%5D=cancelled&publicationDemographic%5B%5D=shounen&publicationDemographic%5B%5D=shoujo&publicationDemographic%5B%5D=josei&publicationDemographic%5B%5D=seinen&publicationDemographic%5B%5D=none&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist&includes%5B%5D=tag`
  
    const res = await fetch(
      urls
    )
      
      const dataManga = await res.json()
      return dataManga
    } catch (err) {
      console.log(err);
      
    }
  }
  
  export default fetchManga