"use strict";
const my_library = [];
var Status;
(function (Status) {
    Status[Status["out"] = 0] = "out";
    Status[Status["in"] = 1] = "in";
})(Status || (Status = {}));
const addMedia = (media) => {
    my_library.push(media);
};
const changeMediaStatus = (media) => {
    if (media.status == Status.in) {
        media.status = Status.out;
    }
    else {
        media.status = Status.in;
    }
};
const printTitlesIn = (library) => {
    return library.filter((media) => {
        if (media.status == Status.in) {
            return media;
        }
    }).map((media) => {
        return media.title;
    });
};
const book1 = {
    date_published: new Date(),
    author: 'Brandon',
    genre: 'non-fiction',
    title: 'My book',
    status: Status.out,
    type: 'Book'
};
const magazine1 = {
    issue_no: 3,
    subject: 'fashion',
    title: 'My magazine',
    status: Status.in,
    type: 'magazine'
};
addMedia(magazine1);
addMedia(book1);
console.log(printTitlesIn(my_library));
changeMediaStatus(book1);
console.log(printTitlesIn(my_library));
