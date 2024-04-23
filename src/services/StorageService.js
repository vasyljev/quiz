class StorageService {
  get userName() {
    return localStorage.getItem('name');
  }

  set userName(name) {
    localStorage.setItem('name', name);
  }

  get questions() {
    return JSON.parse(localStorage.getItem('questions'));
  }

  set questions(questions) {
    localStorage.setItem('questions', JSON.stringify(questions));
  }

  get correctAnswersNumber() {
    return JSON.parse(localStorage.getItem('answers')) || 0;
  }

  set correctAnswersNumber(number) {
    localStorage.setItem('answers', JSON.stringify(number));
  }
}

const storageService = new StorageService();
export default storageService;
