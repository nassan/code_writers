<template>
  <div class="home">
    
   <a href="https://www.youtube.com/watch?v=bWPMSSsVdPk">hello that's a link for a youtube video that explains html in 8 minutes</a>
 
 <h1>What is HTML?</h1>

 <p>as you seen in the short video HTML is the standard markup language for creating Web pages.</p> 
   <ul>
<li>HTML stands for Hyper Text Markup Language</li>
  <li> HTML describes the structure of a Web page</li>
  <li>HTML consists of a series of elements</li>
  <li>HTML elements tell the browser how to display the content</li>
  <li>HTML elements are represented by tags</li>
  <li>HTML tags label pieces of content such as "heading", "paragraph", "table", and so on</li>
  <li>Browsers do not display the HTML tags, but use them to render the content of the page</li>
</ul>
<h2> HTML Basics</h2>
<h3>HTML Documents</h3>
<p>All HTML documents must start with a document type declaration: <code >&lt;!DOCTYPE html&gt;</code>.</p>
<p>The HTML document itself begins with <code >&lt;html&gt;</code> and ends with <code >&lt;/html&gt;</code>.</p>
<p>The visible part of the HTML document is between <code >&lt;body&gt;</code> and <code >&lt;/body&gt;</code>. </p>
 <h3>HTML Headings</h3>
 <p>HTML headings are defined with the <code >&lt;h1&gt;</code> to <code >&lt;h6&gt;</code> tags.</p>
 <p><code >&lt;h1&gt;</code> defines the most important heading. <code >&lt;h6&gt;</code> defines the least important 
heading&nbsp;</p>
<h3>HTML Paragraphs</h3>
<p>HTML paragraphs are defined with the <code >&lt;p&gt;</code> tag:</p>
<p>here's an example:</p>
<div >
<div >
<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>p<span class="tagcolor" style="color:mediumblue">&gt;</span></span>This is a paragraph.<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/p<span class="tagcolor" style="color:mediumblue">&gt;</span></span><br>
<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>p<span class="tagcolor" style="color:mediumblue">&gt;</span></span>This is another paragraph.<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/p<span class="tagcolor" style="color:mediumblue">&gt;</span></span>
 </div>
</div>
<h3>HTML Links</h3>
<p>HTML links are defined with the <code >&lt;a&gt;</code> tag:</p>
<div>
<h3>Example</h3>
<div>
<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>a<span class="attributecolor" style="color:red"> href<span class="attributevaluecolor" style="color:mediumblue">="https://www.google.com"</span></span><span class="tagcolor" style="color:mediumblue">&gt;</span></span>This is a link<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/a<span class="tagcolor" style="color:mediumblue">&gt;</span></span>
 </div>

</div>
<h3>HTML Images</h3>
<p>HTML images are defined with the <code >&lt;img&gt;</code> tag.</p>
<p>The source file (<code >src</code>), alternative text (<code >alt</code>), 
<code >width</code>, and <code >height</code> are provided as attributes:</p>
<div>
<h4>Example</h4>
<div>
<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>img<span class="attributecolor" style="color:red"> src<span class="attributevaluecolor" style="color:mediumblue">="image1.jpg"</span> alt<span class="attributevaluecolor" style="color:mediumblue">="image1"</span> width<span class="attributevaluecolor" style="color:mediumblue">="104"</span> height<span class="attributevaluecolor" style="color:mediumblue">="142"</span></span><span class="tagcolor" style="color:mediumblue">&gt;</span></span>
 </div>

</div>
<h3>HTML Buttons</h3>
  <p>HTML buttons are defined with the <code>&lt;button&gt;</code> tag:</p>
  <div>
<h4>Example</h4>
<div class="w3-code notranslate htmlHigh">
  <span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>button<span class="tagcolor" style="color:mediumblue">&gt;</span></span>Click me<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/button<span class="tagcolor" style="color:mediumblue">&gt;</span></span>
   </div>
   <h3>HTML Lists</h3>
   <p>HTML lists are defined with the <code >&lt;ul&gt;</code> (unordered/bullet list) or the <code >&lt;ol&gt;</code> (ordered/numbered list) tag, followed by <code >&lt;li&gt;</code> 
tags (list items):</p>
</div>
<div>
<h4>Example</h4>
<div>
  <span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>ul<span class="tagcolor" style="color:mediumblue">&gt;</span></span><br>&nbsp; <span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>li<span class="tagcolor" style="color:mediumblue">&gt;</span></span>Coffee<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/li<span class="tagcolor" style="color:mediumblue">&gt;</span></span><br>&nbsp; <span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>li<span class="tagcolor" style="color:mediumblue">&gt;</span></span>Tea<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/li<span class="tagcolor" style="color:mediumblue">&gt;</span></span><br>&nbsp; <span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>li<span class="tagcolor" style="color:mediumblue">&gt;</span></span>Milk<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/li<span class="tagcolor" style="color:mediumblue">&gt;</span></span><br>
  <span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/ul<span class="tagcolor" style="color:mediumblue">&gt;</span></span><br><br><span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>ol<span class="tagcolor" style="color:mediumblue">&gt;</span></span><br>&nbsp; <span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>li<span class="tagcolor" style="color:mediumblue">&gt;</span></span>Coffee<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/li<span class="tagcolor" style="color:mediumblue">&gt;</span></span><br>&nbsp; <span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>li<span class="tagcolor" style="color:mediumblue">&gt;</span></span>Tea<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/li<span class="tagcolor" style="color:mediumblue">&gt;</span></span><br>&nbsp; <span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>li<span class="tagcolor" style="color:mediumblue">&gt;</span></span>Milk<span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/li<span class="tagcolor" style="color:mediumblue">&gt;</span></span><br>
  <span class="tagnamecolor" style="color:brown"><span class="tagcolor" style="color:mediumblue">&lt;</span>/ol<span class="tagcolor" style="color:mediumblue">&gt;</span></span>
 </div>
</div>
<p>to be continued...</p>

  </div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HtmlLanguage',
  components: {
  }
}
</script>
