import React from 'react';

import CodeExample from './CodeExample';
import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import Anchor from './Anchor';
import Row from '../../src/Row';
import Col from '../../src/Col';
import Panel from '../../src/Panel';
import Thumbnail from '../../src/Thumbnail';
import Button from '../../src/Button';

export default class Page extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
      <NavMain activePage="getting-started" />

      <PageHeader
    title="About us & Our website"
    subTitle="The issue of endangered animals and species extinction has always been a major concern of animal conservationists and environmentalists alike. Unfortunately, throughout the years, there has been less and less care and concern for the protection and preservation of endangered animals. We chose this topic in order to promote and spread awareness of this issue. This task will be accomplished by making information about endangered animals and their threats more widely available."
      />

      <div className="container bs-docs-container bs-docs-single-col-container">
      <div className="bs-docs-section">
      <h2 className="page-header"><Anchor id="team">Our team</Anchor></h2>
    <Row>
    <Col sm={4}>
      <Thumbnail src="https://raw.githubusercontent.com/bryanlng/jekyll-now/master/images/IMG_9269.JPG" alt="242x200">
      <h3>Bryan Leung</h3>
    <div class="card-body">
      <h6 class="card-subtitle mb-3 text-muted">Worked on back-end &amp; database</h6>
    <p class="card-text">I’m currently a third year CS major at UT, who enjoys coding and playing super smash bros.</p>
    <Row className="show-grid">
      <Col xs={12} md={12}>Number of commits: 1</Col>
    <Col xs={12} md={12}>Number of issues: 14</Col>
    <Col xs={12} md={12}>Number of unit tests: 0</Col>
    </Row>
    </div>
    </Thumbnail>
    </Col>

    <Col sm={4}>
      <Thumbnail src="https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/13516299_10207873551411360_9045318712286918375_n.jpg?oh=9c880396ff5c8a8ac48c991637b732c1&oe=5A49092A" alt="242x200">
      <h3>Khuyen Duong</h3>
    <div class="card-body">
      <h6 class="card-subtitle mb-3 text-muted">Worked full-stack</h6>
    <p class="card-text">
      I'm a senior in CS at UT Austin. <br/><br/> I worked at Oklahoma State University (2013), Google (2014 & 2015), Ecole Polytechnique Fédérale de Lausanne (2016) and Dun & Bradstreet (2017).
    </p>
    <Row className="show-grid">
      <Col xs={12} md={12}>Number of commits: 15</Col>
    <Col xs={12} md={12}>Number of issues: 5</Col>
    <Col xs={12} md={12}>Number of unit tests: 0</Col>
    </Row>
    </div>
    </Thumbnail>
    </Col>

    <Col sm={4}>
      <Thumbnail src="https://shivavelingker.files.wordpress.com/2017/09/headshot.jpg" alt="242x200">
      <h3>Shiva Velingker</h3>
    <div class="card-body">
      <h6 class="card-subtitle mb-3 text-muted">Worked on front-end</h6>
    <p class="card-text">
      I’m a junior in Computer Science and Humanities (a design-your-own major) at The University of Texas at Austin.  <br/><br/>
      Check out my portfolio!
      <br/>
      <a href="https://shivavelingker.github.io" target="_blank">https://shivavelingker.github.io</a>
    </p>
    <Row className="show-grid">
      <Col xs={12} md={12}>Number of commits: 15</Col>
    <Col xs={12} md={12}>Number of issues: 5</Col>
    <Col xs={12} md={12}>Number of unit tests: 0</Col>
    </Row>
    </div>
    </Thumbnail>
    </Col>

    <Col sm={4}>
      <Thumbnail src="https://i2.wp.com/mantunguyen.files.wordpress.com/2017/09/dsc_0221.jpg" alt="242x200">
      <h3>Mantu Nguyen</h3>
    <div class="card-body">
      <h6 class="card-subtitle mb-3 text-muted">Worked on front-end</h6>
    <p class="card-text">
      Senior CS major.
  </p>
    <Row className="show-grid">
      <Col xs={12} md={12}>Number of commits: 15</Col>
    <Col xs={12} md={12}>Number of issues: 5</Col>
    <Col xs={12} md={12}>Number of unit tests: 0</Col>
    </Row>
    </div>
    </Thumbnail>
    </Col>

    <Col sm={4}>
      <Thumbnail src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/1506886_753512884678059_561446582_n.jpg?oh=5923ed9975b1e3bcda90fd59e4dcd0b1&oe=5A12E93B" alt="242x200">
      <h3>Dat Vu</h3>
    <div class="card-body">
      <h6 class="card-subtitle mb-3 text-muted">Worked on back-end & database.</h6>
    <p class="card-text">
      I'm a Senior CS major at UT Austin.
  </p>
    <Row className="show-grid">
      <Col xs={12} md={12}>Number of commits: 9</Col>
    <Col xs={12} md={12}>Number of issues: 15</Col>
    <Col xs={12} md={12}>Number of unit tests: 0</Col>
    </Row>
    </div>
    </Thumbnail>
    </Col>

    </Row>

    <h2>Stylesheets</h2>
    <p>
    Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't
    ship with any included css. However, some stylesheet <strong>is required</strong> to use these
    components. How and which bootstrap styles you include is up to you, but the simplest way
    is to include the latest styles from the CDN.
    </p>
    <CodeExample
    mode="htmlmixed"
    codeText={
      `<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">`}
  />
  <p>
    For more advanced use cases you can also use a bundler like Webpack or Browserify to include
    the css files for you as part of your build process but that is beyond the scope of this guide.
      Also see <a href="http://getbootstrap.com/customize/">http://getbootstrap.com/customize/</a> for
    details about customizing stylesheets to match your component use.
    </p>
    <h3>Themes</h3>
    <p>
    React-Bootstrap is compatible with existing Bootstrap themes.
      Just follow the installation instructions for your theme of choice.
    </p>
    <div className="bs-callout bs-callout-warning">
      <p>Because React-Bootstrap completely re-implements the JavaScript bits of Bootstrap, it's
    not automatically compatible with themes that extend the default JavaScript behaviors.</p>
    </div>

    <h2 className="page-header"><Anchor id="commonjs">Javascript</Anchor></h2>
      <p>
      React-Bootstrap is a complete re-implementation of the Bootstrap components using React. It has no
    dependency on either <code>bootstrap.js</code> or jQuery. If you have React setup and React-Bootstrap
    installed you have everything you need.
    </p>
    <p>
    You can consume the library as CommonJS modules, ES6 modules via Babel, AMD, or as a global JS script.
    </p>
    <div className="bs-callout bs-callout-info">
      <h4>Bundle size optimization</h4>
    <p>
    If you install React-Bootstrap using <strong>npm</strong>, you can import individual
    components from <code>react-bootstrap/lib</code> rather than the entire library.
      Doing so pulls in only the specific components that you use, which can significantly reduce
    the size of your client bundle.
    </p>
    </div>
    <h3><Anchor id="commonjs">CommonJS</Anchor></h3>
      <CodeExample
    mode="javascript"
    codeText={
      `var Alert = require('react-bootstrap/lib/Alert');
// or
var Alert = require('react-bootstrap').Alert;`
  }
  />

  <h3><Anchor id="es6">ES6</Anchor></h3>
      <p>
      Es6 modules aren't supported natively yet, but you can use the syntax now with the help
    of a transpiler like Babel.
    </p>
    <CodeExample
    mode="javascript"
    codeText={
      `import Button from 'react-bootstrap/lib/Button';
// or
import { Button } from 'react-bootstrap';`
  }
  />

  <h3><Anchor id="amd">AMD</Anchor></h3>
      <div className="bs-callout bs-callout-danger">
      <p>
      AMD support is limited to requiring the entire package. If you only want to consume specific
    components, consider using npm and CommonJS modules instead.
    </p>
    </div>
    <CodeExample
    mode="javascript"
    codeText={
      `define(['react-bootstrap'], function(ReactBootstrap) {
  var Alert = ReactBootstrap.Alert;
  ...
});`
  }
  />

  <h3><Anchor id="browser-globals">Browser globals</Anchor></h3>
    <p>
    We provide <code>react-bootstrap.js</code> and <code>react-bootstrap.min.js</code> bundles
    with all components exported on the <code>window.ReactBootstrap</code> object.
      These bundles are available on <a href="https://cdnjs.com/libraries/react-bootstrap">CDNJS</a>,
    and in both the Bower and NPM packages.
    </p>
    <CodeExample
    mode="htmlmixed"
    codeText={
      `<script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react-dom.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js"></script>
<script>
var Alert = ReactBootstrap.Alert;
</script>`
  }
  />

  </div>
    <div className="bs-docs-section">
      <h2 className="page-header"><Anchor id="browser-support">Browser support</Anchor></h2>
    <p>We aim to support all browsers supported by both <a href="http://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills">React</a> and <a href="http://getbootstrap.com/getting-started/#support">Bootstrap</a>.</p>
    <p>Unfortunately, due to the lack of resources and the will of dedicating the efforts to modern browsers and getting closer to Bootstrap's features, we will not be testing <code>react-bootstrap</code> against IE8 anymore.
    <br />We will however continue supporting IE8 as long as people submit PRs addressing compatibility issues with it.</p>

    <p>React requires <a href="http://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills">polyfills for non-ES5 capable browsers.</a></p>

    <div className="highlight">
      <CodeExample
    mode="htmlmixed"
    codeText={

      `<!--[if lt IE 9]>
<script>
(function(){
  var ef = function(){};
  window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
}());
</script>
<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>
<![endif]-->`
  }
  />
  </div>
    </div>
    </div>

    <PageFooter />
    </div>
  );
  }
}
