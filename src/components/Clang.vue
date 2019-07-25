<template>
  <div class="home">
    <h1 style="font-family:impact,serif;font-size:60px;">Welcome to C</h1>Before you begin learning any coding language, you need to meet
    <a
      href="https://www.google.com/"
      target="_blank"
    >your new best friend</a>
    <br />
    <br />
    <br />
    <br />Alright,let's start with some basicccccccs:
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

<aside id="ac-localeswitcher" data-analytics-region="locale switcher" data-analytics-activitymap-region-id="locale switcher" lang="en-IL" dir="ltr"><div class="ac-ls-content"><div class="ac-ls-copy">Choose another country or region to see content specific to your location.</div><div class="ac-ls-actions"><div id="ac-ls-dropdown" class="ac-ls-dropdown ac-ls-actions-item select-collapsed"><div id="ac-ls-dropdown-select" class="ac-ls-dropdown-select ac-ls-dropdown-nav-item" type="text" role="button" aria-haspopup="true" tabindex="0"><span id="ac-ls-dropdown-title"><span class="ac-ls-flag ac-ls-flag-il"></span> <span class="ac-ls-dropdown-copy">Israel</span> </span><span id="ac-ls-dropdown-icon" class="ac-ls-dropdown-icon ac-ls-icon ac-ls-icon-chevron-down"></span></div><div id="ac-ls-dropdown-options" class="ac-ls-dropdown-options" role="menu" aria-expanded="false"><ul class="ac-ls-itemlist" role="presentation"><span class="ac-ls-dropdown-icon ac-ls-icon ac-ls-icon-chevron-up"></span><li role="menuitem" id="ac-ls-dropdown-option-1" class="ac-ls-dropdown-option ac-ls-dropdown-nav-item" aria-selected="true" tabindex="0" data-href="/il/"><span class="ac-ls-flag ac-ls-flag-il"></span> <span class="ac-ls-dropdown-copy">Israel</span></li><li role="menuitem" id="ac-ls-dropdown-option-country-region" class="ac-ls-dropdown-option ac-ls-dropdown-nav-item" data-href="/choose-country-region/" tabindex="0"><span class="ac-ls-flag ac-ls-flag-default"></span> <span class="ac-ls-dropdown-copy">Other country or region</span></li></ul></div></div> <a href="/il/" id="ac-ls-continue" class="ac-ls-button ac-ls-actions-item ac-ls-continue" role="button" data-analytics-click="prop3: continue" data-analytics-title="continue button">Continue</a> <button id="ac-ls-close" class="ac-ls-close ac-ls-actions-item ac-ls-icon ac-ls-icon-close" data-analytics-click="prop3: exit" data-analytics-title="exit button"><span class="ac-ls-close-text" aria-label="Exit"></span></button></div></div></aside>

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
}

tr:nth-child(even) {
  background-color: #dddddd;
}
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
</style>
<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
