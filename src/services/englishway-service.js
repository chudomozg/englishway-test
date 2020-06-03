export default class EnglishWayService {
  // _apiBase = "http://t2.imake.site/wp-json/wp/v2";
  // _urlBase = "http://t2.imake.site/";
  _apiBase = "http://englishway.site/wp-json/wp/v2";
  _urlBase = "http://englishway.site/";

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
      answers: answers.filter(answ => {
        return Boolean(answ.text);
      }),
      correctAnswerIdx: answers.findIndex(({ isCorrect }) => {
        return isCorrect;
      })
    };
  };

  _transformTestOptions = data => {
    return {
      title: data.title.rendered,
      langId: data.test_lang,
      langName: data.acf.ut_lang.name,
      timeLeft: data.acf.ut_timeleft * 60 * 1000,
      userLevels: Object.values(data.acf.urovni_znanij).filter(level => {
        return Boolean(level.name);
      })
    };
  };

  getResource = async (url, ...headers) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return {
      data: await res.json(),
      headers: headers.map(({ headerName, headerString }) => {
        return { headerName, headerValue: res.headers.get(headerString) };
      })
    };
  };

  getAllQuestions = async langId => {
    let page = 1;
    let pageTotal = 1;
    let totalData = [];
    do {
      const { data, headers } = await this.getResource(
        `/tests/?test_lang=${langId}&page=${page}`,
        {
          headerName: "totalPages",
          headerString: "x-wp-totalpages"
        }
      );
      pageTotal = headers[0].headerValue;
      totalData = [...totalData, ...data];
      page++;
    } while (page <= pageTotal);
    return totalData.map(this._transformQuestion);
  };

  getTestOptions = async wpPageId => {
    const res = await this.getResource(`/user_test/${wpPageId}`);
    return this._transformTestOptions(res.data);
  };

  getTest = async () => {
    // const ewPostId = window.ewPostId.id;
    const ewPostId = "580";
    const testOptions = await this.getTestOptions(ewPostId);
    const testData = await this.getAllQuestions(testOptions.langId);

    return {
      ...testOptions,
      questions: testData
    };
  };

  sendFinishData = async totalData => {
    const res = fetch(
      `${this._urlBase}/wp-admin/admin-ajax.php?action=ew_send_finish_test_mail`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json" // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(totalData) // body data type must match "Content-Type" header
      }
    );
    console.log(res.ok);
    if (!res.ok) {
      throw new Error(
        `Could not fetch post data to ${this._urlBase}/wp-admin/admin-ajax.php?action=ew_send_finish_test_mail` +
          `, received ${res.status}`
      );
    }
    return await res.json();
  };
}
