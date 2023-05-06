/*section-left*/
               var index = 1;
                function changeImage() {
                    var images = ["../IMAGE/tlaptop/2.jpeg", "../IMAGE/tlaptop/3.jpeg", "../IMAGE/tlaptop/4.jpeg"];
                    document.getElementById('image').src = images[index];
                    index++;
                    if(index == images.length) {
                        index = 0;
                    }
                }
                  setInterval(changeImage,1000);
