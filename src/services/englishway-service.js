export default class EnglishWayService {
  _apiBase = "http://englishway.site/wp-json/wp/v2";

  _transformQuestion = ({ id, acf }) => {
    const answers = Object.values(acf.answers).map(ans => {
      return {
        text: ans.answ_text,
        isCorrect: ans.answ_is_correct == "correct" ? true : false
      };
    });
    return {
      id,
      group: acf.question_group,
      text: acf.question_text,
      answers,
      correctAnswerIdx: answers.findIndex(({ isCorrect }) => {
        return isCorrect;
      })
    };
  };

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return res;
  };

  getAllQuestions = async () => {
    let page = 1;
    let pageTotal = 1;
    let totalData = [];
    do {
      const res = await this.getResource(`/tests/?page=${page}`);
      pageTotal = res.headers.get("x-wp-totalpages");
      const data = await res.json();
      totalData = [...totalData, ...data];
      page++;
    } while (page <= pageTotal);
    return totalData.map(this._transformQuestion);
  };
}
