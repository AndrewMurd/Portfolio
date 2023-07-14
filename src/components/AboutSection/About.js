import { useEffect, useState } from "react";
import "./About.scss";

function About() {
  const updateRate = 60000;
  const dateOfBirth = new Date(2000, 2, 28);
  const [dateTimeStamp, setDateTimeStamp] = useState();

  useEffect(() => {
    setDateTimeStamp(Math.round((new Date() - dateOfBirth) / 60000));
    const interval = setInterval(() => {
      setDateTimeStamp(Math.round((new Date() - dateOfBirth) / 60000));
    }, updateRate);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="class">
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">01</span>
          <span className="blueFont space">class</span>
          <span className="greenFont space">Andrew Murdoch</span>
          <span className="yellowFont">{"{"}</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">02</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="blueFont">constructor</span>
          <span className="pinkFont">{"() {"}</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">03</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="blueFont">this</span>
          <span>.</span>
          <span className="lightBlueFont space">name</span>
          <span className="space">=</span>
          <span className="orangeFont">{"'Andrew Murdoch'"}</span>
          <span>;</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">04</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="blueFont">this</span>
          <span>.</span>
          <span className="lightBlueFont space">dayOfBirthTimestamp</span>
          <span className="space">=</span>
          <span className="numberFont">{dateTimeStamp}</span>
          <span>;</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">05</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="blueFont">this</span>
          <span>.</span>
          <span className="lightBlueFont space">email</span>
          <span className="space">=</span>
          <span className="orangeFont">{"'andrewmurdoch28@gmail.com'"}</span>
          <span>;</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">06</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="blueFont">this</span>
          <span>.</span>
          <span className="lightBlueFont space">hobby</span>
          <span className="space">=</span>
          {/* <span className="orangeFont">{"'golf'"}</span> */}
          <span className="orangeFont">{"'debugging'"}</span>
          <span>;</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">07</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="pinkFont">{"}"}</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">08</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="yellowFont">education</span>
          <span className="pinkFont">{"() {"}</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">09</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="pinkFont space">return</span>
          <span className="blueFont">{"["}</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">10</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="yellowFont space">{"{"}</span>
          <span className="orangeFont">'2018-2022'</span>
          <span className="space">:</span>
          <span className="orangeFont space">
            'University Of Ontario Institute of Technology, Bachelor of Science{" "}
            {"(Honours)"} Computer Science'
          </span>
          <span className="yellowFont">{"}"}</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">11</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="blueFont">{"]"}</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">12</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="pinkFont">{"}"}</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">13</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="yellowFont">skills</span>
          <span className="pinkFont">{"() {"}</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">14</span>
          <div className="flex">
            <div className="dot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
            <span className="pinkFont">
              return{" "}
              <span className="orangeFont">
                <span className="blueFont">{"["}</span>'Angular', 'React',
                'SQL', 'NoSQL', 'Node.js/express.js', 'Socket.io', 'SCSS',
                'JSON', 'Python/Numpy/Pandas/SKlearn/Matplotlib', 'C++/C/C#',
                'Unity', 'Git Version Control', 'Linux/Unix enviroment',
                'Flutter', 'Tensorflow/Keras'{" "}
                <span className="flashingCursor"></span>
                <span className="blueFont" style={{ marginLeft: "20px" }}>
                  {"]"}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">15</span>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <span className="pinkFont">{"}"}</span>
        </div>
      </div>
      <div className="codeLineContainer">
        <div className="codeLine">
          <span className="lineNum">16</span>
          <span className="yellowFont">{"}"}</span>
        </div>
      </div>
    </div>
  );
}

export default About;
