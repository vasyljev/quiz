import axios from 'axios';

class QuestionsService {
  getQuestions() {
    return axios
      .get('https://the-trivia-api.com/v2/questions?tags=harry_potter')
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const questionsService = new QuestionsService();
export default questionsService;
