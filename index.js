javascript: (function () {
  const darkTheme = `
  body {
  	background-color: #111827;
  	color: #eee;
  }
  .pagetop a:link {
  	color: #a1a1aa;
  }
  #hnmain {
	background-color: #1f2937;
  }
  #hnmain > tbody > tr:first-child td {
  	background-color: #7c2d12;
  }
  a:link {
  	color: #aeaeae;
  }
  .votearrow {
  	background: none;
  	margin-right: 6px;
  }
  .subtext a:link, .score {
    color: #6b7280;
  }	

  a:visited
  {
  	color:#565c64
  }
`;
  document.querySelectorAll(".votearrow").forEach(function setArrowIcon(e) {
    e.innerHTML = `
	<svg
	  width="15px"
	  height="15px"
	  viewBox="-96 0 512 512"
	  xmlns="http://www.w3.org/2000/svg"
	>
	  <path
	    fill="#aeaeae"
	    d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
	  />
	</svg>;
`;
  });
  document.head.insertAdjacentHTML("beforeend", `<style>${darkTheme}</style>`);
})();
