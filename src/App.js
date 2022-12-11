import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  // 최초값으로 객체로 이루어진 배열을 넣어야함
  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  const inputContents = (event) => {
    setContents(event.target.value);
  };
  const handleSubmitClick = (event) => {
    console.log("확인");
    event.preventDefault();

    const newTodo = {
      title: title,
      contetns: contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h1>My Todo List</h1>
      </header>
      <main>
        <section
          style={{
            border: "1px solid black",
            padding: "30px",
            backgroundColor: "#eee",
            fontSize: "20px",
          }}
        >
          {" "}
          <form onSubmit={handleSubmitClick}>
            <span style={{}}>제목</span>
            <input
              onChange={inputTitle}
              value={title}
              style={{
                padding: "10px 15px",
                borderRadius: "7px",
                marginLeft: "15px",
              }}
              placeholder="제목을 입력해주세요"
            />
            <span style={{ marginLeft: "15px" }}>내용</span>
            <input
              value={contents}
              onChange={inputContents}
              style={{
                padding: "10px 15px",
                borderRadius: "7px",
                marginLeft: "15px",
              }}
              placeholder="내용을 입력해주세요"
            />
            <button
              style={{
                backgroundColor: "cornflowerblue",
                color: "white",
                padding: "5px 30px",
                borderRadius: "7px",
                marginLeft: "75px",
                fontSize: "15px",
              }}
            >
              추가하기
            </button>
          </form>
        </section>

        <section style={{ display: "flex", margin: "20px", gap: "10px" }}>
          <span style={{ fontSize: "30px", marginTop: "70px" }}>Working</span>
          {todos
            .filter((item) => item.isDone === false)
            .map((item) => {
              return (
                <div
                  style={{
                    backgroundColor: "#eee",
                    width: "300px",
                    height: "200px",
                    borderRadius: "7px",
                    textAlign: "center",
                    border: "5px solid green",
                    marginLeft: "15px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "25px",
                      textAlign: "left",
                      padding: "5px",
                      marginLeft: "20px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "18px",
                      textAlign: "left",
                      padding: "5px",
                      marginTop: "-20px",
                      marginLeft: "20px",
                    }}
                  >
                    {item.contetns}
                  </p>
                </div>
              );
            })}
        </section>
        <section style={{ display: "flex", margin: "20px", gap: "10px" }}>
          <span style={{ fontSize: "30px", marginTop: "70px" }}>Done</span>
          {todos
            .filter((item) => item.isDone === true)
            .map((item) => {
              return (
                <div
                  style={{
                    backgroundColor: "#eee",
                    width: "300px",
                    height: "200px",
                    borderRadius: "7px",
                    textAlign: "center",
                    border: "5px solid green",
                    marginLeft: "20px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "25px",
                      textAlign: "left",
                      padding: "5px",
                      marginLeft: "20px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "18px",
                      textAlign: "left",
                      padding: "5px",
                      marginTop: "-20px",
                      marginLeft: "20px",
                    }}
                  >
                    {item.contetns}
                  </p>
                </div>
              );
            })}
        </section>
      </main>
    </>
  );
}

const initialState = [
  {
    title: "1주차",
    contetns: "HTML공부하기",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "2주차",
    contetns: "리액트공부하기",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "3주차",
    contetns: "자바스크립트공부하기",
    isDone: false,
    id: uuidv4(),
  },
];
export default App;
