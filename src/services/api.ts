export const getData = async () => {
    try {
        const response = await fetch("http://localhost:3333/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            headers: {
                "Content-Type": "multipart/form-data",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        });
        const movies = await response.json();
        console.log(movies);
        return movies;
    }
    catch (error) {
        console.log(error)
    }
}