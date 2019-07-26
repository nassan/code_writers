<template>
  <div id="mainpage" class="home" background-image="../assets/Codeimage.jpg">
    <h1 style="font-family:impact,serif;font-size:60px;">Welcome to C</h1>Before you begin learning any coding language, you need to meet
    <a
      href="https://www.google.com/"
      target="_blank"
    >your new best friend</a>
    <br />
    <br />
    <br />
    <br />Alright, let's start with some basics:
    <br />
    <table>
      <tbody>
        <tr>
          <td>
            <strong>C Basic commands</strong>
          </td>
          <td>
            <strong>Explanation</strong>
          </td>
        </tr>
        <tr>
          <td>#include &lt;stdio.h&gt;</td>
          <td>This is a preprocessor command that includes standard input output header file(stdio.h) from the C library before compiling a C program</td>
        </tr>
        <tr>
          <td>int main()</td>
          <td>This is the main function from where execution of any C program begins.</td>
        </tr>
        <tr>
          <td>{</td>
          <td>This indicates the beginning of the main function.</td>
        </tr>
        <tr>
          <td>/*_some_comments_*/</td>
          <td>whatever is given inside the command “/*&nbsp;&nbsp; */” in any C program, won’t be considered for compilation and execution.</td>
        </tr>
        <tr>
          <td>printf(“Hello_World! “);</td>
          <td>printf command prints the output onto the screen.</td>
        </tr>
        <tr>
          <td>getch();</td>
          <td>This command waits for any character input from keyboard.</td>
        </tr>
        <tr>
          <td>return 0;</td>
          <td>
            <div>This command terminates C program (main function) and returns 0.</div>
          </td>
        </tr>
        <tr>
          <td>}</td>
          <td>
            <div>This indicates the end of the main function.</div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="box">
      <a class="button" href="#popup1">Click here to see where C is useful</a>
    </div>

    <div id="popup1" class="overlay">
      <div class="popup">
        <h2>Literally nowhere</h2>
        <a class="close" href="#">&times;</a>
        <div class="content">C is older than Morgan Freeman why the hell would you use it, <br><br> Go back to the homepage and try a newer language.</div>
      </div>
    </div>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click here to go back to the homepage</a>

  </div>
</template>
  <style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 800px;
  margin: 10px auto;
  border: 1px solid #dedede;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: #dddddd;
}

/* tr:nth-child {
} */
thead {
  background: #dedede;
  font-size: 14px;
  color: #585f65;
}
table th,
table td {
  padding: 7px 15px;
  text-align: left;
}
thead th {
  padding: 14px;
}
tbody th {
  font-weight: normal;
  border-bottom: 1px solid #f5f7f9;
}
hr {
  border: none;
  border-bottom: 1px solid #e5e5e5;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 297px;
  margin: 35px 0;
  clear: both;
  position: relative;
}
body {
  font-family: Arial, sans-serif;
  background-size: cover;
  height: 100vh;
  background-image: "../assets/Codeimage.jpg";
}

h1 {
  text-align: center;
  font-family: Tahoma, Arial, sans-serif;
  color: #006b2d;
  margin: 80px 0;
}

.box {
  width: 40%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  padding: 35px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
}

.button {
  font-size: 1em;
  padding: 10px;
  color: #000;
  border: 2px solid #006b2d;
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.button:hover {
  background: #006b2d;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06d85f;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }
  .popup {
    width: 70%;
  }
}
</style>
<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
