function corrupt_all()  {
    document.querySelectorAll('style, link[rel="stylesheet"]').forEach(e => e.remove());
}


setTimeout(() => {
    let matches = document.querySelectorAll("p");

}, 10000); 


// after 10 seconds
setTimeout(() => {
  document.querySelectorAll('style, link[rel="stylesheet"]').forEach(e => e.remove());
}, 30000); 