
export const bookingApi = (book,token) => {

    fetch("http://localhost:8019/user/1", {
        method: "POST",
        mode: 'no-cors',
        // credentials: 'same-origin',
        headers: new Headers ({ 
          'Authorization':  token,
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(book)
      }).then((res) => {
        console.log(res, "Added")
      })
      .catch((err) => {
        console.log(err, "Error")
      })

    } 



