export class Book {
  findBook(title) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=59DrGgglpMpAmN4iDnrlw&q=${title}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

