function loadHeader() {
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      const container = document.createElement('div');
      container.innerHTML = data;
      document.body.prepend(container);

  
 

  
    });
}

loadHeader();



function loadFooter() {
  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      const container = document.createElement("footer")
      container.innerHTML = data
      document.body.prepend(container)
    })
}

loadFooter()
