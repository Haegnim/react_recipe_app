import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import "./style/reset.css";
import "./style/app.css";

function App() {
  const APP_ID = "527e10e8";
  const APP_KEY = "0e7652bb155086cc4ad19fd49d9beb66";

  //4. recipes 요청 결과 데이터 useState 정의
  const [recipes, setRecipes] = useState([]);

  // 10. 검색 useState 정의
  const [search, setSearch] = useState("");

  //15. 검색 문자열 useState 정의
  const [query, setQuery] = useState("chicken");
  //5. useEffect 정의
  useEffect(() => {
    getRecipes();
  }, [query]);

  // ("https://api.edamam.com/search?q=chicken&app_id=527e10e8&app_key=0e7652bb155086cc4ad19fd49d9beb66");

  // 3. api 비동기 연결

  //axios 설치 : https://velog.io/@sss5793/axios-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-uuk5elxk88
  //axios 사용 : https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj
  // query sample : curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  const getRecipes = () => {
    axios
      .get(
        //6. 아이디와 키값 변수처리
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((res) => {
        //useEffect의 콜백 파라미터에 []를 사용하지 않으면 res.data.hits가 콘솔에 계속 찍히다가 화면 오류가 난다
        // console.log(res.data.hits);
        setRecipes(res.data.hits);
      });
  };

  // 11. input search 기능 함수 정의
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  // 14. onSubmit 실행 함수 정의
  const getSearch = (e) => {
    e.preventDefault();
    setSearch("");
    setQuery(search);
    //console.log(search);
  };

  return (
    <div className="App">
      <Header />
      {/* 2. 검색창 UI 작성  */}
      <form className="search-form" onSubmit={getSearch}>
        <div className="center">
          {/* 12. onChange 속성에 updateSearch 함수 호출 */}
          <input
            type="text"
            placeholder="Search Recipe..."
            onChange={updateSearch}
          />
          {/* 13. button에 submit 타입을 지정하면 클릭 했을 때 감싸는 form의 onSubmit 속성이 실행 */}
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>

      {/* 7. recipe 컴포넌트 작성 및 임포트 */}
      <div className="recipes">
        {/* 8. Recipe 컴포넌트  반복 처리   */}
        {/* 9. 컴포넌트에 props 지정 */}
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingrs={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
