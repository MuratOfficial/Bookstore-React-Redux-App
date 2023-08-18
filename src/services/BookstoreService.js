export default class BookstoreService {
  data = [
    {
      title: "Rose",
      author: "R.R.Abrams",
      id: 1,
      price: 5000,
      coverImage: "",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        // reject("Something goes wrong");
      }, 700);
    });
  }
}
