const my_library: Media[] = []

enum Status {
  out,
  in
}

type Media = {
  title: string;
  status: Status;
  type: string
}

interface Book extends Media {
  date_published: Date;
  author: string;
  genre: string;
}

interface Magazine extends Media {
  issue_no: number;
  subject: string;
}

const addMedia = (media: Media) => {
  my_library.push(media)
}

const changeMediaStatus = (media: Media) => {
  if(media.status == Status.in){
    media.status = Status.out
  } else {
    media.status = Status.in
  }
}

const printTitlesIn = (library: Media[]): string[] => {
  return library.filter((media) => {
    if (media.status == Status.in){
      return media
    }
  }).map((media) => {
    return media.title 
  })
}
  
  
const book1: Book = {
  date_published: new Date(),
  author: 'Brandon',
  genre: 'non-fiction',
  title: 'My book',
  status: Status.out,
  type: 'Book'  
}

const magazine1: Magazine = {
  issue_no: 3,
  subject: 'fashion',
  title: 'My magazine',
  status: Status.in,
  type: 'magazine'  
}

addMedia(magazine1);
addMedia(book1);

console.log(printTitlesIn(my_library))

changeMediaStatus(book1);

console.log(printTitlesIn(my_library))
