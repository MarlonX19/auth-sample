export interface PostsResponse {
    first: number
    prev: null | number
    next: number
    last: number
    pages: number
    items: number
    data: Daum[]
  }
  
interface Daum {
    userId: number
    id: string
    title: string
    body: string
  }
  
  