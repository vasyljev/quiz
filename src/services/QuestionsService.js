import axios from 'axios';

class QuestionsService {
  getQuestions() {
    return axios
      .get('https://the-trivia-api.com/v2/questions?tags=harry_potter')
      .then((res) => res.data)
      .catch((error) => {
        console.error(error);
      });
  }
}

const questionsService = new QuestionsService();
export default questionsService;
